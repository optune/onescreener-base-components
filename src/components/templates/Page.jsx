/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

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
  'https://res.cloudinary.com/optune-me/image/upload/b_rgb:808080,bo_10px_solid_rgb:808080,e_blackwhite,q_auto:good,c_fit,w_70,f_auto/v1558014130/onescreener-v2/app/logo-onescreener.png'

const BackLink = styled.a`
  position: fixed;
  background-image: url(${BacklinkUrl});
  background-size: contain;
  background-color: #808080;
  background-position: center;
  background-repeat: no-repeat;
  width: 70px;
  height: 15px;
  opacity: 0.3;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;
  color: #ffffff;

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

export const Page = ({ page, noBacklink }) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])
  const getUrl = getImageUrl(ssrDone)

  let PageComponent = null

  if (page) {
    const { background, logo, content, gigAPI } = page
    const { links } = page || { links: { list: [] } }

    PageComponent = (
      <Fragment>
        <GlobalStyle />
        <PageContainer
          preloadImage={getImageUrl(false)(background)}
          focusPoint={background.focusPoint}
          fullscreen={background.fullscreen}
          color={background.color}
        >
          {ssrDone && <Background background={background} getImageUrl={getUrl} />}

          <ForegroundContainer>
            {/* Back Link to onescreener.com */}
            {!noBacklink && (
              <BackLink
                href="https://www.onescreener.com"
                target="_blank"
                title="created with onescreener.com"
              >
                <h1>created by onescreener.com</h1>
              </BackLink>
            )}

            {/* Logo */}
            {logo && <LogoBox zIndex={2} logo={logo} getImageUrl={getUrl} />}

            {/* Logo */}
            <ContentBox content={content} links={links} />

            {/* Links */}
            {links.list.length > 0 && (
              <LinksBox position={links.position} zIndex={4}>
                {Links(links, content)}
              </LinksBox>
            )}
          </ForegroundContainer>
        </PageContainer>
      </Fragment>
    )
  }

  return PageComponent
}
