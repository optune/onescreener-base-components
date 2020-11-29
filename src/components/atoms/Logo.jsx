/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

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

const LogoSizeMax = {
  XS: 17,
  S: 34,
  M: 50,
  L: 67,
  XL: 100,
}

const LogoImage = styled.img`
  display: flex;
  object-fit: contain;
  margin: 1rem;
  max-width: unset;
  max-height: ${({ isTeaserLinks }) => (isTeaserLinks ? '11%' : 'unset')};

  @media screen and (orientation: portrait) {
    ${({ orientation, size }) =>
      orientation === 'LANDSCAPE'
        ? css`
            width: ${LogoSizePortrait[size]};
          `
        : css`
            width: ${LogoSizePortrait[size]};
          `}
  }

  @media screen and (orientation: landscape) {
    ${({ isPreviewMobile, orientation, size }) =>
      (isPreviewMobile &&
        css`
          width: ${LogoSizePortrait[size]};
        `) ||
      (orientation === 'LANDSCAPE' &&
        css`
          width: ${LogoSizeLandscape[size]};
        `) ||
      css`
        height: ${LogoSizeLandscape[size]};
      `}
  }
`

export const Logo = ({ logo, getImageUrl, isPreviewMobile, isTeaserLinks }) => (
  <LogoImage
    isPreviewMobile={isPreviewMobile}
    orientation={logo.image.orientation}
    src={getImageUrl({
      image: logo.image,
      maxWidth: LogoSizeMax[logo.size],
    })}
    size={logo.size}
    isTeaserLinks={isTeaserLinks}
  />
)
