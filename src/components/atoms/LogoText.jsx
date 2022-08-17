/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

// Atoms
import { EditButton } from './buttons/EditButton.js'

import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

import { MediaMobile } from '../../style/media'
import { BackgroundColor } from '../../style/color.js'

const LogoSize = {
  Desktop: {
    XS: '11%',
    S: '17%',
    M: '22.95%',
    L: '28.05%',
    XL: '34.85%',
  },
  Mobile: {
    XS: '33.333%',
    S: '33.333%',
    M: '50%',
    L: '50%',
    XL: '75%',
  },
}

/*
 * Teaser Links Size options
 */

const LogoSizeMinWidth = {
  Desktop: {
    XS: '17%',
    S: '22%',
    M: '27%',
    L: '32%',
    XL: '37%',
  },
  Mobile: {
    XS: '40%',
    S: '45%',
    M: '55%',
    L: '60%',
    XL: '80%',
  },
}

const LogoSizeMaxHeight = {
  Desktop: {
    XS: '8.5%',
    S: '9.5%',
    M: '11%',
    L: '15%',
    XL: '17%',
  },
  Mobile: {
    XS: '10%',
    S: '13%',
    M: '20%',
    L: '24%',
    XL: '28%',
  },
}

const LogoSizeMaxHeightSidePreview = {
  Desktop: {
    XS: '3%',
    S: '4%',
    M: '5%',
    L: '6%',
    XL: '7%',
  },
  Mobile: {
    XS: '10%',
    S: '13%',
    M: '20%',
    L: '24%',
    XL: '28%',
  },
}

// position: absolute;
// width: ${({ size, isPreviewMobile }) =>
//   isPreviewMobile ? LogoSize.Mobile[size] : LogoSize.Desktop[size]};
// height: ${({ size, isPreviewMobile }) =>
//   isPreviewMobile ? LogoSize.Mobile[size] : LogoSize.Desktop[size]};
// margin: 0.8rem;
// max-height: ${LogoSize.Desktop.XL};

// ${({ size, isPreviewMobile, isSidePreview, isTeaserLinks }) =>
//   isTeaserLinks &&
//   css`
//     max-height: ${isPreviewMobile
//       ? LogoSizeMaxHeight.Mobile[size]
//       : LogoSizeMaxHeight.Desktop[size]};
//     min-width: ${isPreviewMobile
//       ? LogoSizeMinWidth.Mobile[size]
//       : LogoSizeMinWidth.Desktop[size]};

//     ${isSidePreview &&
//     `max-height: ${
//       isPreviewMobile
//         ? LogoSizeMaxHeightSidePreview.Mobile[size]
//         : LogoSizeMaxHeightSidePreview.Desktop[size]
//     }; `}
//   `}
const LogoTextContainer = styled.div`
  position: relative;
  margin-top: ${({ isSidePreview }) => (isSidePreview ? '3px' : '6px')};
  min-height: ${({ isSidePreview }) => (isSidePreview ? '10px' : '20px')};
  max-height: 25%;
  width: 100%;
  background-color: ${({ ssrDone }) => (ssrDone ? 'transparent' : BackgroundColor.loadingUI)};
  border-radius: 4px;

  & #auto-text-fit-container {
    display: flex;
    /* align-items: ${({ logoPosition, isPreviewMobile }) =>
      isPreviewMobile ? logoPosition.mobile : logoPosition.desktop}; */
    align-items: center;
  }

  @media ${MediaMobile} {
    

    /* & #auto-text-fit-container {
      align-items: ${({ logoPosition, isSidePreview, isPreviewMobile }) =>
        isPreviewMobile ? logoPosition.mobile : logoPosition.desktop};
    } */
  }

  & p {
    color: ${({ color }) => color};
    text-align: center;
    ${({ shadowSize }) =>
      shadowSize > 0 &&
      css`
        text-shadow: ${({ shadowSize, shadowColor }) =>
          `${shadowSize}px ${shadowSize}px 3px ${shadowColor}`};
      `}
    display: inline-block;
    font-size: 1em;
    font-family: ${({ fontFamily }) => `${fontFamily}`};

    line-height: 1;
    white-space: nowrap;
  }
`

/*
 * Set vertical alignment of text logo
 */

const PositionTop = ['TOP_LEFT', 'TOP_CENTER', 'TOP_RIGHT']
const PositionBottom = ['BOTTOM_LEFT', 'BOTTOM_CENTER', 'BOTTOM_RIGHT']

const PositionAlignment = {
  top: 'flex-start',
  bottom: 'flex-end',
  center: 'center',
}

const getLogoPosition = ({ logo }) => {
  const positionDesktop = logo.positionDesktop || logo.position

  const positionMobile = (logo.isDifferentPositions && logo.positionMobile) || positionDesktop

  const positionAlignmentDesktop =
    (PositionTop.includes(positionDesktop) && 'top') ||
    (PositionBottom.includes(positionDesktop) && 'bottom') ||
    'center'
  const positionAlignmentMobile =
    (PositionTop.includes(positionMobile) && 'top') ||
    (PositionBottom.includes(positionMobile) && 'bottom') ||
    'center'

  return {
    desktop: PositionAlignment[positionAlignmentDesktop],
    mobile: PositionAlignment[positionAlignmentMobile],
  }
}

export const LogoText = ({
  artistName,
  design,
  isPreviewMobile,
  isSidePreview,
  isTeaserLinks,
  logo,
  ssrDone,
}) => {
  const logoPosition = getLogoPosition({ logo })
  const logoText = logo.text?.title || artistName

  return (
    <LogoTextContainer
      size={logo.size}
      shadowColor={logo.text?.shadowColor}
      shadowSize={logo.text?.shadowSize}
      color={design?.theme?.logo?.color || logo.text?.color}
      fontFamily={design?.theme?.logo?.font || logo.text?.font}
      isPreviewMobile={isPreviewMobile}
      isSidePreview={isSidePreview}
      logoPosition={isTeaserLinks ? { desktop: 'flex-start', mobile: 'flex-start' } : logoPosition}
      isTeaserLinks={isTeaserLinks}
      ssrDone={ssrDone}
    >
      <AutoTextFit
        includeWidth
        isLogo
        isMobileView={isPreviewMobile}
        isSidePreview={isSidePreview}
        maxFontSize={isSidePreview ? 18 : 22}
        minFontSize={isSidePreview ? 9 : 12}
        padding="0"
        ssrDone={ssrDone}
        textValue={logo.text?.title}
      >
        <p className="logo-apply-font">{logoText}</p>
      </AutoTextFit>
    </LogoTextContainer>
  )
}
