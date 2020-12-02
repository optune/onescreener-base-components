/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const DownloadIcon = toSquidInkIcon(() => (
  <g id="cloud-down">
    <polyline
      {...defaultStrokeFill}
      points="
		30.8326931,41.167305 24,48 17.1673069,41.167305 	"
    />
    <line {...defaultStrokeFill} x1="24" y1="48" x2="24" y2="25" />
    <path
      {...defaultStrokeFill}
      d="
		M38.5,20c-0.5806885,0-1.1474609,0.059021-1.6954346,0.1699829C36.923645,19.4628296,37,18.7410278,37,18
		c0-7.1796875-5.8203125-13-13-13s-13,5.8203125-13,13c0,0.7410278,0.076355,1.4628296,0.1954346,2.1699829
		C10.6474609,20.059021,10.0806885,20,9.5,20C4.805603,20,1,23.805542,1,28.5C1,33.194397,4.805603,37,9.5,37
		c4.3571167,0,24.6428833,0,29,0c4.694397,0,8.5-3.805603,8.5-8.5C47,23.805542,43.194397,20,38.5,20z"
    />
  </g>
))
