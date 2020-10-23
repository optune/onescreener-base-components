/* eslint-disable react/prop-types */
import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const NewsletterFormIcon = toSquidInkIcon(() => (
  <g id="send">
    <polygon
      {...defaultStrokeFill}
      points="2.0728254,23.4126778 45.2285919,2.0714767 40.8341217,40.7538757     "
    />

    <polyline
      {...defaultStrokeFill}
      points="27.2659264,34.884285 19.8745785,47 20,31 45.2150307,2.0744658     "
    />
  </g>
))
