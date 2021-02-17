/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { customHtml } from '../molecules/customHtml/index.jsx'

// Atoms
import { BackLink } from '../atoms/BackLink'

// Molecules
import { Links } from '../molecules/links/Links.jsx'
import { TextOverlay } from '../molecules/TextOverlay'

// Background
import { Background } from '../atoms/Background.jsx'

// Boxes
import { LogoBox } from '../organisms/LogoBox.jsx'
import { ContentBox } from '../organisms/ContentBox.jsx'
import { LinksBox } from '../organisms/LinksBox.jsx'

// Utils
import { getImageUrl } from '../../utils/getImageUrl.js'

// Global Styles
import GlobalStyle from '../../style/global.js'
import { MediaSmall } from '../../style/media.js'

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: ${({ color = '#000000' }) => color};

  ${({ preloadImage, focusPoint, fullscreen }) =>
    preloadImage &&
    css`
      background-image: url(${preloadImage});
      background-repeat: no-repeat;
      background-position: ${focusPoint};
      background-size: ${fullscreen ? 'cover' : 'contain'};
    `}

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

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BlockedCoverContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.5);

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

const BlockedOverlay = styled.p`
  padding: 3rem 4rem;
  font-size: 36px;
  color: red;
  background-color: rgba(255, 255, 255, 0.8);
  transform: rotate(-22.2deg);
`

export const Page = ({
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  isInstagramBrowser,
  Modal,
  hasPro,
  noBacklink,
  page,
  pageUrl,
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

    const isPro = hasPro || !!(content.type !== 'NONE')

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
            {!noBacklink && !isSidePreview && (
              <BackLink isPreviewMobile={isPreviewMobile} isPro={isPro} />
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
                isTeaserLinks={content.type === 'TEASER_LINKS'}
                zIndex={10}
              />
            )}

            {/* Content */}
            <ContentBox
              content={content}
              links={links}
              isPreviewMobile={isPreviewMobile}
              isPreviewMobileReady={isPreviewMobileReady}
              isSidePreview={isSidePreview}
              pageUrl={pageUrl}
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

                <LinksBox
                  position={links.position}
                  zIndex={99}
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  isInstagramBrowser={isInstagramBrowser}
                >
                  {Links({
                    content,
                    isPreviewMobile,
                    isSidePreview,
                    links,
                    Modal,
                    modalData,
                    pageUrl,
                    setModalData,
                  })}
                </LinksBox>
              </Fragment>
            )}
          </ForegroundContainer>

          {CustomHtml && <CustomHtml isPreviewMobile={isPreviewMobile} />}
        </PageContainer>

        {page.isBlocked && (
          <BlockedCoverContainer>
            <BlockedOverlay>Page temporarily unavailable</BlockedOverlay>
          </BlockedCoverContainer>
        )}
      </Fragment>
    )
  }

  return PageComponent
}
