/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

const Player = styled.div`
  max-width: ${({ isSquare }) => (isSquare ? '602px' : '100%')};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`

const isValidUrl = url => {
  let tempArr = url.split('/')
  let emptySlash = []

  tempArr.forEach((el, index) => el === '' && emptySlash.push(index))

  if (emptySlash.length === 2) {
    if (emptySlash[emptySlash.length - 1] !== tempArr.length - 1) {
      return false
    }
  }
  if (emptySlash.length > 2) {
    return false
  }
  return true
}

export const DeezerPlayer = ({
  url,
  format = 'CLASSIC',
  autoplay = false,
  theme = 'DARK',
  color = 'ff0000',
}) => {
  let trueUrl, temp, type, id

  const typeAllow = ['artist', 'playlist', 'track', 'album', 'podcast']
  const typeExist = type => typeAllow.some(el => el === type)

  // from ==>
  // https://www.deezer.com/track/854470322?utm_source=deezer&utm_content=track-854470322&utm_term=3526920284_1584286559&utm_medium=web
  // to ==>
  // https://www.deezer.com/plugins/player?playlist=true&color=${color}&layout=${theme}&type=${type}&id=${url}&app_id=1

  // https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&color=ff0000&layout=dark&type=track&id=85447032&app_id=1

  /* 

  artist,
  playlist,
  track,
  album,
  podcast

  */

  // track and playlist
  // v1
  // https://www.deezer.com/track/692002952?utm_source=deezer&utm_content=track-692002952&utm_term=3526920284_1584311474&utm_medium=web

  // length: 5

  // v2.2
  // https://www.deezer.com/playlist/7371286864

  // length: 5

  // v2
  // https://www.deezer.com/ru/playlist/7371286864

  // length: 6

  // vE https://www.deezer.com/plugins/player?format=classic&playlist=true&autoplay=false&color=ff0000&layout=dark&type=playlist&id=7371286864&app_id=1

  // artist
  // v1 https://www.deezer.com/artist/15888?utm_source=deezer&utm_content=artist-15888&utm_term=3526920284_1584368056&utm_medium=web

  // v2 https://www.deezer.com/ru/artist/15888

  // works
  // https://www.deezer.com/plugins/player?format=classic&playlist=true&autoplay=false&color=ff0000&layout=dark&type=playlist&id=7371286864&app_id=1

  // e2
  // https://www.deezer.com/plugins/player?format=classic&playlist=true&autoplay=false&color=ff0000&layout=dark&type=playlist&id=7371286864&app_id=1

  // https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=radio&id=artist-27&app_id=1

  if (!isValidUrl(url)) {
    return <> </>
  }

  if (url.indexOf('deezer.com/') !== -1) {
    try {
      temp = url.split('/')
      typeIndex = temp.findIndex(type => typeExist(type))
      type = temp[typeIndex]

      if (!type) {
        return <> </>
      }

      if (url.indexOf('?utm_') !== -1) {
        id = temp[typeIndex + 1].slice(0, temp[typeIndex + 1].indexOf('?'))
      } else {
        id = temp[typeIndex + 1]
      }

      if (type === 'track') {
        type = 'tracks'
      }

      if (type === 'artist') {
        type = 'radio'
        id = 'artist-' + id
      }

      trueUrl = `https://www.deezer.com/plugins/player?format=${format.toLowerCase()}&playlist=true&autoplay=${autoplay}&color=${color}&layout=${theme.toLowerCase()}&type=${type}&id=${id}&app_id=1`
    } catch (err) {
      return <> </>
    }
  } else {
    return <> </>
  }

  return (
    <Player isSquare={format === 'SQUARE'}>
      <iframe
        src={trueUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowtransparency="true"
        scrolling="no"
      />
    </Player>
  )
}
