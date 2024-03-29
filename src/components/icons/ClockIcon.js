// React
import React from 'react'

import { defaultStrokeFill, toSquidInkIcon } from './mixins/toSquidInkIcon'

export const RoundClockIcon = toSquidInkIcon(
  () => (
    <g id="round-clock">
      <line {...defaultStrokeFill} strokeWidth={3} x1="24" y1="3" x2="24" y2="8" />

      <line {...defaultStrokeFill} strokeWidth={3} x1="24" y1="40" x2="24" y2="45" />
      <polyline
        {...defaultStrokeFill}
        strokeWidth={3}
        points="18,19 24,25 
		34,15 	"
      />
      <circle {...defaultStrokeFill} strokeWidth={3} cx="24" cy="24" r="21.5" />

      <line {...defaultStrokeFill} strokeWidth={3} x1="45" y1="24" x2="40" y2="24" />

      <line {...defaultStrokeFill} strokeWidth={3} x1="8" y1="24" x2="3" y2="24" />
    </g>
  ),
  '0 0 48 48'
)
