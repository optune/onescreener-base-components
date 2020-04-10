/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { Logo } from '../atoms/Logo.jsx'
import { LogoText } from '../atoms/LogoText.jsx'

import { MediaMobile } from '../../style/media'

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
  margin: var(--margin-logo);
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
        isDifferentPositions &&
        isPreviewMobile &&
        css`
          ${stylesLogoMobile}
        `}
    `}
`

export const LogoBox = ({ logo, zIndex, getImageUrl, isPreviewMobile }) => {
  const classnameDesktop =
    logo.positionDesktop > '' ? logo.positionDesktop.toLowerCase().replace('_', '-') : 'top-center'
  const classnameMobile =
    logo.positionMobile > '' ? logo.positionMobile.toLowerCase().replace('_', '-') : 'top-center'

  return (
    <LogoContainer
      className={`desktop-${classnameDesktop} mobile-${classnameMobile}`}
      zIndex={zIndex}
      isPreviewMobile={isPreviewMobile}
      isDifferentPositions={logo?.isDifferentPositions || false}
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
