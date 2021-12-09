/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

import { TextBox } from './TextBox.jsx'
import { GigsBox } from './GigsBox.jsx'
import { MediaBox } from './MediaBox.jsx'
import { CoverBox } from './CoverBox.jsx'
import { TeaserLinksBox } from './TeaserLinksBox.jsx'

import { MediaMobile, NotMediaMobile } from '../../style/media.js'

import { renderHtml } from '../../utils/renderHtml.js'
import { SectionOverlay } from '../molecules/SectionOverlay.js'

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
    justify-content: center;

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
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &center-left {
    align-items: center;
    justify-content: center;
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
    justify-content: center;

    & > div > div {
      justify-content: center;
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

const DesktopGrid = {
  RowSize: 6,
  ColumnSize: 6,
  Unit: 16.666, // = 100 : 6
}

const MobileGrid = {
  RowSize: 3,
  ColumnSize: 2,
  RowUnit: 33.333,
  ColumnUnit: 50,
}

const LinkMargin = {
  L: 9,
  M: 7,
  S: 5,
}

const LinkMarginMobile = {
  S: 2.5,
  M: 3.5,
  L: 4.5,
}

const LinkMarginSidePreview = {
  L: 3,
  M: 2,
  S: 1,
}

const PreviewMobile = {
  width: 333,
  height: 520,
}

const ContentSize = {
  Desktop: {
    S: '25%',
    M: '30%',
    L: '33.333%',
  },
  Mobile: {
    S: '60%',
    M: '80%',
    L: '100%',
  },
}

const round = (a) => a.toFixed(2)

const getGridArea = (
  { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan },
  { linksPosition, linksSize = 'M', isSidePreview = false }
) => {
  const { ColumnSize, RowSize, Unit } = DesktopGrid
  // Decide if margin is calculated from top or bottom and left or right
  const isLeft = ColumnSize - endColumn >= startColumn - 1
  const positionH = isLeft ? 'left' : 'right'

  const isBottom =
    RowSize - endRow < startRow - 1 ||
    (endRow === RowSize && ['BOTTOM_CENTER', 'BOTTOM_LEFT', 'BOTTOM_RIGHT'].includes(linksPosition))
  const positionV = isBottom ? 'bottom' : 'top'

  // Calculate vertical and horizontal margins and width
  const marginHUnit = isLeft ? startColumn - 1 : ColumnSize - endColumn
  const marginH = (marginHUnit * Unit).toFixed(3)

  const marginVUnit = isBottom ? RowSize - endRow : startRow - 1
  const marginV = (marginVUnit * Unit).toFixed(3)

  let marginVLinks = 0
  let marginHLinks = 0

  const linkMargin = isSidePreview ? LinkMarginSidePreview[linksSize] : LinkMargin[linksSize]

  // Give extra margin if links are at same side as content
  switch (linksPosition) {
    case 'BOTTOM_CENTER':
    case 'BOTTOM_LEFT':
    case 'BOTTOM_RIGHT':
      if (isBottom && endRow === RowSize) marginVLinks += linkMargin
      break
    case 'CENTER_RIGHT':
      if (!isLeft && endColumn === ColumnSize) marginHLinks += linkMargin
      break
    case 'CENTER_LEFT':
      if (isLeft && startColumn === 1) marginHLinks += linkMargin
      break
    default:
    // Do nothing
  }

  const width = round(columnSpan * Unit)
  const widthCorrection = round((columnSpan * (marginHLinks + 2)) / ColumnSize)

  const height = round(rowSpan * Unit)
  const heightCorrection = round((rowSpan * (marginVLinks + 2)) / RowSize)

  const area = `
    ${positionH}: calc(${marginH}${isSidePreview ? '%' : 'vw'} + ${marginHLinks + 1}rem);
    ${positionV}: calc(${marginV}${isSidePreview ? '%' : 'vh'} + ${marginVLinks + 1}rem);
    width: calc(${width}${isSidePreview ? '%' : 'vw'} - ${widthCorrection}rem);
    height: calc(${height}${isSidePreview ? '%' : 'vh'} - ${heightCorrection}rem);
  `

  return css`
    ${area}
  `
}

const getGridAreaMobile = (
  { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan },
  { linksSize = 'M', isPreviewMobile = false }
) => {
  const { ColumnSize, ColumnUnit, RowSize, RowUnit } = MobileGrid

  // Decide if margin is calculated from top or bottom and left or right
  const isLeft = ColumnSize - endColumn >= startColumn - 1
  const positionH = isLeft ? 'left' : 'right'

  // Calculate vertical and horizontal margins and width
  const marginHUnit = isLeft ? startColumn - 1 : ColumnSize - endColumn
  let marginH = (marginHUnit * ColumnUnit).toFixed(3)

  const marginVUnit = RowSize - endRow
  let marginV = (marginVUnit * RowUnit).toFixed(3)

  let marginVLinks = 0
  let marginHLinks = 0

  const linkMargin = endRow === RowSize ? LinkMarginMobile[linksSize] : 0

  // Give extra margin if links are at same side as content
  if (endRow === RowSize) marginVLinks += linkMargin

  const height = `${round(rowSpan * RowUnit)}${isPreviewMobile ? '%' : 'vh'}`
  const heightCorrection = (rowSpan * (linkMargin + 2)) / RowSize
  const width = `${round(columnSpan * ColumnUnit)}${isPreviewMobile ? '%' : 'vw'}`
  const widthCorrection = (columnSpan * 2) / ColumnSize

  const important = isPreviewMobile ? ' !important' : ''

  marginH = isPreviewMobile ? `${Math.round(PreviewMobile.width * marginH) / 100}px` : `${marginH}%`
  marginV = isPreviewMobile
    ? `${Math.round(PreviewMobile.height * marginV) / 100}px`
    : `${marginV}%`

  const area = `
    ${positionH}: calc(${marginH} + 1rem)${important};
    bottom: calc(${marginV} + ${linkMargin + 1}rem)${important};
    width: calc(${width} - ${widthCorrection}rem)${important};
    height: calc(${height} - ${heightCorrection}rem)${important};
  `

  return css`
    ${area}
  `
}

const getArea = ({ position, span }) => {
  const [startRowField, startColumnField] = position.split('/')
  const [rowSpanField, columnSpanField] = span.split('/')

  const startRow = parseInt(startRowField)
  const startColumn = parseInt(startColumnField)
  const rowSpan = parseInt(rowSpanField)
  const columnSpan = parseInt(columnSpanField)
  const endRow = startRow + parseInt(rowSpan) - 1
  const endColumn = startColumn + parseInt(columnSpan) - 1

  return { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan }
}

const FullscreenContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 0;

  z-index: 99;
  /* pointer-events: none; */
`

const ResponsiveContainer = styled.div`

position: relative;
width: 100%;
height: 100%;
display: flex;
z-index: 99;
/* bottom: 5.2rem; */

${({ isSidePreview, isTeaserLinks, linksPosition, contentPosition, isPreviewMobile }) =>
  css`
    bottom: ${linksPosition.includes('BOTTOM') &&
    !isTeaserLinks &&
    (isPreviewMobile
      ? contentPosition.classnameMobile.toUpperCase().includes('BOTTOM')
      : contentPosition.classnameDesktop.toUpperCase().includes('BOTTOM')) &&
    (isSidePreview ? '3.1rem' : '6.4rem')};
    left: ${linksPosition.includes('LEFT') &&
    !isTeaserLinks &&
    (isPreviewMobile
      ? contentPosition.classnameMobile.toUpperCase().includes('LEFT')
      : contentPosition.classnameDesktop.toUpperCase().includes('LEFT')) &&
    isSidePreview &&
    !isPreviewMobile &&
    '2.8rem'};
    right: ${linksPosition.includes('RIGHT') &&
    !isTeaserLinks &&
    (isPreviewMobile
      ? contentPosition.classnameMobile.toUpperCase().includes('RIGHT')
      : contentPosition.classnameDesktop.toUpperCase().includes('RIGHT')) &&
    isSidePreview &&
    !isPreviewMobile &&
    '2.8rem'};
  `}


  ${stylesContentDesktop}

  ${({ isDifferentPositions, isPreviewMobile, isSidePreview }) =>
    css`
      ${isPreviewMobile && stylesContentMobile}

      @media ${MediaMobile} {
        ${!isSidePreview && stylesContentMobile}
      }
    `}
    

    ${({ area, areaMobile, linksPosition, linksSize, isPreviewMobile, isSidePreview }) =>
      !!area &&
      !!areaMobile &&
      css`
        position: absolute;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;

        @media ${NotMediaMobile} {
          ${isPreviewMobile
            ? !!areaMobile && getGridAreaMobile(areaMobile, { linksSize, isPreviewMobile: true })
            : !!area && getGridArea(area, { linksPosition, linksSize, isSidePreview })}
        }

        @media ${MediaMobile} {
          ${(!!areaMobile && !isSidePreview && getGridAreaMobile(areaMobile, { linksSize })) ||
          isPreviewMobile
            ? !!areaMobile && getGridAreaMobile(areaMobile, { linksSize, isPreviewMobile: true })
            : !!area && getGridArea(area, { linksPosition, linksSize, isSidePreview })}
        }
      `}
`

const Container = styled.div`
  position: relative;
  margin: 0.5rem;
  height: ${({ isLegacy, size }) => (isLegacy ? '100%' : ContentSize.Desktop[size])};
  width: ${({ isLegacy, size }) => (isLegacy ? '100%' : ContentSize.Desktop[size])};
  

  ${({ isSidePreview, isTeaserLinks, isGigs }) =>
    (isTeaserLinks || isGigs) &&
    css`
      min-width: ${({ isSidePreview }) => (isSidePreview ? '255px' : '315px')};
    `}


  ${({ isPreviewMobile, isSidePreview, isLegacyMobile, size }) =>
    isPreviewMobile &&
    css`
      height: ${isLegacyMobile ? '100%' : isSidePreview ? '40%' : '40%'};
      width: ${isLegacyMobile ? '100%' : isSidePreview ? ContentSize.Mobile[size] : '100%'};
      margin: 0px 10px;
    `}

  ${({ isTeaserLinks }) =>
    isTeaserLinks &&
    css`
      top: 4%;
      height: ${({ isSidePreview }) => (isSidePreview ? '80%' : '65%')};
    `}

  @media ${MediaMobile} {
    height: ${({ isSidePreview }) => (isSidePreview ? null : '40%')};
    width: ${({ isSidePreview }) => (isSidePreview ? null : '100%')};
    margin: 0px 10px;

    ${({ isLegacyMobile, isTeaserLinks }) =>
      isLegacyMobile &&
      css`
        height: 100%;
        width: 100%;
        ${!isTeaserLinks && 'margin: 0;'}
      `}
  }

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
  analyticsLivePage,
  content,
  design,
  domainName,
  getImageUrl,
  isPreviewMobile,
  isPreviewMobileReady,
  isProPlanRequired,
  isSidePreview,
  links,
  modalShop,
  onContentSectionClick,
  onLoadShopItem,
  pageUrl,
  setModalShop,
  setModalEmbed,
  showRedirectOverlay,
  showStatistics,
  shopEnabled,
  statisticsPeriod,
  trackingVisitorEvents,
  visitorSession,
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

    // legacy
    position: positionLegacy,
    positionMobile,
    span,
    size,
    spanMobile,
  } = content

  const {
    color: colorDesign,
    colorBackground: colorBackgroundDesign,
    colorAccent: colorAccentDesign,
    colorBackgroundAccent: colorBackgroundAccentDesign,
  } = design?.theme?.content || {}

  const position = getContentPosition({ content })

  const isTeaserLinks = type === 'TEASER_LINKS'
  const isText = type === 'TEXT'
  const isGigs = type === 'GIGS'

  const colors = {
    color: colorDesign || color,
    colorAccent: colorAccentDesign || colorAccent,
    colorBackground: colorBackgroundDesign || colorBackground,
    colorBackgroundAccent: colorBackgroundAccentDesign || colorBackgroundAccent,

    colorLinks: colorDesign || teaserLinks?.colorLinks || color,
    colorLinksBackground:
      colorBackgroundDesign || teaserLinks?.colorLinksBackground || colorBackground,
  }

  const area =
    positionLegacy === 'null' || span === 'null' || !positionLegacy || !span
      ? undefined
      : getArea({
          position: isTeaserLinks ? '2/2' : positionLegacy,
          span: isTeaserLinks ? '5/4' : span,
        })
  const areaMobile =
    positionMobile === 'null' || spanMobile === 'null' || !positionMobile || !spanMobile
      ? undefined
      : getArea({
          position: isTeaserLinks ? '2/1' : positionMobile,
          span: isTeaserLinks ? '1/2' : spanMobile,
        })
  const { border, circle, square } = links

  /*
   * Set content component
   */

  let fullscreen = false
  let Content
  switch (type) {
    case 'COVER':
      Content = <CoverBox cover={cover} getImageUrl={getImageUrl} />
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
          isSidePreview={isSidePreview}
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
      Content = (
        <TeaserLinksBox
          analyticsLivePage={analyticsLivePage}
          color={colors.colorLinks}
          colorBackground={colors.colorLinksBackground}
          domainName={domainName}
          getImageUrl={getImageUrl}
          isProPlanRequired={isProPlanRequired}
          isSidePreview={isSidePreview}
          isPreviewMobile={isPreviewMobile}
          isPreviewMobileReady={isPreviewMobileReady}
          modalShop={modalShop}
          onLoadShopItem={onLoadShopItem}
          setModalShop={setModalShop}
          setModalEmbed={setModalEmbed}
          shopEnabled={shopEnabled}
          showStatistics={showStatistics}
          statisticsPeriod={statisticsPeriod}
          teaserLinks={teaserLinks.list}
          trackingVisitorEvents={trackingVisitorEvents}
          visitorSession={visitorSession}
        />
      )
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
    <Fragment>
      {showRedirectOverlay && (
        <SectionOverlay
          positionDesktop={position.classnameDesktop}
          positionMobile={position.classnameMobile}
          linksPosition={links?.list?.length > 0 ? links?.position : ''}
          onClick={onContentSectionClick}
          isPreviewMobile={isPreviewMobile}
          isTeaserLinks={isTeaserLinks}
          color={'red'}
        />
      )}
      <ResponsiveContainer
        className={`desktop-${isTeaserLinks ? 'center-center' : position.classnameDesktop} mobile-${
          isTeaserLinks ? 'center-center' : position.classnameMobile
        }`}
        area={area}
        areaMobile={areaMobile}
        linksPosition={links.list.length > 0 ? links.position : 'NONE'}
        linksSize={links.size}
        contentPosition={position}
        isTeaserLinks={isTeaserLinks}
        isSidePreview={isSidePreview}
        isPreviewMobile={isPreviewMobile}
        isDifferentPositions={isDifferentPositions}
      >
        <Container
          isLegacy={!!area}
          isLegacyMobile={!!areaMobile}
          isSidePreview={isSidePreview}
          isPreviewMobile={isPreviewMobile}
          isTeaserLinks={isTeaserLinks}
          isGigs={isGigs}
          size={size}
        >
          {Content}
        </Container>
      </ResponsiveContainer>
    </Fragment>
  )
}
