import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const AlignCenterIcon = toSquidInkIcon(() => (
  <g id="align-c">
    <g id="align-c_1_">
      <rect x="4" y="26" {...defaultStrokeFill} width="40" height="15" />
      <line {...defaultStrokeFill} x1="24" y1="42" x2="24" y2="48" />
      <line {...defaultStrokeFill} x1="24" y1="22" x2="24" y2="25" />
      <line {...defaultStrokeFill} x1="24" y1="0" x2="24" y2="7" />
      <rect x="13" y="7" {...defaultStrokeFill} width="22" height="15" />
    </g>
  </g>
))
