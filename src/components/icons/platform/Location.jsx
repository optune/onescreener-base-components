/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const LocationIcon = toSquidInkIcon(() => (
  <g id="location">
    <path
      {...defaultStrokeFill}
      d="
		M38.5,16.6617641C38.5,27.75,23.9375,41.25,24,46c0-4.75-14.5-18.1966915-14.5-29.3382359c0-8.0081282,6.4918709-14.5,14.5-14.5
		S38.5,8.653636,38.5,16.6617641z"
    />

    <circle {...defaultStrokeFill} cx="24" cy="17" r="5.5" />
  </g>
))
