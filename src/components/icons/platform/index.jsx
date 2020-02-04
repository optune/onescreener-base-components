/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

// Social Icons
import { AboutIcon } from './About.jsx'
import { AmazonIcon } from './Amazon.jsx'
import { AppleMusicIcon } from './AppleMusic.jsx'
import { ArtistProfileIcon } from './ArtistProfile.jsx'
import { RequestFormIcon } from './RequestForm.jsx'
import { PressKitIcon } from './PressKit.jsx'
import { GigsIcon } from './Gigs.jsx'
import { BandcampIcon } from './Bandcamp.jsx'
import { BiographyIcon } from './Biography.jsx'
import { FacebookIcon } from './Facebook.jsx'
import { InstagramIcon } from './Instagram.jsx'
import { ITunesIcon } from './ITunes.jsx'
import { LastFMIcon } from './LastFM.jsx'
import { MailIcon } from './Mail.jsx'
import { MixcloudIcon } from './Mixcloud.jsx'
import { NewsletterIcon } from './Newsletter.jsx'
import { OptuneIcon } from './Optune.jsx'
import { SoundcloudIcon } from './Soundcloud.jsx'
import { SpotifyIcon } from './Spotify.jsx'
import { TechRiderIcon } from './TechRider.jsx'
import { TumblrIcon } from './Tumblr.jsx'
import { TwitterIcon } from './Twitter.jsx'
import { YoutubeIcon } from './Youtube.jsx'
import { VimeoIcon } from './Vimeo.jsx'

// Miscellaneous Icons
import { MiscStarIcon } from './MiscStar.jsx'
import { MiscHeartIcon } from './MiscHeart.jsx'
import { MiscShoppingIcon } from './MiscShopping.jsx'

// Media Query
import { MediaMobile } from '../../../style/media.js'

export const PlatformLinkIcon = {
  // Optune Links
  OPTUNEARTISTPROFILE: ArtistProfileIcon,
  OPTUNEBOOKINGS: GigsIcon,
  OPTUNEREQUESTFORM: RequestFormIcon,
  // Platform Links
  AMAZON: AmazonIcon,
  APPLEMUSIC: AppleMusicIcon,
  BANDCAMP: BandcampIcon,
  FACEBOOK: FacebookIcon,
  INSTAGRAM: InstagramIcon,
  ITUNES: ITunesIcon,
  LASTFM: LastFMIcon,
  MIXCLOUD: MixcloudIcon,
  SOUNDCLOUD: SoundcloudIcon,
  SPOTIFY: SpotifyIcon,
  TUMBLR: TumblrIcon,
  TWITTER: TwitterIcon,
  YOUTUBE: YoutubeIcon,
  VIMEO: VimeoIcon,
  // Miscellaneous Icons
  HEART: MiscHeartIcon,
  NEWSLETTER: NewsletterIcon,
  STAR: MiscStarIcon,
  SHOPPING: MiscShoppingIcon,

  // Content (URL) Links
  ABOUT: AboutIcon,
  BIOGRAPHY: BiographyIcon,
  MAIL: MailIcon,
  PRESSKIT: PressKitIcon,
  TECHRIDER: TechRiderIcon,
}

const ShapeSize = {
  Desktop: {
    S: '3.6rem',
    M: '4.4rem',
    L: '5.2rem',
  },
  Mobile: {
    S: '3.2rem',
    M: '3.6rem',
    L: '4rem',
  },
}

const IconSize = {
  Desktop: {
    S: '1.8rem',
    M: '2.4rem',
    L: '3.0rem',
  },
  Mobile: {
    S: '1.8rem',
    M: '2.2rem',
    L: '2.6rem',
  },
}

const LinkWrapper = styled.a`
  text-decoration: none;
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
`

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: ${({ colorBackground }) => colorBackground};
  border-radius: ${({ circle, square }) => (circle && '50%') || (square && 'none') || '0.4rem'};
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => border / 10}rem;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: ${({ noShadow }) =>
    noShadow
      ? 'none'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)'};
  color: ${({ color }) => color};
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out, color 0.25s ease-out;

  width: ${({ size }) => ShapeSize.Desktop[size]};
  height: ${({ size }) => ShapeSize.Desktop[size]};
  margin: ${({ margin }) => margin || '1rem'};

  @media ${MediaMobile} {
    width: ${({ size }) => ShapeSize.Mobile[size]};
    height: ${({ size }) => ShapeSize.Mobile[size]};
    margin: ${({ margin }) => margin || '0.5rem'};
  }

  &:hover:not(:focus) {
    ${({ notInteractive }) =>
      !notInteractive &&
      css`
        background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent};
        border-color: ${({ colorAccent }) => colorAccent};
        color: ${({ colorAccent }) => colorAccent};

        & .icon g {
          & path,
          line,
          circle,
          polygon,
          polyline,
          rect,
          ellipse {
            fill: ${({ colorAccent }) => colorAccent};
            stroke: ${({ colorAccent }) => colorAccent};

            &[fill='none'] {
              fill: none;
            }

            &[stroke='none'] {
              stroke: none;
            }
          }
        }
      `}
`
const LinkIconMapper = ({ platform, size = 'M' }) => styled(PlatformLinkIcon[platform])`
  width: ${IconSize.Desktop[size]};
  height: ${IconSize.Desktop[size]};

  @media ${MediaMobile} {
    width: ${IconSize.Mobile[size]};
    height: ${IconSize.Mobile[size]};
  }

  &.icon g {
    & path,
    line,
    circle,
    polygon,
    polyline,
    rect,
    ellipse {
      fill: ${({ color }) => color};
      stroke: ${({ color }) => color};
      transition: fill 0.25s ease-out, stroke 0.25 ease-out;

      &[fill='none'] {
        fill: none;
      }

      &[stroke='none'] {
        stroke: none;
      }
    }
  }
`

export const PlatformLink = ({
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  label,
  margin,
  noShadow,
  platform,
  size,
  square,
  url,
}) => {
  const Icon = LinkIconMapper({ platform, size })

  return url > '' ? (
    <LinkWrapper
      href={url}
      title={(label || platform).replace(/\b\w/g, l => l.toUpperCase())}
      target="_blank"
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
        noShadow
        size={size || 'M'}
        square={square}
      >
        <Icon color={color} size={size} />
      </Link>
    </LinkWrapper>
  ) : (
    <Link
      border={border}
      circle={circle}
      color={color}
      colorAccent={colorAccent}
      colorBackground={colorBackground}
      colorBackgroundAccent={colorBackgroundAccent}
      margin={margin}
      noShadow
      size={size || 'M'}
      square={square}
    >
      <Icon color={color} size={size} />
    </Link>
  )
}

export const PlatformLinks = Object.keys(PlatformLinkIcon).map(platform => {
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

export const Links = (links, content) =>
  links.list
    .filter(({ platform, url }) => !!PlatformLinkIcon[platform])
    .map(link => (
      <PlatformLink
        key={link.platform}
        border={links.border}
        circle={links.circle}
        square={links.square}
        size={links.size}
        color={content.color}
        colorAccent={content.colorAccent}
        colorBackground={content.colorBackground}
        colorBackgroundAccent={content.colorBackgroundAccent}
        {...link}
      />
    ))
