/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { Logo } from '../atoms/Logo.jsx'
import { LogoText } from '../atoms/LogoText.jsx'

import { MediaMobile } from '../../style/media'
import { useMediaQuery } from 'react-responsive'

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
      @media ${MediaMobile} {
        ${stylesLogoMobile}
      }

      ${({ isPreviewMobile }) =>
        isPreviewMobile &&
        css`
          ${stylesLogoMobile}
        `}
    `}


  ${({ padding }) =>
    css`
      ${padding}
    `}
`

/*
 * Defined logo padding in alignment with links
 */

const PositionLeft = ['BOTTOM_LEFT', 'CENTER_LEFT', 'TOP_LEFT']
const PositionRight = ['BOTTOM_RIGHT', 'CENTER_RIGHT', 'TOP_RIGHT']
const PositionBottom = ['BOTTOM_LEFT', 'BOTTOM_CENTER', 'BOTTOM_RIGHT']

const defineLogoPadding = isPreviewMobile => ({
  left: `padding-left: ${isPreviewMobile ? 4.5 : 8}rem`,
  right: `padding-right: ${isPreviewMobile ? 4.5 : 8}rem`,
  bottom: `padding-bottom: ${isPreviewMobile ? 4.5 : 8}rem`,
  none: 'padding: 0',
})

const getLogoPadding = ({ logo, links, isPreviewMobile, isMobile }) => {
  const logoPosition = isMobile && logo.positionMobile || logo.positionDesktop || logo.position
  const paddingIndex =
    (links.position === 'CENTER_LEFT' && PositionLeft.includes(logoPosition) && 'left') ||
    (links.position === 'CENTER_RIGHT' && PositionRight.includes(logoPosition) && 'right') ||
    (PositionBottom.includes(logoPosition) && 'bottom') ||
    'none'

  console.log(paddingIndex, logoPosition, links.position)

  return defineLogoPadding(isPreviewMobile)[paddingIndex]
}

export const LogoBox = ({ logo, links, getImageUrl, isPreviewMobile, zIndex }) => {
  const classnameDesktop =
    (logo.positionDesktop > '' && logo.positionDesktop.toLowerCase().replace('_', '-')) ||
    (logo.position > '' && logo.position.toLowerCase().replace('_', '-')) ||
    'top-center'
  const classnameMobile =
    (logo.positionMobile > '' && logo.positionMobile.toLowerCase().replace('_', '-')) ||
    (logo.position > '' && logo.position.toLowerCase().replace('_', '-')) ||
    'top-center'

  // Media Query
  const isMobile = useMediaQuery({ query: MediaMobile })

  return (
    <LogoContainer
      className={`desktop-${classnameDesktop} mobile-${classnameMobile}`}
      zIndex={zIndex}
      isPreviewMobile={isPreviewMobile}
      isDifferentPositions={logo?.isDifferentPositions || false}
      padding={getLogoPadding({ logo, links, isPreviewMobile, isMobile })}
    >
      {logo.type === 'TEXT' ? (
        <LogoText logo={logo} isPreviewMobile={isPreviewMobile} />
      ) : (
        (logo.image?.url > '' && (
          <Logo logo={logo} getImageUrl={getImageUrl} isPreviewMobile={isPreviewMobile} />
        )) || <LogoText logo={logo} isPreviewMobile={isPreviewMobile} />
      )}
    </LogoContainer>
  )
}
