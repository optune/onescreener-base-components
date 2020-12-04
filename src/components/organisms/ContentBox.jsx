/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { TextBox } from './TextBox.jsx'
import { GigsBox } from './GigsBox.jsx'
import { MediaBox } from './MediaBox.jsx'
import { CoverBox } from './CoverBox.jsx'
import { TeaserLinksBox } from './TeaserLinksBox.jsx'

import { MediaSmall, MediaMobile, NotMediaMobile } from '../../style/media.js'

import { renderHtml } from '../../utils/renderHtml.js'

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
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 0;
  z-index: 1;
  pointer-events: none;
`

const ResponsiveContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 2;

  ${stylesContentDesktop}

  ${({ isDifferentPositions, isPreviewMobile, isSidePreview }) =>
    isDifferentPositions &&
    css`
      ${isPreviewMobile && stylesContentMobile}

      @media ${MediaMobile} {
        ${!isSidePreview && stylesContentMobile}
      }
    `}

  /* ${({ isPreviewMobile }) =>
    isPreviewMobile &&
    css`
      ${stylesContentMobile}
    `} */

    /* @media ${MediaMobile} {
      ${stylesContentMobile}
    }  */
`

const Container = styled.div`
  position: relative;
  height: 40%;
  width: 40%;
  
  ${({ isPreviewMobile }) =>
    isPreviewMobile &&
    css`
      height: ${({ isSidePreview }) => (isSidePreview ? '40%' : '40%')};
      width: ${({ isSidePreview }) => (isSidePreview ? '100%' : '100%')};
      margin: 0px 10px;
    `}

  @media ${MediaMobile} {
    height: ${({ isSidePreview }) => (isSidePreview ? null : '40%')};
    width: ${({ isSidePreview }) => (isSidePreview ? null : '100%')};
    margin: 0px 10px;
  }

  margin: 32px 24px;
`

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
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  pageUrl,
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
    isDifferentPositions,
    gigsAPIDomain,
    gigsList,
    gigsLoading,
    media,
    teaserLinks,
    text,
    type,
    wordWrap,
  } = content

  const position = getContentPosition({ content })

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
      linksPosition={links.list.length > 0 ? links.position : 'NONE'}
      linksSize={links.size}
      isSidePreview={isSidePreview}
      isPreviewMobile={isPreviewMobile}
      isDifferentPositions={isDifferentPositions}
    >
      <Container isSidePreview={isSidePreview} isPreviewMobile={isPreviewMobile}>
        {Content}
      </Container>
    </ResponsiveContainer>
  )
}
