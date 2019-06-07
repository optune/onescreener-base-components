/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { MediaSmall } from '../../style/media.js'

const Text = styled.div`
  margin: auto;
  max-height: 60vh;
  width: 60vw;
  max-width: 1200px;
  overflow: hidden;

  & li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  span {
    color: ${({ color }) => color};
    white-space: pre-wrap;
  }

  @media ${MediaSmall} {
    width: 80vw;
  }
`

export const TextBox = ({ children, color }) => (
  <Text color={color}>{children}</Text>
)
