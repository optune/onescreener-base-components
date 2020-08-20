/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { Logo } from '../atoms/Logo.jsx'
import { LogoText } from '../atoms/LogoText.jsx'

import { MediaSmall } from '../../style/media'

const stylesLogoDesktop = `
&.desktop- {
  &top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &top-center {
    align-items: flex-start;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &top-right {
    align-items: flex-start;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &center-left {
    align-items: center;
    justify-content: flex-start;
  }

  &center-center {
    align-items: center;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &center-right {
    align-items: center;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
  }

  &bottom-center {
    align-items: flex-end;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &bottom-right {
    align-items: flex-end;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }
}`

const stylesLogoMobile = `
&.mobile- {
  &top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &top-center {
    align-items: flex-start;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &top-right {
    align-items: flex-start;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &center-left {
    align-items: center;
    justify-content: flex-start;
  }

  &center-center {
    align-items: center;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &center-right {
    align-items: center;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
  }

  &bottom-center {
    align-items: flex-end;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &bottom-right {
    align-items: flex-end;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }
}`

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;

  ${stylesLogoDesktop}

  ${({ isDifferentPositions }) =>
    isDifferentPositions &&
    css`
      @media ${MediaSmall} {
        ${stylesLogoMobile}
      }

      ${({ isPreviewMobile }) =>
        isPreviewMobile &&
        css`
          ${stylesLogoMobile}
        `}
    `}


  ${({ isPreviewMobile, padding }) =>
    css`
      ${isPreviewMobile ? padding.mobile : padding.desktop};

      @media ${MediaSmall} {
        ${padding.mobile};
      }
    `}
`

/*
 * Defined logo padding in alignment with links
 */

const PositionLeft = ['BOTTOM_LEFT', 'CENTER_LEFT', 'TOP_LEFT']
const PositionRight = ['BOTTOM_RIGHT', 'CENTER_RIGHT', 'TOP_RIGHT']
const PositionBottom = ['BOTTOM_LEFT', 'BOTTOM_CENTER', 'BOTTOM_RIGHT']
const PositionBottomLeft = ['BOTTOM_LEFT', 'BOTTOM_CENTER']
const PositionBottomRight = ['BOTTOM_RIGHT', 'BOTTOM_CENTER']

const defineLogoPadding = ({ isPreviewMobile, isSidePreview }) => ({
  left: `padding-left:  ${(isSidePreview && 3.3) || (isPreviewMobile && 4.5) || 6}rem`,
  right: `padding-right: ${(isSidePreview && 3.3) || (isPreviewMobile && 4.5) || 6}rem`,
  bottom: `padding-bottom: ${(isSidePreview && 3.3) || (isPreviewMobile && 4.5) || 6}rem`,
  none: 'padding: 0',
})

const getLogoPadding = ({ logo, links, isPreviewMobile, isSidePreview }) => {
  const logoPositionDesktop = logo.positionDesktop || logo.position
  const logoPositionMobile =
    (logo.isDifferentPositions && logo.positionMobile) || logoPositionDesktop

  const logoPadding = defineLogoPadding({ isPreviewMobile, isSidePreview })

  const linkPosition = links.list.length > 0 ? links.position : ''

  const paddingIndexDesktop =
    (linkPosition === 'CENTER_LEFT' && PositionLeft.includes(logoPositionDesktop) && 'left') ||
    (linkPosition === 'CENTER_RIGHT' && PositionRight.includes(logoPositionDesktop) && 'right') ||
    (PositionBottomLeft.includes(linkPosition) &&
      PositionBottomLeft.includes(logoPositionDesktop) &&
      'bottom') ||
    (PositionBottomRight.includes(linkPosition) &&
      PositionBottomRight.includes(logoPositionDesktop) &&
      'bottom') ||
    'none'

  const paddingIndexMobile =
    (linkPosition === 'CENTER_LEFT' && PositionLeft.includes(logoPositionMobile) && 'left') ||
    (linkPosition === 'CENTER_RIGHT' && PositionRight.includes(logoPositionMobile) && 'right') ||
    (PositionBottom.includes(linkPosition) &&
      PositionBottom.includes(logoPositionMobile) &&
      'bottom') ||
    'none'

  return {
    desktop: logoPadding[paddingIndexDesktop],
    mobile: logoPadding[paddingIndexMobile],
  }
}

/*
 * Get classnames for logo position
 */

const getLogoPosition = ({ logo }) => {
  const positionDesktop = (logo.positionDesktop > '' && logo.positionDesktop) || logo.position

  const classnameDesktop =
    (positionDesktop > '' && positionDesktop.toLowerCase().replace('_', '-')) || 'top-center'

  const logoPosition =
    (logo.isDifferentPositions && logo.positionMobile) || logo.positionDesktop || logo.position

  const classnameMobile =
    (logoPosition > '' && logoPosition.toLowerCase().replace('_', '-')) || 'top-center'

  return {
    classnameMobile,
    classnameDesktop,
  }
}

export const LogoBox = ({
  logo,
  links,
  getImageUrl,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  zIndex,
}) => {
  const position = getLogoPosition({ logo })
  const padding = getLogoPadding({ logo, links, isPreviewMobile, isSidePreview })

  return (
    <LogoContainer
      className={`desktop-${position.classnameDesktop} mobile-${position.classnameMobile}`}
      zIndex={zIndex}
      isPreviewMobile={isPreviewMobile}
      isDifferentPositions={logo?.isDifferentPositions || false}
      padding={padding}
    >
      {logo.type === 'TEXT' ? (
        <LogoText logo={logo} isPreviewMobile={isPreviewMobileReady} />
      ) : (
        (logo.image?.url > '' && (
          <Logo logo={logo} getImageUrl={getImageUrl} isPreviewMobile={isPreviewMobile} />
        )) || <LogoText logo={logo} isPreviewMobile={isPreviewMobileReady} />
      )}
    </LogoContainer>
  )
}
