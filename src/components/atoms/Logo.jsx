/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'
import chroma from 'chroma-js'
import { BackgroundColor } from '../../style/color'

// Atoms

import { MediaSmall, MediaSmallMobile, MediaTinyMobile } from '../../style/media'
import { LogoSubscribe } from './LogoSubscribe'

const LOGO_SIZE_DESKTOP = 80
const LOGO_SIZE_SMALL = 70
const LOGO_SIZE_MOBILE = 60
const LOGO_SIZE_MOBILE_TINY = 55

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

const getLogoImageSize = ({ isSidePreview, logoSize, logoSizeSidePreview }) =>
  css`
    max-height: ${isSidePreview ? (logoSizeSidePreview || logoSize) / 1.5 : logoSize}px;
    max-width: ${isSidePreview ? (logoSizeSidePreview || logoSize) / 1.5 : logoSize}px;
    min-height: ${isSidePreview ? (logoSizeSidePreview || logoSize) / 1.5 : logoSize}px;
    min-width: ${isSidePreview ? (logoSizeSidePreview || logoSize) / 1.5 : logoSize}px;
  `

const ImageContainer = styled.div`
  position: relative;
  display: flex;

  ${({ isSidePreview, isPreviewMobile }) =>
    getLogoImageSize({
      isSidePreview,
      isPreviewMobile,
      logoSize: LOGO_SIZE_DESKTOP,
      logoSizeSidePreview: isPreviewMobile ? LOGO_SIZE_SMALL : LOGO_SIZE_DESKTOP,
    })}

  @media ${MediaSmall} {
    ${({ isSidePreview, isPreviewMobile }) =>
      getLogoImageSize({
        isSidePreview,
        isPreviewMobile,
        logoSize: LOGO_SIZE_SMALL,
      })}
  }

  @media ${MediaSmallMobile} {
    ${({ isSidePreview, isPreviewMobile }) =>
      getLogoImageSize({
        isSidePreview,
        isPreviewMobile,
        logoSize: LOGO_SIZE_MOBILE,
      })}
  }

  @media ${MediaTinyMobile} {
    ${({ isSidePreview, isPreviewMobile }) =>
      getLogoImageSize({
        isSidePreview,
        isPreviewMobile,
        logoSize: LOGO_SIZE_MOBILE_TINY,
      })}
  }
`

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${BackgroundColor.loadingUI};
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

const getLogoColors = ({ logo, design }) => {
  let color = design?.logo?.follow?.color || logo?.follow?.color
  let colorBackground =
    design?.logo?.follow?.colorBackground || logo?.follow?.colorBackground || logo?.text?.color

  if ((!!!logo?.follow && !!!design) || color === 'unset') {
    // find luminance of colorBackground
    const luminance = Math.round(chroma(colorBackground).luminance() * 100)

    if (luminance < 50) color = '#fff'
    else color = '#000'
  }

  return { color, colorBackground }
}

export const Logo =
  // memo(
  ({
    artistProfilePicture,
    design,
    getImageUrl,
    isEditMode,
    isPreviewMobile,
    isSidePreview,
    isSubscribed,
    isSubscriptionLoading,
    isTeaserLinks,
    isUser,
    logo,
    onSubscribe,
    onUnsubscribe,
    showFollowButton,
    ssrDone,
    userProfilePicture,
  }) => {
    const imageUrl = !!logo.image?.url
      ? getImageUrl({ image: logo.image, maxHeight: 25, maxWidth: 25 })
      : !!artistProfilePicture
      ? getImageUrl({ image: artistProfilePicture, maxHeight: 25, maxWidth: 25 })
      : userProfilePicture?.url

    const { color, colorBackground } = getLogoColors({ logo, design })

    return (
      <ImageContainer
        isPreviewMobile={isPreviewMobile}
        orientation={logo?.image?.orientation}
        size={logo.size}
        isTeaserLinks={isTeaserLinks}
        isSidePreview={isSidePreview}
      >
        {/* {(true || isEditMode) && <EditButton top="0">Logo image</EditButton>} */}

        <LogoSubscribe
          isSidePreview={isSidePreview}
          isSubscribed={isSubscribed}
          isSubscriptionLoading={isSubscriptionLoading}
          isUser={isUser}
          onSubscribe={onSubscribe}
          onUnsubscribe={onUnsubscribe}
          showFollowButton={showFollowButton}
          ssrDone={ssrDone}
          color={color}
          colorBackground={colorBackground}
          font={design?.logo?.follow?.font || logo?.follow?.font || logo?.text?.font}
        />

        <LogoImage as={ssrDone ? 'img' : 'div'} src={imageUrl} />
      </ImageContainer>
    )
  }
// ,
// areEqual
// )
