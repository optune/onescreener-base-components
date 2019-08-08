import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const AlignRightIcon = toSquidInkIcon(() => (
  <g id="align-r">
    <g id="align-r_1_">
      <line {...defaultStrokeFill} x1="45" y1="0" x2="45" y2="48" />
      <rect x="3" y="26" {...defaultStrokeFill} width="39" height="15" />
      <rect x="20" y="7" {...defaultStrokeFill} width="22" height="15" />
    </g>
  </g>
))
