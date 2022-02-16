import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { MediaSmall } from '../../style/media'
import { EditButton } from '../atoms/buttons/EditButton'

const Container = styled.div`
  position: absolute;
  top: ${({ top, topMobile, isPreviewMobile }) => (isPreviewMobile ? topMobile : top)};
  right: ${({ right, rightMobile, isPreviewMobile }) => (isPreviewMobile ? rightMobile : right)};
  bottom: ${({ bottom, bottomMobile, isPreviewMobile }) =>
    isPreviewMobile ? bottomMobile : bottom};
  left: ${({ left, leftMobile, isPreviewMobile }) => (isPreviewMobile ? leftMobile : left)};
  background-color: ${({ isTest, colorSection }) => (isTest ? colorSection : 'unset')};
  opacity: ${({ isTest }) => (isTest ? 0.6 : 1)};
  z-index: 9999;
  cursor: pointer;
`

const TOP = 'top'
const LEFT = 'left'
const BOTTOM = 'bottom'
const RIGHT = 'right'
const CENTER = 'center'

const getAxis = (position) => (position > '' ? position.split('-') : ['', ''])

const getPositionDesktop = ({
  isContent,
  isLinks,
  isLogo,
  isOverlappingLogoContent,
  isTeaserLinks,
  mappedLinksPosition,
  positionDesktop,
  teaserLinksValue,
}) => {
  let top = 0,
    left = 0,
    right = 0,
    bottom = 0

  const [y, x] = getAxis(positionDesktop)
  const [yLinks, xLinks] = getAxis(mappedLinksPosition)

  /*
   * Rows settings
   */

  if (y === TOP) {
    top = 0
    bottom = 66.666
  }
  if (y === CENTER) {
    top = 33.333
    bottom = 33.333

    if (isLinks) {
      top = 0
      bottom = 0
    }
  }
  if (y === BOTTOM) {
    top = 66.666
    bottom = 0

    if (!isLinks && yLinks === BOTTOM) {
      top = 59.666
      bottom = 13
    }

    if (isLinks) {
      top = 87
    }
  }

  /*
   * Column settings
   */

  if (x === RIGHT) {
    left = 66.666
    right = 0

    if (!isLinks && xLinks === RIGHT) {
      right = 9
      left = 62.666
    }

    if (isLinks) {
      left = 91
    }
  }
  if (x === LEFT) {
    left = 0
    right = 66.666

    if (!isLinks && xLinks === LEFT) {
      left = 9
      right = 62.666
    }

    if (isLinks) {
      right = 91
    }
  }
  if (x === CENTER) {
    left = 33.333
    right = 33.333

    if (isLinks) {
      right = 0
      left = 0
    }
  }

  /*
   * Special cases settings
   */

  if (isTeaserLinks) {
    top = 46
    left = 30.333
    right = 30.333
    bottom = 42

    if (!isLogo) {
      // console.log({ teaserLinksValueDESKTOP: teaserLinksValue })
    }
    if (teaserLinksValue > 1) {
      top -= teaserLinksValue * 3.1
      bottom -= teaserLinksValue * 3.6

      if (top < 19) top = 19
      if (bottom < 17) bottom = 17
    }

    if (isLogo) {
      top = 0
      left = 33.333
      right = 33.333
      bottom = 83
    }
  }

  if (isOverlappingLogoContent) {
    if (isLogo) {
      left += 16.667
    }
    if (isContent) {
      right += 16.667
    }
  }

  return { top: `${top}%`, left: `${left}%`, right: `${right}%`, bottom: `${bottom}%` }
}

const getPositionMobile = ({
  isContent,
  isLinks,
  isLogo,
  isOverlappingLogoContent,
  isTeaserLinks,
  mappedLinksPosition,
  positionMobile,
  teaserLinksValue,
}) => {
  let top = 0,
    left = 0,
    right = 0,
    bottom = 0

  const [y, x] = getAxis(positionMobile)
  const [yLinks, xLinks] = getAxis(mappedLinksPosition)

  /*
   * Rows settings
   */

  if (y === TOP) {
    top = 0
    bottom = 70.666
  }
  if (y === CENTER) {
    top = 35.333
    bottom = 37.333
  }
  if (y === BOTTOM) {
    top = 66.666
    bottom = 0

    if (!isLinks && yLinks > '') {
      top = 64.666
      bottom = 11
    }
    if (isLinks) {
      top = 89
      bottom = 0
    }
  }

  /*
   * Special cases settings
   */

  if (isTeaserLinks) {
    top = 47 // - 19
    left = 0
    right = 0
    bottom = 41 // - 28

    // // console.log('is teaser links yes')

    if (teaserLinksValue > 1) {
      top -= teaserLinksValue * 2.2
      bottom -= teaserLinksValue * 3

      if (top < 26) top = 26
      if (bottom < 18) bottom = 18
    }

    // // console.log({ topLINKS: top, bottomLINKS: bottom })

    if (isLogo) {
      // // console.log('is LOGO teaser links yes')
      top = 0
      left = 0
      right = 0
      bottom = 80

      // // console.log({ top, bottom })
    }
  }

  if (isOverlappingLogoContent) {
    if (isLogo) {
      left += 50
    }
    if (isContent) {
      right += 50
    }
  }

  return {
    topMobile: `${top}%`,
    leftMobile: `${left}%`,
    rightMobile: `${right}%`,
    bottomMobile: `${bottom}%`,
  }
}

const getEditButtonSettings = ({
  isExtended,
  isLinks,
  isLogo,
  isOverlappingLogoContent,
  isPreviewMobile,
  positionDesktop,
}) => {
  let title = undefined
  let top = '5px'
  let left = undefined
  let right = undefined
  let transform = 'translateX(-50%)'

  if (isExtended) title = isOverlappingLogoContent ? 'Edit Content' : 'Add Content'

  // // console.log({ isLinks, isLogo, positionDesktop })
  if (isLinks) {
    const [yLinks, xLinks] = getAxis(positionDesktop)
    top = '10px'
    right = 'unset'

    if (isExtended) title = 'Add Icons'

    if (xLinks === LEFT && !isPreviewMobile) {
      top = '50%'
      left = undefined
      right = isExtended ? '-35px' : '0'
      transform = 'translateY(-50%)'
    }

    if (xLinks === RIGHT && !isPreviewMobile) {
      top = '50%'
      right = undefined
      left = isExtended ? '-35px' : '0'
      transform = 'translateY(-50%)'
    }
  }
  if (isLogo) {
    if (isExtended) title = isOverlappingLogoContent ? 'Edit Logo' : 'Add Logo'
  }

  return { title, top, left, right, transform }
}

// TODO: change for TEASER LINKS
export const SectionOverlay = ({
  color,
  contentPosition,
  isContent,
  isExtended,
  isLinks,
  isLogo,
  isPreviewMobile,
  isTeaserLinks,
  isTest = false,
  linksPosition,
  logoPosition,
  onClick,
  positionDesktop = 'top-center',
  positionMobile = 'top-center',
  teaserLinksValue,
}) => {
  const mappedLinksPosition = linksPosition?.toLowerCase().replace('_', '-') || ''

  // console.log({ mappedLinksPosition })
  let isOverlappingLogoContent = false

  if (isLogo && !isTeaserLinks)
    isOverlappingLogoContent = isPreviewMobile
      ? contentPosition.classnameMobile === positionMobile
      : contentPosition.classnameDesktop === positionDesktop
  if (isContent && !isTeaserLinks)
    isOverlappingLogoContent = isPreviewMobile
      ? logoPosition.classnameMobile === positionMobile
      : logoPosition.classnameDesktop === positionDesktop

  if (isLogo) {
    // console.log({ logoovelap: isOverlappingLogoContent })
  }
  if (isContent) {
    // console.log({ contentovelap: isOverlappingLogoContent })
  }

  const isMobile = useMediaQuery({ query: MediaSmall })

  const {
    title,
    top: topEdit,
    left: leftEdit,
    right: rightEdit,
    transform: transformEdit,
  } = getEditButtonSettings({
    isExtended: isExtended || isOverlappingLogoContent,
    isLinks,
    isLogo,
    isOverlappingLogoContent,
    isPreviewMobile,
    positionDesktop,
  })

  // // console.log({ title, topEdit, leftEdit, rightEdit, transformEdit })

  const { top, left, right, bottom } = getPositionDesktop({
    isContent,
    isLinks,
    isLogo,
    isOverlappingLogoContent,
    isTeaserLinks,
    mappedLinksPosition,
    positionDesktop,
    teaserLinksValue,
  })
  const { topMobile, leftMobile, rightMobile, bottomMobile } = getPositionMobile({
    isContent,
    isLinks,
    isLogo,
    isOverlappingLogoContent,
    isTeaserLinks,
    mappedLinksPosition,
    positionMobile,
    teaserLinksValue,
  })

  return (
    <Container
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      topMobile={topMobile}
      leftMobile={leftMobile}
      rightMobile={rightMobile}
      bottomMobile={bottomMobile}
      colorSection={color}
      isTest={isTest}
      isPreviewMobile={isPreviewMobile}
      onClick={isMobile ? undefined : onClick}
    >
      {isMobile && (
        <EditButton
          buttonHeight={isOverlappingLogoContent ? 38 : undefined}
          className="animated fadeIn"
          left={leftEdit}
          onClick={isMobile ? onClick : undefined}
          right={rightEdit}
          top={topEdit}
          transform={transformEdit}
        >
          {title}
        </EditButton>
      )}
    </Container>
  )
}
