/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

const LogoSize = {
  XS: '8.333%',
  S: '16.666%',
  M: '33.333%',
  L: '50%',
  XL: '66.666%',
}

const LogoTextContainer = styled.div`
  position: relative;
  width: ${({ size }) => LogoSize[size]};
  height: ${({ size }) => LogoSize[size]};
  margin: 1rem;

  & p {
    color: ${({ color }) => color};
    display: inline-block;
    font-size: 1em;
    text-align: center;
    line-height: 1.4;
    white-space: nowrap;
  }
`

export const LogoText = ({ logo, isPreviewMobile }) =>
  logo.text?.title ? (
    <LogoTextContainer size={logo.size} color={logo.text.color}>
      <AutoTextFit
        adjustWidth
        includeWidth
        padding="0"
        maxFontSize={300}
        isMobileView={isPreviewMobile}
      >
        <p className="apply-font">{logo.text.title}</p>
      </AutoTextFit>
    </LogoTextContainer>
  ) : null
