/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import { AboutIcon } from './About.jsx'
import { ArtistProfileIcon } from './ArtistProfile.jsx'
import { RequestFormIcon } from './RequestForm.jsx'
import { PressKitIcon } from './PressKit.jsx'
import { GigsIcon } from './Gigs.jsx'
import { BandcampIcon } from './Bandcamp.jsx'
import { BiographyIcon } from './Biography.jsx'
import { FacebookIcon } from './Facebook.jsx'
import { InstagramIcon } from './Instagram.jsx'
import { LastFMIcon } from './LastFM.jsx'
import { MailIcon } from './Mail.jsx'
import { MixcloudIcon } from './Mixcloud.jsx'
import { OptuneIcon } from './Optune.jsx'
import { SoundcloudIcon } from './Soundcloud.jsx'
import { SpotifyIcon } from './Spotify.jsx'
import { TechRiderIcon } from './TechRider.jsx'
import { TumblrIcon } from './Tumblr.jsx'
import { TwitterIcon } from './Twitter.jsx'
import { YoutubeIcon } from './Youtube.jsx'

import { MediaMobile } from '../../../style/media'

export const PlatformLinkIcon = {
  // Optune Links
  OPTUNEARTISTPROFILE: ArtistProfileIcon,
  OPTUNEBOOKINGS: GigsIcon,
  OPTUNEREQUESTFORM: RequestFormIcon,
  // Platform Links
  BANDCAMP: BandcampIcon,
  FACEBOOK: FacebookIcon,
  INSTAGRAM: InstagramIcon,
  LASTFM: LastFMIcon,
  MIXCLOUD: MixcloudIcon,
  SOUNDCLOUD: SoundcloudIcon,
  SPOTIFY: SpotifyIcon,
  TUMBLR: TumblrIcon,
  TWITTER: TwitterIcon,
  YOUTUBE: YoutubeIcon,
  // Content (URL) Links
  ABOUT: AboutIcon,
  BIOGRAPHY: BiographyIcon,
  MAIL: MailIcon,
  PRESSKIT: PressKitIcon,
  TECHRIDER: TechRiderIcon,
}

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: ${({ colorBackground }) => colorBackground};
  border-radius: ${({ circle, square }) =>
    (circle && '50%') || (square && 'none') || '0.4rem'};
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => border / 10}rem;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: ${({ noShadow }) =>
    noShadow
      ? 'none'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)'};
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out;

  width: 3.6rem;
  height: 3.6rem;
  margin: 1rem;

  @media ${MediaMobile} {
    width: 4rem;
    height: 4rem;
    margin: 0.8rem;
  }

  &:hover:not(:focus) {
    background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent};
    border-color: ${({ colorAccent }) => colorAccent};

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
  }
`
const LinkIconMapper = ({ platform }) => styled(PlatformLinkIcon[platform])`
  width: 2rem;
  height: 2rem;

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
  noShadow,
  platform,
  square,
  url,
}) => {
  const Icon = LinkIconMapper({ platform })
  return (
    <a
      href={url}
      title={(label || platform).replace(/\b\w/g, l => l.toUpperCase())}
    >
      <Link
        border={border}
        circle={circle}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        noShadow
        square={square}
      >
        <Icon color={color} />
      </Link>
    </a>
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
    onClick,
  }) => (
    <a onClick={onClick}>
      <Link
        border={border}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
      >
        <Icon color={color} />
      </Link>
    </a>
  )

  return {
    platform,
    LinkIcon,
  }
})

export const Links = (links, content) =>
  links.list
    .filter(({ platform, url }) => !!PlatformLinkIcon[platform] && url > '')
    .map(link => (
      <PlatformLink
        key={link.platform}
        border={links.border}
        circle={links.circle}
        square={links.square}
        {...link}
        {...content}
      />
    ))
