/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { toSquidInkIcon } from '../mixins/toSquidInkIcon.jsx'

import { MediaMobile } from '../../../style/media'

const Size = {
  Desktop: {
    S: 14,
    M: 16,
    L: 18,
  },
  Mobile: {
    S: 10,
    M: 10,
    L: 12,
  },
}
const Margin = {
  Desktop: {
    S: 3,
    M: 3,
    L: 4,
  },
  Mobile: {
    S: 2,
    M: 1,
    L: 1,
  },
}

const Text = styled.p`
  font-size: ${({ size, isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? Size.Mobile[size] : Size.Desktop[size]}px;
  margin-top: ${({ size, isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? Margin.Mobile[size] : Margin.Desktop[size]}px;
  line-height: 0.8;
  text-align: center;

  @media ${MediaMobile} {
    font-size: ${({ size }) => Size.Mobile[size]}px;
    margin-top: ${({ size }) => Margin.Mobile[size]}px;
  }
`

export const RequestFormIcon = ({ size, isSidePreview, isPreviewMobile }) => (
  <Text size={size} isSidePreview={isSidePreview} isPreviewMobile={isPreviewMobile}>
    book
    <br />
    now
  </Text>
)
