/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

const Player = styled.div`
  max-width: ${({ isSquare, isSidePreview }) =>
    (isSquare && isSidePreview && '200px') || (isSquare && '700px') || '100%'};
  max-height: ${({ isSquare, isSidePreview }) =>
    (isSquare && isSidePreview && '200px') || (isSquare && '700px') || '100%'};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const isValidUrl = (url) => {
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
  isSidePreview,
}) => {
  let trueUrl, temp, type, id

  console.log({ format, isSidePreview })

  const typeAllow = ['artist', 'playlist', 'track', 'album', 'podcast']
  const typeExist = (type) => typeAllow.some((el) => el === type)

  if (!isValidUrl(url)) {
    return <> </>
  }

  if (url.indexOf('deezer.com/') !== -1) {
    try {
      temp = url.split('/')
      typeIndex = temp.findIndex((type) => typeExist(type))
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

      trueUrl = `https://www.deezer.com/plugins/player?format=${format.toLowerCase()}&playlist=true&autoplay=${autoplay}&color=${color}&width=100%&height=100%&layout=${theme.toLowerCase()}&type=${type}&id=${id}&app_id=1`
    } catch (err) {
      return <> </>
    }
  } else {
    return <> </>
  }

  return (
    <Player isSquare={format === 'SQUARE'} isSidePreview={isSidePreview}>
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
