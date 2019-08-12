/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { TextBox } from '../organisms/TextBox.jsx'
import { GigsBox } from '../organisms/GigsBox.jsx'
import { MediaBox } from '../organisms/MediaBox.jsx'

import { MediaSmall, MediaMobile } from '../../style/media.js'

import { renderHtml } from '../../utils/renderHtml.js'

const GridSize = 6
const GridUnit = 16.666 // = 100 : 6
const MaxSpanMobile = 4 * GridUnit

const LinkMargin = {
  L: 9,
  M: 7,
  S: 5,
}

const round = a => a.toFixed(2)

const getGridArea = (
  { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan },
  linksPosition,
  linksSize = 'M'
) => {
  // Decide if margin is calculated from top or bottom and left or right
  const isLeft = GridSize - endColumn >= startColumn - 1
  const positionH = isLeft ? 'left' : 'right'

  const isBottom =
    GridSize - endRow < startRow - 1 ||
    (endRow === 6 &&
      ['BOTTOM_CENTER', 'BOTTOM_LEFT', 'BOTTOM_RIGHT'].includes(linksPosition))
  const positionV = isBottom ? 'bottom' : 'top'

  // Calculate vertical and horizontal margins and width
  const marginHUnit = isLeft ? startColumn - 1 : 6 - endColumn
  const marginH = (marginHUnit * GridUnit).toFixed(3)

  const marginVUnit = isBottom ? 6 - endRow : startRow - 1
  const marginV = (marginVUnit * GridUnit).toFixed(3)

  let marginVLinks = 0
  let marginHLinks = 0

  const linkMargin = LinkMargin[linksSize]

  // Give extra margin if links are at same side as content
  switch (linksPosition) {
    case 'BOTTOM_CENTER':
    case 'BOTTOM_LEFT':
    case 'BOTTOM_RIGHT':
      if (isBottom && endRow === 6) marginVLinks += linkMargin
      break
    case 'CENTER_RIGHT':
      if (!isLeft && endColumn === 6) marginHLinks += linkMargin
      break
    case 'CENTER_LEFT':
      if (isLeft && startColumn === 1) marginHLinks += linkMargin
      break
    default:
    // Do nothing
  }

  const width = round(columnSpan * GridUnit)
  const widthCorrection = round((columnSpan * (marginHLinks + 2)) / GridSize)

  const height = round(rowSpan * GridUnit)
  const heightCorrection = round((rowSpan * (marginVLinks + 2)) / GridSize)

  const area = `
    ${positionH}: calc(${marginH}vw + ${marginHLinks + 1}rem);
    ${positionV}: calc(${marginV}vh + ${marginVLinks + 1}rem);
    width: calc(${width}vw - ${widthCorrection}rem);
    height: calc(${height}vh - ${heightCorrection}rem);

    @media ${MediaMobile} {
      ${positionH}: calc(${marginH}vw + 1rem);
      ${positionV}: calc(${marginV}vh + ${isBottom ? linkMargin + 1 : 1}rem);
      width: calc(${width}vw - ${(columnSpan * 2) / GridSize}rem);
      height: calc(${height}vh - ${(rowSpan * (linkMargin + 2)) / GridSize}rem);
    }
  `

  return css`
    ${area}
  `
}

const FullscreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`
const ResponsiveContainer = styled.div`
  position: absolute;
  z-index: 3;
  
  ${({ area, linksPosition, linksSize }) =>
    getGridArea(area, linksPosition, linksSize)}

  @media ${MediaSmall} {
    min-width: 33.333vw;
    min-height: 33.333vw;
  }
`

const getArea = ({ position, span }) => {
  const [startRowField, startColumnField] = (position || '4/2').split('/')
  const [rowSpanField, columnSpanField] = (span || '2/4').split('/')

  const startRow = parseInt(startRowField)
  const startColumn = parseInt(startColumnField)
  const rowSpan = parseInt(rowSpanField)
  const columnSpan = parseInt(columnSpanField)
  const endRow = startRow + parseInt(rowSpan) - 1
  const endColumn = startColumn + parseInt(columnSpan) - 1

  return { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan }
}

export const ContentBox = ({ content, links }) => {
  /*
   * Get content values
   */
  const {
    alignHorizontal,
    color,
    colorAccent,
    colorBackground,
    colorBackgroundAccent,
    gigsAPI,
    media,
    position,
    span,
    text,
    type,
    wordWrap,
  } = content
  const colors = { color, colorAccent, colorBackground, colorBackgroundAccent }
  const area = getArea({ position, span })
  const { border, circle, square } = links

  /*
   * Set content component
   */

  let fullscreen = false
  let Content
  switch (type) {
    case 'GIGS':
      Content = (
        <GigsBox
          api={gigsAPI}
          border={border}
          circle={circle}
          square={square}
          alignHorizontal={alignHorizontal}
          {...colors}
        />
      )
      break
    case 'MEDIA':
      Content = <MediaBox media={media} />
      fullscreen = media.fullscreen
      break

    default:
      Content = (
        <TextBox
          {...colors}
          wordWrap={wordWrap}
          alignHorizontal={alignHorizontal}
        >
          {renderHtml(text)}
        </TextBox>
      )
      break
  }

  return fullscreen ? (
    <FullscreenContainer>{Content}</FullscreenContainer>
  ) : (
    <ResponsiveContainer
      area={area}
      linksPosition={links.list.length > 0 ? links.position : 'NONE'}
      linksSize={links.size}
    >
      {Content}
    </ResponsiveContainer>
  )
}
