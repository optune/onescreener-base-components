/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import ReactPlayer from 'react-player'

const MediaContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`

const MediaPlayer = styled.div`
  ${({ fullscreen }) =>
    fullscreen
      ? css`
          position: relative;
          height: 100%;
          width: 100%;
        `
      : css`
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 25% 25%;

          @media (max-width: 736px) {
            padding: 25% 0.5rem;
          }
        `}
`

export const MediaBox = ({ media }) => (
  <MediaContainer>
    <MediaPlayer fullscreen={media.fullscreen}>
      <ReactPlayer url={media.url} playing={false} width="100%" height="100%" />
    </MediaPlayer>
  </MediaContainer>
)
