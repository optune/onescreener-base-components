/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

// Utils
import { getDeezerUrl, isDeezer, isValidDeezerUrl } from '../../utils/player/deezer'

const Player = styled.div`
  max-width: ${({ isSquare, isSidePreview }) =>
    (isSquare && isSidePreview && '200px') || (isSquare && '700px') || '100%'};
  max-height: ${({ isSquare, isSidePreview }) =>
    (isSquare && isSidePreview && '200px') || (isSquare && '700px') || '100%'};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ fullwidth }) =>
    fullwidth &&
    css`
      width: 100%;
    `}
`

export const DeezerPlayer = ({
  url = '',
  format = 'CLASSIC',
  autoplay = false,
  theme = 'DARK',
  color = 'ff0000',
  fullwidth,
  isSidePreview,
}) => {
  let trueUrl

  if (!isValidDeezerUrl(url)) {
    return null
  }

  if (isDeezer(url)) {
    trueUrl = getDeezerUrl(url, format, autoplay, theme, color)
  } else {
    return null
  }

  return (
    <Player fullwidth={fullwidth} isSquare={format === 'SQUARE'} isSidePreview={isSidePreview}>
      <iframe
        src={trueUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowtransparency="true"
        scrolling="no"
      />
    </Player>
  )
}
