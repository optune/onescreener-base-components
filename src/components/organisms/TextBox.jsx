/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { MediaSmall } from '../../style/media.js'
import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

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

  & h1,
  h2,
  h3,
  h4,
  h5,
  a,
  li,
  p,
  span {
    font-size: 1em;
    color: ${({ color }) => color};
    white-space: pre-wrap;
    transition: color 0.3s ease-out;
    line-height: 1.2;
    margin: 1em 0;
    padding: 0;
  }

  & a:hover {
    color: ${({ color, colorAccent }) => colorAccent || color};
  }

  & h1 {
    font-size: 1.8em;
    font-weight: bold;
  }

  & h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  & h3 {
    font-size: 1.2em;
  }

  & h4 {
    font-size: 1em;
  }

  & h5 {
    font-size: 0.8em;
  }
`

export const TextBox = ({ children, color, colorBackground, colorAccent }) => (
  <Text
    color={color}
    colorBackground={colorBackground}
    colorAccent={colorAccent}
  >
    <AutoTextFit>{children}</AutoTextFit>
  </Text>
)
