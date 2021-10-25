/* eslint-disable max-len */

import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const BiographyIcon = toSquidInkIcon(() => (
  <g id="leaf">
    <path {...defaultStrokeFill} d="M45,2C21.9721107,7.8791499,6,46,6,46" />
    <path
      {...defaultStrokeFill}
      d="M9,40c0,0-5.1806107-6.5883141-2-16c0,0,0.2217793,6.5537853,2,8c0,0-2.936255-7.1195221,3-14C20.3549213,8.3161421,34.0610886,1.3014609,46,2c0,0-13.8472252,18.5241756-18,25C19.0119514,41.0159378,11.7410355,42.1088982,9,40"
    />
    <path {...defaultStrokeFill} d="M16,28c0,0,6.9070377,1.9907036,11,0" />
    <path {...defaultStrokeFill} d="M18,25c0,0,6.9070377,1.9907036,11,0" />
    <path {...defaultStrokeFill} d="M22,18c0,0-2.4970016-4.1559143-1-8" />
  </g>
))
