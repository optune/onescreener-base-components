/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { TextBox } from './TextBox.jsx'
import { GigsBox } from './GigsBox.jsx'
import { MediaBox } from './MediaBox.jsx'
import { CoverBox } from './CoverBox.jsx'
import { TeaserLinksBox } from './TeaserLinksBox.jsx'

import { renderHtml } from '../../utils/renderHtml.js'

import { MediaMobile } from '../../style/media'

const stylesContentDesktop = `
&.desktop- {
  &top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &top-center {
    align-items: flex-start;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &top-right {
    align-items: flex-start;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &center-left {
    align-items: center;
    justify-content: flex-start;
  }

  &center-center {
    align-items: center;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &center-right {
    align-items: center;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
  }

  &bottom-center {
    align-items: flex-end;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &bottom-right {
    align-items: flex-end;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }
}`

const stylesContentMobile = `
&.mobile- {
  &top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &top-center {
    align-items: flex-start;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &top-right {
    align-items: flex-start;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &center-left {
    align-items: center;
    justify-content: flex-start;
  }

  &center-center {
    align-items: center;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &center-right {
    align-items: center;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
  }

  &bottom-center {
    align-items: flex-end;
    justify-content: center;
    margin: 2px;

    & > div > div {
      justify-content: center;
    }
  }

  &bottom-right {
    align-items: flex-end;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }
}`

const FullscreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`

const ResponsiveContainer = styled.div`
  position: absolute;
  z-index: 3;

  ${stylesContentDesktop}

  ${({ isDifferentPositions, isPreviewMobile, isSidePreview }) =>
    isDifferentPositions &&
    css`
      ${isPreviewMobile && stylesContentMobile}

      @media ${MediaMobile} {
        ${!isSidePreview && stylesContentMobile}
      }
    `}


  ${({ isPreviewMobile, isSidePreview, padding }) =>
    css`
      ${isPreviewMobile ? padding.mobile : padding.desktop};

      @media ${MediaMobile} {
        ${!isSidePreview && padding.mobile}
      }
    `}
`

/*
 * Defined content padding in alignment with links
 */

const PositionLeft = ['BOTTOM_LEFT', 'CENTER_LEFT', 'TOP_LEFT']
const PositionRight = ['BOTTOM_RIGHT', 'CENTER_RIGHT', 'TOP_RIGHT']
const PositionBottom = ['BOTTOM_LEFT', 'BOTTOM_CENTER', 'BOTTOM_RIGHT']
const PositionBottomLeft = ['BOTTOM_LEFT', 'BOTTOM_CENTER']
const PositionBottomRight = ['BOTTOM_RIGHT', 'BOTTOM_CENTER']

const defineContentPadding = ({ isPreviewMobile, isSidePreview }) => ({
  left: `padding-left:  ${(isSidePreview && 3.3) || (isPreviewMobile && 4.5) || 6}rem`,
  right: `padding-right: ${(isSidePreview && 3.3) || (isPreviewMobile && 4.5) || 6}rem`,
  bottom: `padding-bottom: ${(isSidePreview && 3.3) || (isPreviewMobile && 4.5) || 6}rem`,
  none: 'padding: 0',
})

const getContentPadding = ({ content, links, isPreviewMobile, isSidePreview }) => {
  const contentPositionDesktop = content.positionDesktop || content.position
  const contentPositionMobile =
    (content.isDifferentPositions && content.positionMobile) || contentPositionDesktop

  const contentPadding = defineContentPadding({ isPreviewMobile, isSidePreview })

  const linkPosition = links.list.length > 0 ? links.position : ''

  const paddingIndexDesktop =
    (linkPosition === 'CENTER_LEFT' && PositionLeft.includes(contentPositionDesktop) && 'left') ||
    (linkPosition === 'CENTER_RIGHT' &&
      PositionRight.includes(contentPositionDesktop) &&
      'right') ||
    (PositionBottomLeft.includes(linkPosition) &&
      PositionBottomLeft.includes(contentPositionDesktop) &&
      'bottom') ||
    (PositionBottomRight.includes(linkPosition) &&
      PositionBottomRight.includes(contentPositionDesktop) &&
      'bottom') ||
    'none'

  const paddingIndexMobile =
    // (linkPosition === 'CENTER_LEFT' && PositionLeft.includes(logoPositionMobile) && 'left') ||
    // (linkPosition === 'CENTER_RIGHT' && PositionRight.includes(logoPositionMobile) && 'right') ||
    //(PositionBottom.includes(linkPosition) &&
    (linkPosition > '' && PositionBottom.includes(contentPositionMobile) && 'bottom') ||
    // (isPreviewMobile && 'bottom') ||
    'none'

  return {
    desktop: contentPadding[paddingIndexDesktop],
    mobile: contentPadding[paddingIndexMobile],
  }
}

/*
 * Get classnames for content position
 */

const getContentPosition = ({ content }) => {
  const positionDesktop =
    (content.positionDesktop > '' && content.positionDesktop) || content.position

  const classnameDesktop =
    (positionDesktop > '' && positionDesktop.toLowerCase().replace('_', '-')) || 'top-center'

  const contentPosition =
    (content.isDifferentPositions && content.positionMobile) ||
    content.positionDesktop ||
    content.position

  const classnameMobile =
    (contentPosition > '' && contentPosition.toLowerCase().replace('_', '-')) || 'top-center'

  return {
    classnameMobile,
    classnameDesktop,
  }
}

export const ContentBox = ({
  content,
  links,
  pageUrl,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  zIndex = 4,
}) => {
  /*
   * Get content values
   */
  const {
    alignHorizontal,
    color,
    colorAccent,
    colorBackground,
    colorBackgroundAccent,
    cover,
    gigsAPI,
    gigsAPIDomain,
    gigsList,
    gigsLoading,
    media,
    isDifferentPositions = false,
    teaserLinks,
    text,
    type,
    wordWrap,
  } = content

  const position = getContentPosition({ content })
  const padding = getContentPadding({ content, links, isPreviewMobile, isSidePreview })

  const isTeaserLinks = type === 'TEASER_LINKS'
  const colors = { color, colorAccent, colorBackground, colorBackgroundAccent }

  const { border, circle, square } = links

  /*
   * Set content component
   */

  let fullscreen = false
  let Content
  switch (type) {
    case 'COVER':
      Content = <CoverBox cover={cover} />
      break
    case 'GIGS':
      Content = (
        <GigsBox
          alignHorizontal={alignHorizontal}
          border={border}
          circle={circle}
          gigsAPI={gigsAPI}
          gigsAPIDomain={gigsAPIDomain}
          gigsList={gigsList}
          gigsLoading={gigsLoading}
          isPreviewMobile={isPreviewMobileReady}
          pageUrl={pageUrl}
          square={square}
          {...colors}
        />
      )
      break
    case 'MEDIA':
      Content = media ? (
        <MediaBox media={media} isPreviewMobile={isPreviewMobile} isSidePreview={isSidePreview} />
      ) : null
      fullscreen = media ? media.fullscreen : false
      break

    case 'TEASER_LINKS':
      Content = <TeaserLinksBox teaserLinks={teaserLinks.list} isSidePreview={isSidePreview} />
      break
    case 'TEXT':
      Content = (
        <TextBox
          {...colors}
          alignHorizontal={alignHorizontal}
          isPreviewMobile={isPreviewMobileReady}
          isSidePreview={isSidePreview}
          textValue={text}
          wordWrap={wordWrap}
          value={text}
        >
          {renderHtml(text)}
        </TextBox>
      )
      break

    default:
      Content = null
  }

  return fullscreen ? (
    <FullscreenContainer>{Content}</FullscreenContainer>
  ) : (
    <ResponsiveContainer
      className={`desktop-${isTeaserLinks ? 'top-center' : position.classnameDesktop} mobile-${
        isTeaserLinks ? 'top-center' : position.classnameMobile
      }`}
      zIndex={zIndex}
      isPreviewMobile={isPreviewMobile}
      isSidePreview={isSidePreview}
      isDifferentPositions={content?.isDifferentPositions || false}
      padding={padding}
      linksPosition={links.list.length > 0 ? links.position : 'NONE'}
      linksSize={links.size}
    >
      {Content}
    </ResponsiveContainer>
  )
}
