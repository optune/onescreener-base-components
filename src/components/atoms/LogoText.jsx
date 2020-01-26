/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

// import { Textfit } from 'react-textfit'

const LogoSizeLandscape = {
  XS: '8.333%',
  S: '16.666%',
  M: '33.333%',
  L: '50%',
  XL: '66.666%',
}

const LogoSizePortrait = {
  XS: '16.666%',
  S: '33.333%',
  M: '50%',
  L: '66.666%',
  XL: 'calc(100% - 2rem)',
}

const StyledText = styled.div`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 32px;
`

export const LogoText = ({ text }) =>
  text && text.title ? (
    <StyledText color={text.color} className="apply-font">
      {text.title}
    </StyledText>
  ) : null
