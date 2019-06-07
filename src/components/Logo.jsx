/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

import { getSize } from '../style/getSize.js'

const LogoImage = styled.img`
  display: block;
  object-fit: contain;
  max-height: 45vh;
  max-width: 800px;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 1rem;
`

export const Logo = ({ logo }) =>
  logo && logo.image ? (
    <LogoImage src={logo.image.url} size={getSize(logo.size)} />
  ) : null
