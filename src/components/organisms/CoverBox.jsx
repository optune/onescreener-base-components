/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Cover = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const CoverLink = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
`

const CoverImage = styled.img`
  width: ${({ fullscreen }) => (fullscreen ? '100%' : 'auto')};
  height: 100%;
  object-fit: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
`

export const CoverBox = ({ cover }) => {
  const { url, fullscreen, image } = cover
  return (
    (!!image.url && (
      <Cover>
        <CoverLink href={url || ''} target="__blank">
          <CoverImage src={image?.url || ''} alt="image" fullscreen={fullscreen || false} />
        </CoverLink>
      </Cover>
    )) ||
    null
  )
}
