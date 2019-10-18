/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const MiscShoppingIcon = toSquidInkIcon(() => (
  <g id="cart">
    <path
      {...defaultStrokeFill}
      d="M44,17l-3.6212692,14.4850712C40.156147,32.3754044,39.3561821,33,38.438446,33H18.4734097c-0.8762207,0-1.6504154-0.5703545-1.9101276-1.4072018L8,4H3"
    />
    <circle {...defaultStrokeFill} cx="22" cy="41" r="4" />
    <circle {...defaultStrokeFill} cx="37" cy="41" r="4" />

    <line {...defaultStrokeFill} x1="19" y1="21" x2="43" y2="21" />
  </g>
))
