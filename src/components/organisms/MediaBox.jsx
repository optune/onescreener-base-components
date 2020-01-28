/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

export const MediaBox = ({ media }) =>
  !!media?.url > ''
    ? (media.fullscreen && (
        <Fullscreen>
          <ReactPlayer url={media.url} playing={false} width="100%" height="100%" />
        </Fullscreen>
      )) || <ReactPlayer url={media.url} playing={false} width="100%" height="100%" />
    : null
