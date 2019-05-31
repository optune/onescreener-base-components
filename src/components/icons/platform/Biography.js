/* eslint-disable max-len */

import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.js'

export const BiographyIcon = toSquidInkIcon(() => (
  <g id="Layer_1">
    <path
      {...defaultStrokeFill}
      d="M36,46H11c-3.865993,0-7-3.1340065-7-7V6.5202589C4,4.0237889,6.0237889,2,8.5202589,2H12"
    />
    <path
      {...defaultStrokeFill}
      d="M30,2H8.4999952C6.0147166,2,4,4.0147166,4,6.4999957v0.0000086C4,8.9852839,6.0147166,11,8.4999952,11H30"
    />

    <line {...defaultStrokeFill} x1="9" y1="5" x2="30" y2="5" />
    <line {...defaultStrokeFill} x1="9" y1="8" x2="30" y2="8" />
    <line {...defaultStrokeFill} x1="9" y1="11" x2="9" y2="45" />

    <g>
      <rect
        x="34"
        y="9.3431454"
        {...defaultStrokeFill}
        width="12"
        height="26.3137093"
      />

      <line
        {...defaultStrokeFill}
        x1="38"
        y1="35.6568565"
        x2="38"
        y2="9.3431463"
      />
      <line
        {...defaultStrokeFill}
        x1="42"
        y1="35.6568565"
        x2="42"
        y2="9.3431463"
      />

      <path
        {...defaultStrokeFill}
        d="M34,9.3431463V4.8710966c0-1.9484332,1.5795174-3.5279503,3.5279503-3.5279503h4.9440994C44.4204826,1.3431462,46,2.9226635,46,4.8710966v4.4720497"
      />

      <polyline
        {...defaultStrokeFill}
        points="34,35.6568565 40,46.6568565 46,35.6568565     "
      />

      <line {...defaultStrokeFill} x1="37" y1="41" x2="43" y2="41" />
    </g>

    <polyline {...defaultStrokeFill} points="29,18 18,18 18,29 29,29   " />
  </g>
))
