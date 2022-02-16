// React
import React from 'react'

import { defaultStrokeFill, toSquidInkIcon } from '../mixins/toSquidInkIcon'

// Teaser link - Physical shop
export const MovieIcon = toSquidInkIcon(
  () => (
    <g id="movie">
      <path
        {...defaultStrokeFill}
        d="
		M42,42H6c-1.6568542,0-3-1.3431473-3-3V9c0-1.6568542,1.3431458-3,3-3h36c1.6568527,0,3,1.3431458,3,3v30
		C45,40.6568527,43.6568527,42,42,42z"
      />

      <line {...defaultStrokeFill} x1="3" y1="12" x2="45" y2="12" />

      <line {...defaultStrokeFill} x1="3" y1="36" x2="45" y2="36" />

      <polygon
        {...defaultStrokeFill}
        points="
		21,18 29,24 21,30 	"
      />

      <line {...defaultStrokeFill} x1="11" y1="6" x2="11" y2="12" />

      <line {...defaultStrokeFill} x1="11" y1="36" x2="11" y2="42" />

      <line {...defaultStrokeFill} x1="19" y1="6" x2="19" y2="12" />

      <line {...defaultStrokeFill} x1="19" y1="36" x2="19" y2="42" />

      <line {...defaultStrokeFill} x1="28" y1="6" x2="28" y2="12" />

      <line {...defaultStrokeFill} x1="28" y1="36" x2="28" y2="42" />

      <line {...defaultStrokeFill} x1="36" y1="6" x2="36" y2="12" />

      <line {...defaultStrokeFill} x1="36" y1="36" x2="36" y2="42" />
    </g>
  ),
  '0 0 48 48'
)
