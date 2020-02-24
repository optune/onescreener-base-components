/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import { SpotifyPlayer } from '../atoms/SpotifyPlayer'

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

export const MediaBox = ({ media }) => {
  return !!media?.url > '' ? (
    media.url.indexOf('spotify') !== -1 ? (
      media.fullscreen ? (
        <Fullscreen>
          <SpotifyPlayer url={media.url} />
        </Fullscreen>
      ) : (
        <SpotifyPlayer url={media.url} />
      )
    ) : media.fullscreen ? (
      <Fullscreen>
        <ReactPlayer url={media.url} playing={false} width="100%" height="100%" />
      </Fullscreen>
    ) : (
      <ReactPlayer url={media.url} playing={false} width="100%" height="100%" />
    )
  ) : null
}
