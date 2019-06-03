/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { MediaSmall } from '../../style/media.js'

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`

const Text = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 30% 25% 20%;

  & li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  span {
    color: ${({ color }) => color};
  }

  @media ${MediaSmall} {
    padding: 35% 1rem;
  }
`

export const TextBox = ({ children, color }) => (
  <TextContainer>
    <Text color={color}>{children}</Text>
  </TextContainer>
)
