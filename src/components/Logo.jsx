/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

import { width } from '../style/width.js'

const LogoImage = styled.img`
  display: block;
  object-fit: contain;
  max-height: 45vh;
  max-width: 800px;
  width: ${({ width }) => width};
`

export const Logo = ({ logo }) =>
  logo && logo.image ? (
    <LogoImage src={logo.image.url} width={width(logo.size)} />
  ) : null
