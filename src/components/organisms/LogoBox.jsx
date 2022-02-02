/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

// Atoms
import { EditButton } from '../atoms/buttons/EditButton.js'
import { Logo } from '../atoms/Logo.jsx'
import { LogoText } from '../atoms/LogoText.jsx'

import { MediaMobile, MediaSmall } from '../../style/media'
import { SectionOverlay } from '../molecules/SectionOverlay.js'

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
    margin: 2px;

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

  ${stylesLogoDesktop}

  ${({ isDifferentPositions, isPreviewMobile, isSidePreview }) =>
    isDifferentPositions &&
    css`
      ${isPreviewMobile && stylesLogoMobile}

      @media ${MediaMobile} {
        ${!isSidePreview && stylesLogoMobile}
      }
    `}


  ${({ isPreviewMobile, isSidePreview, padding }) =>
    css`
      ${isPreviewMobile ? padding.mobile : padding.desktop};

      @media ${MediaMobile} {
        ${!isSidePreview && padding.mobile}
      }

      @media ${MediaSmall} {
        ${isSidePreview && 'padding-bottom: 5.4rem;'}
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
  none: isSidePreview ? 'padding: 0.5rem' : 'padding: 1rem',
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
    (linkPosition > '' && PositionBottom.includes(logoPositionMobile) && 'bottom') || 'none'

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
  design,
  getImageUrl,
  isEditMode,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  isTeaserLinks,
  links,
  logo,
  onLogoSectionClick,
  showRedirectOverlay,
  zIndex,
}) => {
  const position = getLogoPosition({ logo })
  const padding = getLogoPadding({ logo, links, isPreviewMobile, isSidePreview })

  const isLogoText = logo.type === 'TEXT' || (logo.type !== 'TEXT' && !logo.image?.url > '')

  return (
    <Fragment>
      {showRedirectOverlay && (
        <SectionOverlay
          color="gray"
          isExtended={isLogoText ? !logo.text?.title : !logo.image?.url}
          isLogo
          isPreviewMobile={isPreviewMobile}
          isTeaserLinks={isTeaserLinks}
          linksPosition={links?.position}
          onClick={onLogoSectionClick}
          positionDesktop={position.classnameDesktop}
          positionMobile={position.classnameMobile}
        />
      )}
      <LogoContainer
        className={`desktop-${isTeaserLinks ? 'top-center' : position.classnameDesktop} mobile-${
          isTeaserLinks ? 'top-center' : position.classnameMobile
        }`}
        zIndex={zIndex}
        isPreviewMobile={isPreviewMobile}
        isSidePreview={isSidePreview}
        isDifferentPositions={logo?.isDifferentPositions || false}
        padding={padding}
      >
        {isLogoText ? (
          <LogoText
            design={design}
            isEditMode={isEditMode}
            isPreviewMobile={isPreviewMobileReady}
            isSidePreview={isSidePreview}
            isTeaserLinks={isTeaserLinks}
            logo={logo}
          />
        ) : (
          <Logo
            getImageUrl={getImageUrl}
            isEditMode={isEditMode}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
            isTeaserLinks={isTeaserLinks}
            logo={logo}
          />
        )}
      </LogoContainer>
    </Fragment>
  )
}
