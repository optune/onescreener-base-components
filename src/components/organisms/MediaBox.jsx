/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player'

import { MediaSmall } from '../../style/media.js'

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
const Container = styled.div`
  position: relative;
  margin: auto;
  width: 80vw;
  max-width: 1200px;
`

const AspectRationContainer = styled.h1`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`

const Player = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const MediaBox = ({ media }) =>
  media.fullscreen ? (
    <Fullscreen>
      <ReactPlayer url={media.url} playing={false} width="100%" height="100%" />
    </Fullscreen>
  ) : (
    <Container>
      <AspectRationContainer>
        <Player
          as={ReactPlayer}
          url={media.url}
          playing={false}
          width="none"
          height="none"
        />
      </AspectRationContainer>
    </Container>
  )
