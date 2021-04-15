import React from 'react'
import styled from 'styled-components'

import { MediaSmall } from '../../style/media'

const Container = styled.div`
  position: absolute;
  top: ${({ top, topMobile, isPreviewMobile }) => (isPreviewMobile ? topMobile : top)};
  right: ${({ right, rightMobile, isPreviewMobile }) => (isPreviewMobile ? rightMobile : right)};
  bottom: ${({ bottom, bottomMobile, isPreviewMobile }) =>
    isPreviewMobile ? bottomMobile : bottom};
  left: ${({ left, leftMobile, isPreviewMobile }) => (isPreviewMobile ? leftMobile : left)};

  z-index: 9999;
  cursor: pointer;

  @media ${MediaSmall} {
    top: ${({ topMobile }) => topMobile};
    right: ${({ rightMobile }) => rightMobile};
    bottom: ${({ bottomMobile }) => bottomMobile};
    left: ${({ leftMobile }) => leftMobile};
  }
`

const TOP = 'top'
const LEFT = 'left'
const BOTTOM = 'bottom'
const RIGHT = 'right'
const CENTER = 'center'

const getAxis = (position) => (position > '' ? position.split('-') : ['', ''])

const getPositionDesktop = (position, isLinks, linksPosition) => {
  let top = 0,
    left = 0,
    right = 0,
    bottom = 0

  const [y, x] = getAxis(position)
  const [yLinks, xLinks] = getAxis(linksPosition)

  if (y === TOP) {
    top = 0
    bottom = 66.666
  }
  if (y === CENTER) {
    top = 33.333
    bottom = 33.333

    if (isLinks) {
      top = 0
      bottom = 0
    }
  }
  if (y === BOTTOM) {
    top = 66.666
    bottom = 0

    if (!isLinks && yLinks === BOTTOM) {
      top = 51.666
      bottom = 13
    }

    if (isLinks) {
      top = 87
    }
  }

  if (x === RIGHT) {
    left = 66.666
    right = 0

    if (!isLinks && xLinks === RIGHT) {
      right = 9
      left = 62.666
    }

    if (isLinks) {
      left = 91
    }
  }
  if (x === LEFT) {
    left = 0
    right = 66.666

    if (!isLinks && xLinks === LEFT) {
      left = 9
      right = 62.666
    }

    if (isLinks) {
      right = 91
    }
  }
  if (x === CENTER) {
    left = 33.333
    right = 33.333

    if (isLinks) {
      right = 0
      left = 0
    }
  }

  return { top: `${top}%`, left: `${left}%`, right: `${right}%`, bottom: `${bottom}%` }
}

const getPositionMobile = (position, isLinks, linksPosition) => {
  let top = 0,
    left = 0,
    right = 0,
    bottom = 0

  const [y, x] = getAxis(position)
  const [yLinks, xLinks] = getAxis(linksPosition)

  if (y === TOP) {
    top = 0
    bottom = 70.666
  }
  if (y === CENTER) {
    top = 29.333
    bottom = 29.333
  }
  if (y === BOTTOM) {
    top = 66.666
    bottom = 0

    if (yLinks > '') {
      top = 54.666
      bottom = 12
    }
    if (isLinks) {
      top = 88
    }
  }

  return {
    topMobile: `${top}%`,
    leftMobile: `${left}%`,
    rightMobile: `${right}%`,
    bottomMobile: `${bottom}%`,
  }
}

export const SectionOverlay = ({
  positionDesktop = 'top-center',
  positionMobile = 'top-center',
  isPreviewMobile,
  isLinks,
  linksPosition,
  onClick,
}) => {
  const mappedLinksPosition = linksPosition?.toLowerCase().replace('_', '-') || ''

  const { top, left, right, bottom } = getPositionDesktop(
    positionDesktop,
    isLinks,
    mappedLinksPosition
  )
  const { topMobile, leftMobile, rightMobile, bottomMobile } = getPositionMobile(
    positionMobile,
    isLinks,
    mappedLinksPosition
  )

  return (
    <Container
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      topMobile={topMobile}
      leftMobile={leftMobile}
      rightMobile={rightMobile}
      bottomMobile={bottomMobile}
      isPreviewMobile={isPreviewMobile}
      onClick={onClick}
    />
  )
}
