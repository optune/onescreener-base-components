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

export const CoverBox = ({ cover }) =>
  (cover && cover.url > '' && !!cover.image?.url && (
    <Cover>
      <CoverLink href={cover.url || ''} target="__blank">
        <CoverImage
          src={cover.image.url || ''}
          alt="image"
          fullscreen={cover.fullscreen || false}
        />
      </CoverLink>
    </Cover>
  )) ||
  null
