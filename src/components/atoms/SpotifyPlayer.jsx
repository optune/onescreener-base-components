/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

// Utils
import { getSpotifyUrl } from '../../utils/teaserLinks/players/spotify'

const Player = styled.div`
  width: 100%;
  height: 100%;
`

export const SpotifyPlayer = ({ url = '' }) => {
  let trueUrl = getSpotifyUrl(url)

  if (!trueUrl) {
    return null
  }

  return (
    <Player>
      <iframe
        src={trueUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </Player>
  )
}
