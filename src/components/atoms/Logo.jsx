/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

// Atoms

import { MediaSmall, MediaSmallMobile } from '../../style/media'

const LOGO_SIZE_DESKTOP = 100
const LOGO_SIZE_MOBILE = 64

/*
 * Logo Image - Deprecated
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
 * Image Size - Deprecated
 */

const LogoSizeMax = {
  XS: 17,
  S: 34,
  M: 50,
  L: 67,
  XL: 100,
}

const LANDSCAPE = 'LANDSCAPE'

// ${({ isPreviewMobile, isSidePreview, isTeaserLinks, size }) =>
//     css`
//       height: ${isTeaserLinks
//         ? isSidePreview
//           ? LogoSizeImageSidePreviewTL[size]
//           : LogoSizeImageTL[size]
//         : LogoSizeImage[size]};
//       width: ${isTeaserLinks
//         ? isSidePreview
//           ? LogoSizeImageSidePreviewTL[size]
//           : LogoSizeImageTL[size]
//         : LogoSizeImage[size]};

//       ${isPreviewMobile && `width: 100%;`}
//     `}

// ${({ isSidePreview, isTeaserLinks, orientation }) =>
// !isSidePreview &&
// isTeaserLinks &&
// orientation !== LANDSCAPE &&
// css`
//   @media ${MediaSmallMobile} {
//     height: 10%;
//   }
// `}

// /* Fix for Teaser links mobile view and Landscape image  */

// ${({ orientation, size }) =>
// orientation === LANDSCAPE &&
// css`
//   height: ${LogoSizeImageMobileLandscapeTL[size]};
// `}

const ImageContainer = styled.div`
  position: relative;
  display: flex;

  max-height: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview
      ? isPreviewMobile
        ? LOGO_SIZE_MOBILE / 1.5
        : LOGO_SIZE_DESKTOP / 2
      : LOGO_SIZE_DESKTOP}px;
  max-width: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview
      ? isPreviewMobile
        ? LOGO_SIZE_MOBILE / 1.5
        : LOGO_SIZE_DESKTOP / 2
      : LOGO_SIZE_DESKTOP}px;
  min-height: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview
      ? isPreviewMobile
        ? LOGO_SIZE_MOBILE / 1.5
        : LOGO_SIZE_DESKTOP / 2
      : LOGO_SIZE_DESKTOP}px;
  min-width: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview
      ? isPreviewMobile
        ? LOGO_SIZE_MOBILE / 1.5
        : LOGO_SIZE_DESKTOP / 2
      : LOGO_SIZE_DESKTOP}px;

  @media ${MediaSmall} {
    max-height: ${({ isSidePreview }) =>
      isSidePreview ? LOGO_SIZE_MOBILE / 1.5 : LOGO_SIZE_MOBILE}px;
    max-width: ${({ isSidePreview }) =>
      isSidePreview ? LOGO_SIZE_MOBILE / 1.5 : LOGO_SIZE_MOBILE}px;
    min-height: ${({ isSidePreview }) =>
      isSidePreview ? LOGO_SIZE_MOBILE / 1.5 : LOGO_SIZE_MOBILE}px;
    min-width: ${({ isSidePreview }) =>
      isSidePreview ? LOGO_SIZE_MOBILE / 1.5 : LOGO_SIZE_MOBILE}px;
  }
`

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

// const areEqual = (prevProps, nextProps) => {
//   const isEqual =
//     prevProps.isPreviewMobile === nextProps.isPreviewMobile &&
//     prevProps.isTeaserLinks === nextProps.isTeaserLinks &&
//     prevProps.logo.type === nextProps.logo.type &&
//     prevProps.logo.isDifferentPositions === nextProps.logo.isDifferentPositions &&
//     prevProps.logo.position === nextProps.logo.position &&
//     prevProps.logo.positionDesktop === nextProps.logo.positionDesktop &&
//     prevProps.logo.positionMobile === nextProps.logo.positionMobile &&
//     prevProps.logo.size === nextProps.logo.size &&
//     prevProps.logo.image?.height === nextProps.logo.image?.height &&
//     prevProps.logo.image?.orientation === nextProps.logo.image?.orientation &&
//     prevProps.logo.image?.public_id === nextProps.logo.image?.public_id &&
//     prevProps.logo.image?.url === nextProps.logo.image?.url &&
//     prevProps.logo.image?.width === nextProps.logo.image?.width &&
//     prevProps.logo.text?.color === nextProps.logo.text?.color &&
//     prevProps.logo.text?.font === nextProps.logo.text?.font &&
//     prevProps.logo.text?.fontURL === nextProps.logo.text?.fontURL &&
//     prevProps.logo.text?.shadowColor === nextProps.logo.text?.shadowColor &&
//     prevProps.logo.text?.shadowSize === nextProps.logo.text?.shadowSize &&
//     prevProps.logo.text?.title === nextProps.logo.text?.title
//   console.log({ LOGO_EUQAL: isEqual })
//   console.log({ LOGO_SIZE_BEFORE: prevProps.logo.size })
//   console.log({ LOGO_SIZE_NOW: nextProps.logo.size })
//   return isEqual
// }

export const Logo =
  // memo(
  ({
    artistProfilePicture,
    logo,
    getImageUrl,
    isEditMode,
    isPreviewMobile,
    isTeaserLinks,
    isSidePreview,
    userProfilePicture,
  }) => {
    const imageUrl = !!logo.image?.url
      ? getImageUrl({ image: logo.image })
      : !!artistProfilePicture
      ? getImageUrl({ image: artistProfilePicture })
      : userProfilePicture?.url

    return (
      <ImageContainer
        isPreviewMobile={isPreviewMobile}
        orientation={logo?.image?.orientation}
        size={logo.size}
        isTeaserLinks={isTeaserLinks}
        isSidePreview={isSidePreview}
      >
        {/* {(true || isEditMode) && <EditButton top="0">Logo image</EditButton>} */}

        <LogoImage src={imageUrl} />
      </ImageContainer>
    )
  }
// ,
// areEqual
// )
