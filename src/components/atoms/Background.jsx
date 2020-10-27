/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: ${({ image }) => image > '' ? `url(${image})` : 'none'};
  background-repeat: no-repeat;
  background-position: ${({ focusPoint }) => focusPoint};
  background-size: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
  display: flex;
  z-index: 1;
`

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.background.focusPoint === nextProps.background.focusPoint &&
    prevProps.background.fullscreen === nextProps.background.fullscreen &&
    prevProps.background.image?.url === nextProps.background.image?.url
  )
}

export const Background = React.memo(
  ({ background, getImageUrl }) => (
    <BackgroundContainer
      image={getImageUrl(background)}
      focusPoint={background.focusPoint}
      fullscreen={background.fullscreen}
    />
  ),
  areEqual
)
