/* eslint-disable react/prop-types */
import React from 'react'
import ReactPlayer from 'react-player'

import { renderHtml } from '../../utils/renderHtml.js'

import { ContentBox } from '../organisms/ContentBox.jsx'
import { LinksBox } from '../organisms/LinksBox.jsx'
import { Logo } from '../Logo.jsx'

import { Links } from '../icons/platform/index.jsx'

import Button from '../Button.jsx'
import Gigs from '../Gigs.jsx'
import { getGigs } from '../../api/gigs/index.js'

import styled from 'styled-components'

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
`

export const Page = ({ page }) => {
  const { background, logo, content, gigAPI } = page
  const { type, color, text, mediaUrl } = content
  const { api, slug } = gigAPI || { api: '', slug: '' }
  const { links } = page || { links: { list: [] } }

  let Content
  switch (type) {
    case 'GIGS':
      Content = (
        <ContentBox color={color} id="gigs">
          <Gigs getGigs={getGigs} api={api} slug={slug} />
        </ContentBox>
      )

      break
    case 'MEDIA':
      Content = <ReactPlayer url={mediaUrl} playing />
      break

    default:
      Content = <ContentBox color={color}>{renderHtml(text)}</ContentBox>
      break
  }

  return (
    <PageContainer
      image={background.image && background.image.url}
      fullscreen={background.fullscreen}
      color={background.color}
    >
      {/* Logo */}
      {logo && logo.image && (
        <ContentBox position={logo.position}>
          <Logo logo={logo} />
        </ContentBox>
      )}

      {/* Logo */}
      <ContentBox position={content.position}>{Content}</ContentBox>

      {/* Links */}
      {links.list.length > 0 && (
        <LinksBox position={links.position}>
          {Links(links.list, content.color)}
        </LinksBox>
      )}
    </PageContainer>
  )
}
