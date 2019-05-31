/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import {
  ColorHarlequin,
  ColorHaiti,
  ColorWhite,
} from '@optune/react-base-components'

import { BandcampIcon } from './Bandcamp.js'
import { BiographyIcon } from './Biography.js'
import { FacebookIcon } from './Facebook.js'
import { InstagramIcon } from './Instagram.js'
import { LastFMIcon } from './LastFM.js'
import { MailIcon } from './Mail.js'
import { MixcloudIcon } from './Mixcloud.js'
import { OptuneIcon } from './Optune.js'
import { SoundcloudIcon } from './Soundcloud.js'
import { SpotifyIcon } from './Spotify.js'
import { TechRiderIcon } from './TechRider.js'
import { TumblrIcon } from './Tumblr.js'
import { TwitterIcon } from './Twitter.js'
import { YoutubeIcon } from './Youtube.js'

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
  margin: 10px;
  padding: 0px;
  width: 42px;
  height: 42px;
  background-color: ${({ active }) => (active ? ColorHarlequin : ColorHaiti)};
  border-radius: 6px;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
`
const LinkIcon = ({ platform }) => styled(PlatformIcon[platform])`
  width: 28px;
  height: 28px;

  &.icon g {
    & path,
    line,
    circle,
    polygon,
    polyline,
    rect,
    ellipse {
      fill: ${({ color }) => color || ColorWhite};
      stroke: ${({ color }) => color || ColorWhite};

      &[fill='none'] {
        fill: none;
      }

      &[stroke='none'] {
        stroke: none;
      }
    }
  }
`

export const PlatformLink = ({ url, platform, color, active }) => {
  const Icon = LinkIcon({ platform })
  return (
    <a href={url}>
      <Link active={active}>
        <Icon color={color} />
      </Link>
    </a>
  )
}

export const PlatformLinks = Object.keys(PlatformIcon).map(platform => {
  const Icon = LinkIcon({ platform })
  const PlatformLinkIcon = ({ active, color, onClick }) => (
    <a onClick={onClick}>
      <Link active={active}>
        <Icon color={color} />
      </Link>
    </a>
  )

  return {
    platform,
    PlatformLinkIcon,
  }
})

export const Links = links =>
  links
    .filter(({ platform, url }) => !!PlatformIcon[platform] && url > '')
    .map(link => <PlatformLink {...link} key={link.platform} />)
