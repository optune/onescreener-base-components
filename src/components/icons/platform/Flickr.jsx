/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const FlickrIcon = toSquidInkIcon(() => (
  <g id="flickr">
    <circle {...defaultStrokeFill} cx="11.8544006" cy="24.1992188" r="9.0941143" />

    <circle f {...defaultStrokeFill} cx="36.3222351" cy="24.1992188" r="9.0941143" />
  </g>
))
