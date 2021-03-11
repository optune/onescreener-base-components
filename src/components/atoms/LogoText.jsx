/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

import { MediaMobile } from '../../style/media'

const LogoSize = {
  Desktop: {
    XS: '13%',
    S: '20%',
    M: '27%',
    L: '33%',
    XL: '41%',
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
    XS: '30%',
    S: '35%',
    M: '45%',
    L: '60%',
    XL: '80%',
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
    XS: '10%',
    S: '12%',
    M: '14%',
    L: '18%',
    XL: '20%',
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
    XS: '7%',
    S: '9%',
    M: '10%',
    L: '12%',
    XL: '14%',
  },
  Mobile: {
    XS: '10%',
    S: '13%',
    M: '20%',
    L: '24%',
    XL: '28%',
  },
}

const LogoTextContainer = styled.div`
  position: absolute;
  width: ${({ size, isPreviewMobile }) =>
    isPreviewMobile ? LogoSize.Mobile[size] : LogoSize.Desktop[size]};
  height: ${({ size, isPreviewMobile }) =>
    isPreviewMobile ? LogoSize.Mobile[size] : LogoSize.Desktop[size]};
  padding: 0.25rem;

  max-height: ${LogoSize.Desktop.XL};

  ${({ size, isPreviewMobile, isSidePreview, isTeaserLinks }) =>
    isTeaserLinks &&
    css`
      max-height: ${isPreviewMobile
        ? LogoSizeMaxHeight.Mobile[size]
        : LogoSizeMaxHeight.Desktop[size]};
      min-width: ${isPreviewMobile
        ? LogoSizeMinWidth.Mobile[size]
        : LogoSizeMinWidth.Desktop[size]};

      ${isSidePreview &&
      `max-height: ${
        isPreviewMobile
          ? LogoSizeMaxHeightSidePreview.Mobile[size]
          : LogoSizeMaxHeightSidePreview.Desktop[size]
      }; `}
    `}

  & #auto-text-fit-container {
    display: flex;
    align-items: ${({ logoPosition, isPreviewMobile }) =>
      isPreviewMobile ? logoPosition.mobile : logoPosition.desktop};
  }

  @media ${MediaMobile} {
    width: ${({ size, isSidePreview, isPreviewMobile }) =>
      isSidePreview && !isPreviewMobile ? LogoSize.Desktop[size] : LogoSize.Mobile[size]};
    height: ${({ size, isSidePreview, isPreviewMobile }) =>
      isSidePreview && !isPreviewMobile ? LogoSize.Desktop[size] : LogoSize.Mobile[size]};

    & #auto-text-fit-container {
      align-items: ${({ logoPosition }) => logoPosition.mobile};
    }
  }

  & p {
    color: ${({ color }) => color};
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

export const LogoText = ({ design, logo, isPreviewMobile, isSidePreview, isTeaserLinks }) => {
  const logoPosition = getLogoPosition({ logo })
  return logo.text?.title ? (
    <LogoTextContainer
      size={logo.size}
      color={design?.theme?.logo?.color || logo.text.color}
      fontFamily={design?.theme?.logo?.font || logo.text.font}
      isPreviewMobile={isPreviewMobile}
      isSidePreview={isSidePreview}
      logoPosition={isTeaserLinks ? { desktop: 'flex-start', mobile: 'flex-start' } : logoPosition}
      isTeaserLinks={isTeaserLinks}
    >
      <AutoTextFit
        adjustWidth
        includeWidth
        padding="0"
        maxFontSize={200}
        isMobileView={isPreviewMobile}
        isLogo
        textValue={logo.text.title}
      >
        <p className="apply-font">{logo.text.title}</p>
      </AutoTextFit>
    </LogoTextContainer>
  ) : null
}
