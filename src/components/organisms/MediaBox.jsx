/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from 'react'
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
const getControls = ({ url, format, autoPlay, theme, isDeezer, isSidePreview }) => {
  const props = {
    playing: false,
    width: '100%',
    height: '100%',
    controls: true,
  }

  if (!!url) props.url = url
  if (!!format) props.format = format
  if (!!autoPlay) props.autoPlay = String(autoPlay) === 'true'
  if (!!theme) props.theme = theme
  if (!!isSidePreview && isDeezer) props.isSidePreview = isSidePreview

  return props
}

export const MediaBox = ({ media, isPreviewMobile, isSidePreview }) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])

  let Player = ssrDone && media?.url && ReactPlayer
  let url = media?.url || ''
  let isDeezer = false

  let format, autoplay, theme
  if (media?.deezer) {
    format = media.deezer.format
    autoplay = media.deezer.autoplay
    theme = media.deezer.theme
  }

  if (media?.url?.indexOf('spotify') !== -1) {
    Player = SpotifyPlayer
  } else if (media?.url?.indexOf('apple') !== -1) {
    Player = ApplePlayer
  } else if (media?.url?.indexOf('deezer') !== -1) {
    Player = DeezerPlayer
    isDeezer = true
  }

  let PlayerWrapper =
    (!!media?.fullscreen && Fullscreen) ||
    (Player === ReactPlayer && AutoPlayerFit) ||
    (Player !== ReactPlayer &&
      media?.deezer?.format === 'SQUARE' &&
      !isPreviewMobile &&
      AutoPlayerFit) ||
    Wrapper

  const playerProps = useMemo(
    () => getControls({ url, format, autoPlay: autoplay, theme, isDeezer, isSidePreview }),
    [url, format, autoplay, theme, isSidePreview]
  )

  return media?.fullscreen
    ? Player && (
        <Fullscreen>
          <Player {...playerProps} />
        </Fullscreen>
      )
    : Player && (
        <PlayerWrapper isPreviewMobile={isPreviewMobile}>
          <Player {...playerProps} />
        </PlayerWrapper>
      )
}
