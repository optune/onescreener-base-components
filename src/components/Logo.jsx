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
  margin: 4rem;
`

const LogoSize = {
  0: 'xs',
  1: 's',
  2: 'm',
  3: 'l',
  4: 'xl',
}

export const Logo = ({ logo }) =>
  logo && logo.image ? (
    <LogoImage src={logo.image.url} size={getSize(LogoSize[logo.size])} />
  ) : null
