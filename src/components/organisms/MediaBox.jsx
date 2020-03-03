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
  const Player = media.url.indexOf('spotify') !== -1 ? SpotifyPlayer : ReactPlayer

  return media.fullscreen ? (
    <Fullscreen>
      <Player url={media.url} playing={false} width="100%" height="100%" />
    </Fullscreen>
  ) : (
    <Player url={media.url} playing={false} width="100%" height="100%" />
  )
}
