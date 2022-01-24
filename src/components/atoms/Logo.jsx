/* eslint-disable react/prop-types */

import React, { memo } from 'react'
import styled, { css } from 'styled-components'

import { MediaSmall, MediaSmallMobile } from '../../style/media'

/*
 * Logo Image
 */

const LogoSizeImage = {
  XS: '10%',
  S: '14%',
  M: '18%',
  L: '21%',
  XL: '25%',
}

const LogoSizeImageTL = {
  XS: '9%',
  S: '11%',
  M: '13%',
  L: '15%',
  XL: '18%',
}

const LogoSizeImageMobileLandscapeTL = {
  XS: '4%',
  S: '5%',
  M: '6%',
  L: '8%',
  XL: '10%',
}

const LogoSizeImageSidePreviewTL = {
  XS: '5%',
  S: '6%',
  M: '8%',
  L: '10%',
  XL: '13%',
}

/*
 * Image Size
 */

const LogoSizeMax = {
  XS: 17,
  S: 34,
  M: 50,
  L: 67,
  XL: 100,
}

const LANDSCAPE = 'LANDSCAPE'

const LogoImage = styled.img`
  display: flex;
  object-fit: contain;
  margin: ${({ isSidePreview }) => (isSidePreview ? '0.5rem' : '1rem')};

  ${({ isPreviewMobile, isSidePreview, isTeaserLinks, size }) =>
    css`
      height: ${isTeaserLinks
        ? isSidePreview
          ? LogoSizeImageSidePreviewTL[size]
          : LogoSizeImageTL[size]
        : LogoSizeImage[size]};
      width: ${isTeaserLinks
        ? isSidePreview
          ? LogoSizeImageSidePreviewTL[size]
          : LogoSizeImageTL[size]
        : LogoSizeImage[size]};

      ${isPreviewMobile && `width: 100%;`}
    `}
  
  @media ${MediaSmall} {
    width: 100%;
  }

  ${({ isSidePreview, isTeaserLinks, orientation }) =>
    !isSidePreview &&
    isTeaserLinks &&
    orientation !== LANDSCAPE &&
    css`
      @media ${MediaSmallMobile} {
        height: 10%;
      }
    `}

  /* Fix for Teaser links mobile view and Landscape image  */

  ${({ orientation, size }) =>
    orientation === LANDSCAPE &&
    css`
      height: ${LogoSizeImageMobileLandscapeTL[size]};
    `}
`

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.isPreviewMobile === nextProps.isPreviewMobile &&
    prevProps.isTeaserLinks === nextProps.isTeaserLinks &&
    prevProps.logo.type === nextProps.logo.type &&
    prevProps.logo.isDifferentPositions === nextProps.logo.isDifferentPositions &&
    prevProps.logo.position === nextProps.logo.position &&
    prevProps.logo.positionDesktop === nextProps.logo.positionDesktop &&
    prevProps.logo.positionMobile === nextProps.logo.positionMobile &&
    prevProps.logo.size === nextProps.logo.size &&
    prevProps.logo.image?.height === nextProps.logo.image?.height &&
    prevProps.logo.image?.orientation === nextProps.logo.image?.orientation &&
    prevProps.logo.image?.public_id === nextProps.logo.image?.public_id &&
    prevProps.logo.image?.url === nextProps.logo.image?.url &&
    prevProps.logo.image?.width === nextProps.logo.image?.width &&
    prevProps.logo.text?.color === nextProps.logo.text?.color &&
    prevProps.logo.text?.font === nextProps.logo.text?.font &&
    prevProps.logo.text?.fontURL === nextProps.logo.text?.fontURL &&
    prevProps.logo.text?.shadowColor === nextProps.logo.text?.shadowColor &&
    prevProps.logo.text?.shadowSize === nextProps.logo.text?.shadowSize &&
    prevProps.logo.text?.title === nextProps.logo.text?.title
  )
}

export const Logo = memo(({ logo, getImageUrl, isPreviewMobile, isTeaserLinks, isSidePreview }) => {
  return (
    <LogoImage
      isPreviewMobile={isPreviewMobile}
      orientation={logo.image.orientation}
      src={getImageUrl({
        image: logo.image,
        maxWidth: LogoSizeMax[logo.size],
      })}
      size={logo.size}
      isTeaserLinks={isTeaserLinks}
      isSidePreview={isSidePreview}
    />
  )
}, areEqual)
