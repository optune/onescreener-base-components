/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

// Utils
import { getAppleUrl, isApple } from '../../utils/player/apple'

const Player = styled.div`
  width: 100%;
  height: 100%;
`

// No implementation of Artist, Song links as Apple is very restrictive and doesn't allow it
// Also, without sign in it won't allow to listen to full audio (30 seconds max)
export const ApplePlayer = ({ url = '' }) => {
  let trueUrl

  if (isApple(url)) {
    trueUrl = getAppleUrl(url)
  } else {
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
        allow="autoplay *; encrypted-media *;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      ></iframe>
    </Player>
  )
}
