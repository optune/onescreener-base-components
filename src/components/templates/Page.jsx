/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { customHtml } from '../molecules/customHtml/index.jsx'

// Molecules
import { TextOverlay } from '../molecules/TextOverlay'

// Background
import { Background } from '../atoms/Background.jsx'

// Boxes
import { LogoBox } from '../organisms/LogoBox.jsx'
import { ContentBox } from '../organisms/ContentBox.jsx'
import { LinksBox } from '../organisms/LinksBox.jsx'

// Icons
import { Links } from '../icons/platform/index.jsx'

// Utils
import { getImageUrl } from '../../utils/getImageUrl.js'

// Global Styles
import GlobalStyle from '../../style/global.js'
import { NotMediaSmall } from '../../style/media'

const PageContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ color = '#000000' }) => color};
  background-image: ${({ preloadImage }) => `url(${preloadImage})`};
  background-repeat: no-repeat;
  background-position: ${({ focusPoint }) => focusPoint};
  background-size: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
  display: flex;
  overflow: hidden;

  ${({ isSidePreview }) =>
    isSidePreview &&
    css`
      box-shadow: -16px 3px 25px -22px rgba(255, 255, 255, 0.7),
        16px 3px 25px -22px rgba(255, 255, 255, 0.7), 0 5px 8px 7px rgba(0, 0, 0, 0.68),
        0 0 0 10px black;
      border-radius: ${({ isPreviewMobile }) => (isPreviewMobile ? '16px' : '6px')};
      transition: border-radius 0.3s ease-out;
    `}
`

const ForegroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 2;
`

const BacklinkUrl =
  'https://res.cloudinary.com/optune-me/image/upload/e_blackwhite,q_auto:good,c_fit,w_64,f_auto/v1558014130/onescreener-v2/app/logo-onescreener.png'

const BackLink = styled.a`
  position: ${({ isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? 'absolute' : 'fixed'};
  background-image: url(${BacklinkUrl});
  background-size: initial;
  background-color: #606060;
  background-position: center;
  background-repeat: no-repeat;
  width: 70px;
  height: 15px;
  opacity: 0.4;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;
  color: #ffffff;
  transition: opacity 0.3s ease-out;
  z-index: 9999;

  &:hover {
    opacity: 0.6;
  }

  & h1 {
    color: #808080;
    font-size: 5px;
    opacity: 0.1;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Page = ({
  page,
  noBacklink,
  isPreviewMobile,
  isPreviewMobileReady,
  Modal,
  isSidePreview,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])
  const getUrl = getImageUrl(ssrDone)

  const [modalData, setModalData] = useState({
    show: false,
    content: '',
    label: '',
  })

  let PageComponent = null

  if (page) {
    const { background, logo, content } = page
    const { links } = page || { links: { list: [] } }

    const CustomHtml = content?.customHTML > '' ? customHtml[content.customHTML] : null

    PageComponent = (
      <Fragment>
        <GlobalStyle />
        <PageContainer
          preloadImage={getImageUrl(false)(background)}
          focusPoint={background.focusPoint}
          fullscreen={background.fullscreen}
          color={background.color}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
        >
          {ssrDone && <Background background={background} getImageUrl={getUrl} />}

          <ForegroundContainer>
            {/* Back Link to onescreener.com */}
            {!noBacklink && (
              <BackLink
                href="https://www.onescreener.com"
                target="_blank"
                title="created with onescreener.com"
                isPreviewMobile={isPreviewMobile}
              >
                <h1>created by onescreener.com</h1>
              </BackLink>
            )}

            {/* Logo */}
            {logo && (
              <LogoBox
                logo={logo}
                links={links}
                getImageUrl={getUrl}
                isPreviewMobile={isPreviewMobile}
                isPreviewMobileReady={isPreviewMobileReady}
                isSidePreview={isSidePreview}
                zIndex={2}
              />
            )}

            {/* Content */}
            <ContentBox
              content={content}
              links={links}
              isPreviewMobile={isPreviewMobile}
              isPreviewMobileReady={isPreviewMobileReady}
              isSidePreview={isSidePreview}
            />

            {/* Links */}
            {links.list.length > 0 && (
              <Fragment>
                <TextOverlay
                  border={links.border}
                  circle={links.circle}
                  color={links.colorLinks || content.color}
                  colorAccent={links.colorLinksAccent || content.colorAccent}
                  colorBackground={links.colorLinksBackground || content.colorBackground}
                  colorBackgroundAccent={
                    links.colorLinksBackgroundAccent || content.colorBackgroundAccent
                  }
                  content={modalData.content}
                  isPreviewMobile={isPreviewMobile}
                  isSidePreview={isSidePreview}
                  label={modalData.label}
                  onClose={() => setModalData({ ...modalData, show: false })}
                  show={modalData.show}
                  square={links.square}
                />
                <LinksBox position={links.position} zIndex={4} isPreviewMobile={isPreviewMobile}>
                  {Links({
                    links,
                    content,
                    isPreviewMobile,
                    isSidePreview,
                    Modal,
                    modalData,
                    setModalData,
                  })}
                </LinksBox>
              </Fragment>
            )}
          </ForegroundContainer>

          {CustomHtml && <CustomHtml isPreviewMobile={isPreviewMobile} />}
        </PageContainer>
      </Fragment>
    )
  }

  return PageComponent
}
