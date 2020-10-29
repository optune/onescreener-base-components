/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

import { MediaSmall } from '../../style/media'

const LogoSize = {
  Desktop: {
    XS: '8.333%',
    S: '16.666%',
    M: '33.333%',
    L: '50%',
    XL: '66.666%',
  },
  Mobile: {
    XS: '33.333%',
    S: '33.333%',
    M: '50%',
    L: '50%',
    XL: '75%',
  },
}

const LogoTextContainer = styled.div`
  position: relative;
  width: ${({ size, isPreviewMobile }) =>
    isPreviewMobile ? LogoSize.Mobile[size] : LogoSize.Desktop[size]};
  height: ${({ size, isPreviewMobile }) =>
    isPreviewMobile ? LogoSize.Mobile[size] : LogoSize.Desktop[size]};
  margin: 1rem;

  & #auto-text-fit-container {
    display: flex;
    align-items: ${({ logoPosition, isPreviewMobile }) =>
      isPreviewMobile ? logoPosition.mobile : logoPosition.desktop};
  }

  @media ${MediaSmall} {
    width: ${({ size }) => LogoSize.Mobile[size]};
    height: ${({ size }) => LogoSize.Mobile[size]};

    & #auto-text-fit-container {
      align-items: ${({ logoPosition }) => logoPosition.mobile};
    }
  }

  & p {
    color: ${({ color }) => color};
    display: inline-block;
    font-size: 1em;
    font-family: ${({ fontFamily }) => `${fontFamily}`};
    text-align: center;
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

export const LogoText = ({ logo, isPreviewMobile }) => {
  const logoPosition = getLogoPosition({ logo })
  return logo.text?.title ? (
    <LogoTextContainer
      size={logo.size}
      color={logo.text.color}
      fontFamily={logo.text.font}
      isPreviewMobile={isPreviewMobile}
      logoPosition={logoPosition}
    >
      <AutoTextFit
        adjustWidth
        includeWidth
        padding="0"
        maxFontSize={300}
        isMobileView={isPreviewMobile}
        isLogo
        textValue={logo.text.title}
      >
        <p className="apply-font">{logo.text.title}</p>
      </AutoTextFit>
    </LogoTextContainer>
  ) : null
}
