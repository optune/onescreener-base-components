/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

const Player = styled.div`
  width: 100%;
  height: 100%;
`

// No implementation of Artist, Song links as Apple is very restrictive and doesn't allow it
// Also, without sign in it won't allow to listen to full audio (30 seconds max)
export const ApplePlayer = ({ url }) => {
  let trueUrl, temp

  if (url.indexOf('music.apple.com') !== -1) {
    temp = url.split('/')
    temp[2] = temp[2].replace(temp[2], 'embed.' + temp[2])
    if (temp.indexOf('?app=music') === -1) {
      temp.push('?app=music')
    }
    trueUrl = temp.join('/')
  } else {
    return <></>
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
