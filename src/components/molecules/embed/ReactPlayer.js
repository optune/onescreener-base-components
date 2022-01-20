import React from 'react'
import RPlayer from 'react-player'
import styled from 'styled-components'

// Players
import { SpotifyPlayer } from '../../atoms/SpotifyPlayer'
import { ApplePlayer } from '../../atoms/ApplePlayer'
import { DeezerPlayer } from '../../atoms/DeezerPlayer'

// Utils
import { isApple } from '../../../utils/teaserLinks/players/apple'
import { isDeezer } from '../../../utils/teaserLinks/players/deezer'
import { isSpotify } from '../../../utils/teaserLinks/players/spotify'

const StyledPlayer = styled(RPlayer)`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ReactPlayer = ({ url, ...other }) => {
  let InnerPlayer = StyledPlayer

  if (isSpotify(url)) {
    InnerPlayer = SpotifyPlayer
  } else if (isApple(url)) {
    InnerPlayer = ApplePlayer
  } else if (isDeezer(url)) {
    InnerPlayer = DeezerPlayer
  }

  return <InnerPlayer url={url} {...other} />
}
