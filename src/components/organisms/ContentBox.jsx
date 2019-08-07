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
const LinkMargin = 5

const getGridArea = (
  { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan },
  linksPosition
) => {
  // Decide if margin is calculated from top or bottom and left or right
  const isLeft = GridSize - endColumn >= startColumn - 1
  const positionH = isLeft ? 'left' : 'right'

  const isTop = GridSize - endRow >= startRow - 1
  const positionV = isTop ? 'top' : 'bottom'

  // Calculate vertical and horizontal margins and width
  const marginHUnit = isLeft ? startColumn - 1 : 6 - endColumn
  const marginH = (marginHUnit * GridUnit).toFixed(3)

  const marginVUnit = isTop ? startRow - 1 : 6 - endRow
  const marginV = (marginVUnit * GridUnit).toFixed(3)

  let marginVLinks = 0
  let marginHLinks = 0

  // Give extra margin if links are at same side as content
  switch (linksPosition) {
    case 'BOTTOM_CENTER':
    case 'BOTTOM_LEFT':
    case 'BOTTOM_RIGHT':
      if (!isTop && endRow === 6) marginVLinks += LinkMargin
      break
    case 'CENTER_RIGHT':
      if (!isLeft && endColumn === 6) marginHLinks += LinkMargin
      break
    case 'CENTER_LEFT':
      if (isLeft && startColumn === 1) marginHLinks += LinkMargin
      break
    default:
    // Do nothing
  }

  const width = columnSpan * GridUnit
  const widthCorrection = (columnSpan * (marginHLinks + 2)) / GridSize
  const height = rowSpan * GridUnit
  const heightCorrection = (rowSpan * (marginVLinks + 2)) / GridSize

  const area = `
    ${positionH}: calc(${marginH}vw + ${marginHLinks + 1}rem);
    ${positionV}: calc(${marginV}vh + ${marginVLinks + 1}rem);
    width: calc(${width}vw - ${widthCorrection}rem);
    height: calc(${height}vh - ${heightCorrection}rem);

    @media ${MediaMobile} {
      ${positionH}: calc(${marginH}vw + 1rem);
      ${positionV}: calc(${marginV}vh + ${isTop ? 1 : LinkMargin + 1}rem);
      width: calc(${width}vw - ${(columnSpan * 2) / GridSize}rem);
      height: calc(${height}vh - ${(rowSpan * (LinkMargin + 2)) / GridSize}rem);
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
  
  ${({ area, linksPosition }) => getGridArea(area, linksPosition)}

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
  } = content
  const { provider, slug } = gigsAPI || { provider: '', slug: '' }
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
          api={provider}
          border={border}
          circle={circle}
          slug={slug}
          square={square}
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
        <TextBox {...colors} includeWidth>
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
    >
      {Content}
    </ResponsiveContainer>
  )
}
