/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { MediaSmall } from '../../style/media.js'

const Text = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  overflow: hidden;
  background-color: ${({ colorBackground }) =>
    colorBackground || 'transparent'};
  color: ${({ color }) => color};
  transition: color 0.3s ease-out;

  & a,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  span {
    color: ${({ color }) => color};
    white-space: pre-wrap;
    transition: color 0.3s ease-out;
  }

  & a:hover {
    color: ${({ color, colorAccent }) => colorAccent || color};
  }
`

export const TextBox = ({ children, color, colorBackground, colorAccent }) => (
  <Text
    color={color}
    colorBackground={colorBackground}
    colorAccent={colorAccent}
  >
    {children} 
  </Text>
)
