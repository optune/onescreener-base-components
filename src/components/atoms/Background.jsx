/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

// Utils
import { getImageUrl } from '../../utils/getImageUrl.js'

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: ${({ focusPoint }) => focusPoint};
  background-size: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
  display: flex;
  z-index: 1;
`

export const Background = ({ background }) => (
  <BackgroundContainer
    image={getImageUrl(true)(background)}
    focusPoint={background.focusPoint}
    fullscreen={background.fullscreen}
  />
)
