import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const AlignLeftIcon = toSquidInkIcon(() => (
  <g id="align-l_1_">
    <g id="align-l">
      <line {...defaultStrokeFill} x1="3" y1="0" x2="3" y2="48" />
      <rect x="6" y="7" {...defaultStrokeFill} width="22" height="15" />
      <rect x="6" y="26" {...defaultStrokeFill} width="39" height="15" />
    </g>
  </g>
))
