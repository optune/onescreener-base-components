/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const PhotosIcon = toSquidInkIcon(() => (
  <g id="cam-2">
    <circle {...defaultStrokeFill} cx="24" cy="25" r="10" />
    <circle {...defaultStrokeFill} cx="24" cy="25" r="5" />
    <path
      {...defaultStrokeFill}
      d="
  M10,16H8c-0.5522847,0-1-0.4477148-1-1v-2c0-0.5522852,0.4477153-1,1-1h2c0.5522852,0,1,0.4477148,1,1v2
  C11,15.5522852,10.5522852,16,10,16z"
    />
    <path
      {...defaultStrokeFill}
      d="
  M41,8h-4l-0.8944283-1.7888546C35.4280052,4.8560095,34.0429535,4,32.5278625,4h-3.055727
  c-1.5150871,0-2.9001408,0.8560095-3.5777092,2.2111454L25,8H7c-2.2091389,0-4,1.7908611-4,4v25c0,2.2091408,1.7908611,4,4,4h34
  c2.2091408,0,4-1.7908592,4-4V12C45,9.7908611,43.2091408,8,41,8z"
    />

    <line {...defaultStrokeFill} x1="3" y1="20" x2="15" y2="20" />
    <line {...defaultStrokeFill} x1="3" y1="30" x2="15" y2="30" />
    <line {...defaultStrokeFill} x1="33" y1="20" x2="45" y2="20" />
    <line {...defaultStrokeFill} x1="33" y1="30" x2="45" y2="30" />
    <line {...defaultStrokeFill} x1="37" y1="14" x2="40" y2="14" />
  </g>
))
