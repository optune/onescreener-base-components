// React
import React from 'react'

import { defaultStrokeFill, toSquidInkIcon } from '../mixins/toSquidInkIcon'

// Teaser link - Physical shop
export const ImageFileIcon = toSquidInkIcon(
  () => (
    <g id="image-file">
      <path
        {...defaultStrokeFill}
        d="
		M6,4c0-1.1045694,0.8954306-2,2-2h22.0000134L42,14v30c0,1.1045685-0.8954315,2-2,2H8c-1.1045694,0-2-0.8954315-2-2V4z"
      />

      <polyline
        {...defaultStrokeFill}
        points="
		30,3 30,14 42,14 	"
      />

      <polyline
        {...defaultStrokeFill}
        points="
		6,42 18.8571434,30.1000004 26,35 35.5714302,25 42,30.1000004 	"
      />

      <circle {...defaultStrokeFill} cx="18.5" cy="20.5" r="4.5" />
    </g>
  ),
  '0 0 48 48'
)
