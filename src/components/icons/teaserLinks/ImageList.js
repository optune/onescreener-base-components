// React
import React from 'react'

import { defaultStrokeFill, toSquidInkIcon } from '../mixins/toSquidInkIcon'

// Teaser link - Optune book me
export const ImageListIcon = toSquidInkIcon(
  () => (
    <g id="image-list">
      <path
        {...defaultStrokeFill}
        d="
			M40,45H7c-1.6568542,0-3-1.3431473-3-3V6c0-1.6568542,1.3431458-3,3-3h33c1.6568527,0,3,1.3431458,3,3v36
			C43,43.6568527,41.6568527,45,40,45z"
      />

      <rect x="10" y="10" {...defaultStrokeFill} width="8" height="6" />

      <line {...defaultStrokeFill} x1="24" y1="11" x2="37" y2="11" />

      <line {...defaultStrokeFill} x1="24" y1="15" x2="37" y2="15" />

      <rect x="10" y="21" {...defaultStrokeFill} width="8" height="6" />

      <line {...defaultStrokeFill} x1="24" y1="22" x2="37" y2="22" />

      <line {...defaultStrokeFill} x1="24" y1="26" x2="37" y2="26" />

      <rect x="10" y="32" {...defaultStrokeFill} width="8" height="6" />

      <line {...defaultStrokeFill} x1="24" y1="33" x2="37" y2="33" />

      <line {...defaultStrokeFill} x1="24" y1="37" x2="37" y2="37" />
    </g>
  ),
  '0 0 48 48'
)
