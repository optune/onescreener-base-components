/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

const Player = styled.div`
  width: 100%;
  height: 100%;
`

export const SpotifyPlayer = ({ url }) => {
  let trueUrl, temp

  if (url.indexOf('open.spotify.com') !== -1) {
    temp = url.split('/')
    temp[3] = temp[3].replace(temp[3], 'embed/' + temp[3])
    trueUrl = temp.join('/')
  } else if (url.indexOf('spotify:') !== -1) {
    temp = url.split(':')
    temp[1] = 'embed/' + temp[1] + '/'
    trueUrl = 'https://open.spotify.com/' + temp[1] + temp[2]
  } else {
    return <div>Not Found</div>
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
