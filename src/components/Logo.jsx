/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

const LogoImage = styled.img`
  display: block;
  object-fit: contain;
  width: ${({ width }) => `var(--logo-size-${width})`};
`

export const Logo = ({ logo }) =>
  logo && logo.image ? (
    <LogoImage src={logo.image.url} width={logo.size} />
  ) : null
