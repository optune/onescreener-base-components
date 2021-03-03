// React
import React from 'react'
import styled from 'styled-components'

// Atoms
import { Link } from '../../atoms/links/Link'
import { LinkIconMapper } from '../../atoms/links/LinkIconMapper'

const LinkWrapper = styled.a`
  text-decoration: none;
  /* margin: ${({ isPreviewMobile }) => isPreviewMobile && '0 4px'}; */
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
`

const LinkWrapperText = styled.div`
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
`

export const PlatformLink = ({
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  isHighlighted,
  isPreviewMobile,
  isSidePreview,
  label,
  margin,
  modalData,
  name,
  noShadow,
  platform,
  position,
  setModalData,
  size,
  square,
  target,
  text,
  url,
}) => {
  const Icon = LinkIconMapper({ platform, size })
  const labelText = (
    name ||
    label ||
    platform
  ).replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, (l) => l.toUpperCase())

  if (url > '') {
    return (
      <LinkWrapper
        href={url}
        title={labelText}
        target={target || '_blank'}
        rel="noopener noreferrer"
      >
        <Link
          border={border}
          circle={circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          margin={margin}
          position={position}
          noShadow
          isHighlighted={isHighlighted}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          size={size || 'M'}
          square={square}
        >
          <Icon
            color={color}
            size={size}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
          />
        </Link>
      </LinkWrapper>
    )
  } else if (text > '' && setModalData) {
    return (
      <LinkWrapperText
        onClick={() => setModalData({ show: true, content: text, label: labelText })}
      >
        <Link
          border={border}
          circle={circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          margin={margin}
          noShadow
          isHighlighted={isHighlighted}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          size={size || 'M'}
          square={square}
        >
          <Icon
            color={color}
            size={size}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
          />
        </Link>
      </LinkWrapperText>
    )
  } else {
    return (
      <Link
        border={border}
        circle={circle}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        noShadow
        isHighlighted={isHighlighted}
        isPreviewMobile={isPreviewMobile}
        isSidePreview={isSidePreview}
        isPreview
        size={size || 'M'}
        square={square}
      >
        <Icon
          color={color}
          size={size}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          isPreview
        />
      </Link>
    )
  }
}
