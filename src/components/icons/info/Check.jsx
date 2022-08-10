import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon'

export const CheckIcon = toSquidInkIcon(() => (
  <g id="check">
    <polyline {...defaultStrokeFill} points="8,26 18,36 40,12" />
  </g>
))
