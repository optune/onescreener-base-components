/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const WebsiteIcon = toSquidInkIcon(() => (
  <g id="line-arw-rt">
    <polyline
      {...defaultStrokeFill}
      points="
		24,6 42,6 42,24 	"
    />
    <line {...defaultStrokeFill} x1="5.9999971" y1="42" x2="41.4999962" y2="6.5" />
  </g>
))
