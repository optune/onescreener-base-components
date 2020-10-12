/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RPlayer from 'react-player'

import { SpotifyPlayer } from '../atoms/SpotifyPlayer'
import { ApplePlayer } from '../atoms/ApplePlayer'
import { DeezerPlayer } from '../atoms/DeezerPlayer'

import { AutoPlayerFit } from '../../utils/AutoPlayerFit'

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ReactPlayer = styled(RPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: ${({ isDeezer }) => (isDeezer ? '700px' : 'unset')};
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MediaBox = ({ media, isPreviewMobile, isSidePreview }) => {
  const [ssrDone, setSsrDone] = useState(false)

  useEffect(() => {
    setSsrDone(true)
  }, [])

  let Player = ssrDone && media?.url && ReactPlayer
  let url = media?.url || ''

  let format, autoplay, theme
  if (media?.deezer) {
    format = media.deezer.format
    autoplay = media.deezer.autoplay
    theme = media.deezer.theme
  }

  if (media?.url.indexOf('spotify') !== -1) {
    Player = SpotifyPlayer
  } else if (media?.url.indexOf('apple') !== -1) {
    Player = ApplePlayer
  } else if (media?.url.indexOf('deezer') !== -1) {
    Player = DeezerPlayer
  }

  let PlayerWrapper =
    (!!media?.fullscreen && Fullscreen) ||
    (Player === ReactPlayer && AutoPlayerFit) ||
    (Player !== ReactPlayer &&
      media?.deezer?.format === 'SQUARE' &&
      !isPreviewMobile &&
      AutoPlayerFit) ||
    Wrapper

  return media?.fullscreen
    ? Player && (
        <Fullscreen>
          <Player
            url={url}
            playing={false}
            width="100%"
            height="100%"
            format={format}
            autoplay={autoplay}
            theme={theme}
            controls={true}
            isSidePreview={isSidePreview}
          />
        </Fullscreen>
      )
    : Player && (
        <PlayerWrapper isPreviewMobile={isPreviewMobile}>
          <Player
            url={url}
            playing={false}
            width="100%"
            height="100%"
            format={format}
            autoplay={autoplay}
            theme={theme}
            controls={true}
            isSidePreview={isSidePreview}
          />
        </PlayerWrapper>
      )
}
