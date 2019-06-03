/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import { white, poison, black } from '../../../style/colors'

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
  background-color: ${({ active }) => (active ? poison : black)};
  border-radius: 0.4rem;
  border-color: ${({ color }) => color || white};
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
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
      fill: ${({ color }) => color || white};
      stroke: ${({ color }) => color || white};

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
      <Link active={active} color={color}>
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

export const Links = (links, color) =>
  links
    .filter(({ platform, url }) => !!PlatformIcon[platform] && url > '')
    .map(link => <PlatformLink {...link} key={link.platform} color={color} />)