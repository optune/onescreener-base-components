/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { getBackground } from '../../utils/getBackground'

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ image, designColor }) => getBackground({ url: image, color: designColor })};
  background-repeat: no-repeat;
  background-position: ${({ focusPoint }) => focusPoint};
  background-size: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
  display: flex;
  z-index: 1;
`

const areEqual = (prevProps, nextProps) => {
  // HACKS: to rerender the component when the image is deleted
  if (!prevProps.background.image?.url || !nextProps.background.image?.url) return false

  return (
    prevProps.background.focusPoint === nextProps.background.focusPoint &&
    prevProps.background.fullscreen === nextProps.background.fullscreen &&
    prevProps.background.image?.url === nextProps.background.image?.url &&
    prevProps.background.selectedBackgroundUrl === nextProps.background.selectedBackgroundUrl &&
    prevProps.background.isBackgroundSelected === nextProps.background.isBackgroundSelected &&
    prevProps.color === nextProps.color &&
    prevProps.designColor === nextProps.designColor
  )
}

export const Background = React.memo(({ background, getImageUrl, color, designColor }) => {
  const imageUrl = getImageUrl(background)

  return !!imageUrl ? (
    <BackgroundContainer
      className="bg-container"
      image={imageUrl}
      color={color}
      designColor={designColor}
      focusPoint={background.focusPoint}
      fullscreen={background.fullscreen}
    />
  ) : null
}, areEqual)
