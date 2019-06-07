/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

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

export const PlatformIcon = {
  BANDCAMP: BandcampIcon,
  BIOGRAPHY: BiographyIcon,
  FACEBOOK: FacebookIcon,
  INSTAGRAM: InstagramIcon,
  LASTFM: LastFMIcon,
  MAIL: MailIcon,
  MIXCLOUD: MixcloudIcon,
  OPTUNE: OptuneIcon,
  SOUNDCLOUD: SoundcloudIcon,
  SPOTIFY: SpotifyIcon,
  TECHRIDER: TechRiderIcon,
  TUMBLR: TumblrIcon,
  TWITTER: TwitterIcon,
  YOUTUBE: YoutubeIcon,
}

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem;
  padding: 0px;
  width: 3rem;
  height: 3rem;
  background-color: ${({ colorBackground }) => colorBackground};
  border-radius: ${({ circle, square }) =>
    (circle && '50%') || (square && 'none') || '0.4rem'};
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => (border / 10)}rem;
  border-style: solid;
  box-sizing: border-box;
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out;

  &:hover {
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
const LinkIcon = ({ platform }) => styled(PlatformIcon[platform])`
  width: 1.9rem;
  height: 1.9rem;

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
  platform,
  square,
  url,
}) => {
  const Icon = LinkIcon({ platform })
  return (
    <a href={url}>
      <Link
        border={border}
        circle={circle}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        square={square}
      >
        <Icon color={color} />
      </Link>
    </a>
  )
}

export const PlatformLinks = Object.keys(PlatformIcon).map(platform => {
  const Icon = LinkIcon({ platform })
  const PlatformLinkIcon = ({ color, onClick }) => (
    <a onClick={onClick}>
      <Link>
        <Icon color={color} />
      </Link>
    </a>
  )

  return {
    platform,
    PlatformLinkIcon,
  }
})

export const Links = (links, content) =>
  links.list
    .filter(({ platform, url }) => !!PlatformIcon[platform] && url > '')
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
