import React from 'react'
import RPlayer from 'react-player'

// Players
import { SpotifyPlayer } from '../../atoms/SpotifyPlayer'
import { ApplePlayer } from '../../atoms/ApplePlayer'
import { DeezerPlayer } from '../../atoms/DeezerPlayer'

// Utils
import { isApple } from '../../../utils/player/apple'
import { isDeezer } from '../../../utils/player/deezer'
import { isSpotify } from '../../../utils/player/spotify'

export const ReactPlayer = ({ url, ...other }) => {
  let InnerPlayer = RPlayer

  if (isSpotify(url)) {
    InnerPlayer = SpotifyPlayer
  } else if (isApple(url)) {
    InnerPlayer = ApplePlayer
  } else if (isDeezer(url)) {
    InnerPlayer = DeezerPlayer
  }

  return <InnerPlayer url={url} {...other} />
}
