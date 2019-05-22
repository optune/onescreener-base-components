/* eslint-disable react/prop-types */
import React from 'react'

import PlatformIcon from '../../components/PlatformIcon.jsx'
import IconWrapper from '../../components/PlatformIconWrapper.jsx'
import SocialLink from '../../components/SocialLink.jsx'

import social from './index.js'

const LinkMapper = ({ href, ...props }) => (
  <SocialLink href={href}>
    <IconWrapper>
      <PlatformIcon {...props} />
    </IconWrapper>
  </SocialLink>
)

const array = a => (Array.isArray(a) ? a : [])
const linkGenerator = links =>
  array(links)
    .filter(
      ({ platform, slug }) => Object.keys(social).includes(platform) && slug
    )
    .map(({ platform, slug }, i) => (
      <LinkMapper key={i} platform={platform} href={social[platform](slug)} />
    ))
    .reduce((a, c) => [...a, c], [])

export default linkGenerator
