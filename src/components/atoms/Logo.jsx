/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

const LogoSize = {
  XS: '8.333%',
  S: '16.666%',
  M: '33.333%',
  L: '50%',
  XL: '66.666%',
}

const LogoImage = styled.img`
  display: block;
  object-fit: contain;
  margin: 1rem;

  ${({ orientation, size }) =>
    orientation === 'LANDSCAPE' ? `height: ${size};` : `width: ${size};`}
`

export const Logo = ({ logo }) =>
  logo && logo.image ? (
    <LogoImage
      src={logo.image.url}
      size={LogoSize[logo.size]}
      orientation={logo.image.orientation}
    />
  ) : null
