// React
import React from 'react'

import { defaultStrokeFill, toSquidInkIcon } from '../mixins/toSquidInkIcon'

// Teaser link - Video
export const PlayerIcon = toSquidInkIcon(
  () => (
    <g id="player">
      <path
        {...defaultStrokeFill}
        d="
		M42,42H6c-1.6568542,0-3-1.3431473-3-3V9c0-1.6568542,1.3431458-3,3-3h36c1.6568527,0,3,1.3431458,3,3v30
		C45,40.6568527,43.6568527,42,42,42z"
      />

      <polygon
        {...defaultStrokeFill}
        points="
		21,16.5 31,24 21,31.5 	"
      />
    </g>
  ),
  '0 0 48 48'
)
