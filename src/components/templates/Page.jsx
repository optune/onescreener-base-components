/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import styled from 'styled-components'

import { renderHtml } from '../../utils/renderHtml.js'

import { LogoBox } from '../organisms/LogoBox.jsx'
import { TextBox } from '../organisms/TextBox.jsx'
import { GigsBox } from '../organisms/GigsBox.jsx'
import { LinksBox } from '../organisms/LinksBox.jsx'
import { MediaBox } from '../organisms/MediaBox.jsx'
import { Logo } from '../Logo.jsx'

import { Links } from '../icons/platform/index.jsx'

import Button from '../Button.jsx'

import { getGigs } from '../../api/gigs/index.js'

import GlobalStyle from '../../style/global.js'

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ color }) => color};
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
  display: flex;
`

const BackLink = styled.a`
  position: fixed;
  background-image: url(https://www.onescreener.com/img/onescreener-logo.svg);
  background-size: 60px 15px;
  background-color: #808080;
  background-position: center;
  background-repeat: no-repeat;
  width: 70px;
  height: 15px;
  opacity: 0.3;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;
`

export const Page = ({ page }) => {
  const { background, logo, content, gigAPI } = page
  const {
    type,
    color,
    colorAccent,
    colorBackground,
    gigsAPI,
    media,
    text,
  } = content
  const { provider, slug } = gigsAPI || { provider: '', slug: '' }
  const { links } = page || { links: { list: [] } }

  const colors = { color, colorBackground, colorAccent }

  let Content
  switch (type) {
    case 'GIGS':
      Content = (
        <TextBox {...colors} id="gigs">
          <GigsBox getGigs={getGigs} api={provider} slug={slug} {...colors} />
        </TextBox>
      )

      break
    case 'MEDIA':
      Content = <MediaBox media={media} />
      break

    default:
      Content = <TextBox {...colors}>{renderHtml(text)}</TextBox>
      break
  }

  return (
    <Fragment>
      <GlobalStyle />
      <PageContainer
        image={background.image && background.image.url}
        fullscreen={background.fullscreen}
        color={background.color}
      >
        {/* Back Link to onescreener.com */}
        <BackLink
          href="http://www.onescreener.com"
          target="_blank"
          title="created with onescreener.com"
        >
          <span>created by onescreener.com</span>
        </BackLink>

        {/* Logo */}
        {logo && logo.image && (
          <LogoBox position={logo.position} zIndex={2}>
            <Logo logo={logo} />
          </LogoBox>
        )}

        {/* Logo */}
        {Content}

        {/* Links */}
        {links.list.length > 0 && (
          <LinksBox position={links.position}>{Links(links, content)}</LinksBox>
        )}
      </PageContainer>
    </Fragment>
  )
}
