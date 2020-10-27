// React
import React from 'react'
import styled from 'styled-components'

// Atoms
import { Link } from '../../atoms/links/Link'
import { LinkIconMapper } from '../../atoms/links/LinkIconMapper'

// Icons
import { PlatformLinkIcon } from '../../icons/platform/index'

const LinkWrapper = styled.a`
  text-decoration: none;
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
`

export const PlatformLinks = Object.keys(PlatformLinkIcon).map((platform) => {
  const Icon = LinkIconMapper({ platform })
  const LinkIcon = ({
    border,
    color,
    colorAccent,
    colorBackground,
    colorBackgroundAccent,
    notInteractive,
    onClick,
  }) => (
    <LinkWrapper
      onClick={onClick}
      notInteractive={notInteractive}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Link
        border={border}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        notInteractive={notInteractive}
        size="M"
      >
        <Icon color={color} />
      </Link>
    </LinkWrapper>
  )

  return {
    platform,
    LinkIcon,
  }
})