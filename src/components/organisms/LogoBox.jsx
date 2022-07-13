/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

// Atoms
import { EditButton } from '../atoms/buttons/EditButton.js'
import { Logo } from '../atoms/Logo.jsx'
import { LogoText } from '../atoms/LogoText.jsx'
import { LogoSubscribe } from '../atoms/LogoSubscribe.js'

import { MediaMobile, MediaSmall } from '../../style/media'
import { SectionOverlay } from '../molecules/SectionOverlay.js'

// Utils
import { getLogoPosition } from './utils/getLogoSettings.js'
import { getContentPosition } from './utils/getContentSettings.js'

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

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 15%;
  margin: 0.8rem;

  @media ${MediaMobile} {
    width: 100%;
  }
`

/*
 * Defined logo padding in alignment with links
 */

const PositionLeft = ['BOTTOM_LEFT', 'CENTER_LEFT', 'TOP_LEFT']
const PositionRight = ['BOTTOM_RIGHT', 'CENTER_RIGHT', 'TOP_RIGHT']
const PositionBottom = ['BOTTOM_LEFT', 'BOTTOM_CENTER', 'BOTTOM_RIGHT']
const PositionBottomLeft = ['BOTTOM_LEFT', 'BOTTOM_CENTER']
const PositionBottomRight = ['BOTTOM_RIGHT', 'BOTTOM_CENTER']

const defineLogoPadding = ({ isPreviewMobile, isSidePreview, showBanner }) => ({
  left: `padding-left:  ${
    (isSidePreview && 3.3) || (isPreviewMobile && 4.5) || (showBanner && 8.4) || 6
  }rem`,
  right: `padding-right: ${
    (isSidePreview && 3.3) || (isPreviewMobile && 4.5) || (showBanner && 8.4) || 6
  }rem`,
  bottom: `padding-bottom: ${
    (isSidePreview && 3.3) || (isPreviewMobile && 4.5) || (showBanner && 8.4) || 6
  }rem`,
  bottomBanner: `padding-bottom: 2.4rem`,
  none: isSidePreview ? 'padding: 0.5rem' : 'padding: 1rem',
})

const getLogoPadding = ({ logo, links, isPreviewMobile, isSidePreview, showBanner }) => {
  const logoPositionDesktop = logo.positionDesktop || logo.position
  const logoPositionMobile =
    (logo.isDifferentPositions && logo.positionMobile) || logoPositionDesktop

  const logoPadding = defineLogoPadding({ isPreviewMobile, isSidePreview, showBanner })

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
    (showBanner && 'bottomBanner') ||
    'none'

  const paddingIndexMobile =
    (linkPosition > '' && PositionBottom.includes(logoPositionMobile) && 'bottom') || 'none'

  return {
    desktop: logoPadding[paddingIndexDesktop],
    mobile: logoPadding[paddingIndexMobile],
  }
}

export const LogoBox = ({
  artistName,
  artistProfilePicture,
  content,
  design,
  getImageUrl,
  isEditMode,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  isSubscribed,
  isSubscriptionLoading,
  isTeaserLinks,
  isUser,
  links,
  logo,
  onLogoSectionClick,
  onSubscribe,
  onUnsubscribe,
  showBanner,
  showRedirectOverlay,
  t,
  userProfilePicture,
  zIndex,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  const position = getLogoPosition({ logo })
  const padding = getLogoPadding({ logo, links, isPreviewMobile, isSidePreview, showBanner })

  const isLogoText = logo.type === 'TEXT' || (logo.type !== 'TEXT' && !logo.image?.url > '')

  useEffect(() => {
    // setSsrDone(true)
    if (isSidePreview) {
      setTimeout(() => {
        if (!ssrDone) {
          // !HACKS: virtual replacement for 'load' - sometimes on migrating/building 'load' event listener doesn't fire off
          setSsrDone(true)
        }
      }, 1500)
    }

    window.addEventListener('load', () => {
      setTimeout(() => {
        setSsrDone(true)
      }, 0)
    })
  }, [])

  return ssrDone ? (
    <Fragment>
      {showRedirectOverlay && (
        <SectionOverlay
          color="gray"
          contentPosition={getContentPosition({ content })}
          isExtended={isLogoText ? !logo.text?.title : !logo.image?.url}
          isLogo
          isPreviewMobile={isPreviewMobile}
          isTeaserLinks={isTeaserLinks}
          linksPosition={links?.position}
          onClick={onLogoSectionClick}
          positionDesktop={position.classnameDesktop}
          positionMobile={position.classnameMobile}
          t={t}
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
        <LogoWrapper>
          {/* {isLogoText ? ( */}
          {/* ) : ( */}
          <Logo
            artistProfilePicture={artistProfilePicture}
            getImageUrl={getImageUrl}
            isEditMode={isEditMode}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
            isTeaserLinks={isTeaserLinks}
            logo={logo}
            userProfilePicture={userProfilePicture}
          />

          <LogoText
            artistName={artistName}
            design={design}
            isEditMode={isEditMode}
            isPreviewMobile={isPreviewMobileReady}
            isSidePreview={isSidePreview}
            isTeaserLinks={isTeaserLinks}
            logo={logo}
          />
          <LogoSubscribe
            isSidePreview={isSidePreview}
            isSubscribed={isSubscribed}
            isSubscriptionLoading={isSubscriptionLoading}
            isUser={isUser}
            onSubscribe={onSubscribe}
            onUnsubscribe={onUnsubscribe}
          />
          {/* )} */}
        </LogoWrapper>
      </LogoContainer>
    </Fragment>
  ) : null
}
