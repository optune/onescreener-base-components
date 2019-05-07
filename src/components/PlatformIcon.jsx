/* eslint-disable react/prop-types max-len */
import React from 'react'
import {
  Bio,
  Presskit,
  Instagram,
  Spotify,
  Youtube,
  Facebook,
  Soundcloud,
  Mixcloud,
  Twitter,
} from './icons'

const platforms = {
  bio: Bio,
  presskit: Presskit,
  youtube: Youtube,
  facebook: Facebook,
  soundcloud: Soundcloud,
  spotify: Spotify,
  instagram: Instagram,
  mixcloud: Mixcloud,
  twitter: Twitter,
}

const PlatformIcon = ({ platform }) => {
  if (platform in platforms) {
    const Icon = platforms[platform]
    return <Icon />
  } else {
    return <div />
  }
}

export default PlatformIcon
