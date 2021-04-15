import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  background-color: rgba(244, 244, 244, 0.5);
  z-index: 9999;
  cursor: pointer;
`

const getAxis = (position) => position.split('-')

const getPositionDesktop = (position) => {
  console.log({ position })
  let top = 0,
    left = 0,
    right = 0,
    bottom = 0

  const [y, x] = getAxis(position)

  console.log({ y, x })

  if (y === 'top') {
    top = 0
    bottom = 66.666
  }
  if (y === 'center') {
    top = 33.333
    bottom = 33.333
  }
  if (y === 'bottom') {
    top = 66.666
    bottom = 0
  }

  if (x === 'right') {
    left = 66.666
    right = 0
  }
  if (x === 'left') {
    left = 0
    right = 66.666
  }
  if (x === 'center') {
    left = 33.333
    right = 33.333
  }

  console.log({ top, left, right, bottom })

  return { top: `${top}%`, left: `${left}%`, right: `${right}%`, bottom: `${bottom}%` }
}

const getPositionMobile = (position) => {
  console.log({ position })
  let top = 0,
    left = 0,
    right = 0,
    bottom = 0

  const [y, x] = getAxis(position)

  console.log({ yM: y, xM: x })

  if (y === 'top') {
    top = 0
    bottom = 66.666
  }
  if (y === 'center') {
    top = 33.333
    bottom = 33.333
  }
  if (y === 'bottom') {
    top = 66.666
    bottom = 0
  }

  if (x === 'right') {
    left = 66.666
    right = 0
  }
  if (x === 'left') {
    left = 0
    right = 66.666
  }
  if (x === 'center') {
    left = 33.333
    right = 33.333
  }

  console.log({ top, left, right, bottom })

  return { top: `${top}%`, left: `${left}%`, right: `${right}%`, bottom: `${bottom}%` }
}

export const SectionOverlay = ({
  positionDesktop = 'top-center',
  positionMobile = 'top-center',
  onClick,
}) => {
  const { top, left, right, bottom } = getPositionDesktop(positionDesktop)
  const { topMobile, leftMobile, rightMobile, bottomMobile } = getPositionMobile(positionMobile)

  return (
    <Container
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      onClick={onClick}
      data-ar="asdasd"
    />
  )
}
