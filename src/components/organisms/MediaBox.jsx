/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import { SpotifyPlayer } from '../atoms/SpotifyPlayer'
import { ApplePlayer } from '../atoms/ApplePlayer'
import { DeezerPlayer } from '../atoms/DeezerPlayer'

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const MediaBox = ({ media }) => {
  let Player = media?.url && ReactPlayer
  const { format, autoplay, theme } = media.deezer

  if (media?.url.indexOf('spotify') !== -1) {
    Player = SpotifyPlayer
  } else if (media?.url.indexOf('apple') !== -1) {
    Player = ApplePlayer
  } else if (media?.url.indexOf('deezer') !== -1) {
    Player = DeezerPlayer
  }

  return media.fullscreen ? (
    <Fullscreen>
      <Player
        url={media.url}
        playing={false}
        width="100%"
        height="100%"
        format={format}
        autoplay={autoplay}
        theme={theme}
      />
    </Fullscreen>
  ) : (
    <Player
      url={media.url}
      playing={false}
      width="100%"
      height="100%"
      format={format}
      autoplay={autoplay}
      theme={theme}
    />
  )
}
