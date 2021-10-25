/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const MediaKitIcon = toSquidInkIcon(() => (
  <g id="visual-graph">
    <line {...defaultStrokeFill} x1="8" y1="40" x2="16" y2="40" />
    <line {...defaultStrokeFill} x1="8" y1="36" x2="16" y2="36" />
    <line {...defaultStrokeFill} x1="8" y1="32" x2="16" y2="32" />
    <line {...defaultStrokeFill} x1="8" y1="28" x2="16" y2="28" />
    <line {...defaultStrokeFill} x1="8" y1="24" x2="16" y2="24" />
    <line {...defaultStrokeFill} x1="20" y1="40" x2="28" y2="40" />
    <line {...defaultStrokeFill} x1="20" y1="36" x2="28" y2="36" />
    <line {...defaultStrokeFill} x1="20" y1="32" x2="28" y2="32" />
    <line {...defaultStrokeFill} x1="20" y1="28" x2="28" y2="28" />
    <line {...defaultStrokeFill} x1="20" y1="24" x2="28" y2="24" />
    <line {...defaultStrokeFill} x1="20" y1="20" x2="28" y2="20" />
    <line {...defaultStrokeFill} x1="20" y1="16" x2="28" y2="16" />
    <line {...defaultStrokeFill} x1="20" y1="12" x2="28" y2="12" />
    <line {...defaultStrokeFill} x1="32" y1="40" x2="40" y2="40" />
    <line {...defaultStrokeFill} x1="32" y1="36" x2="40" y2="36" />
    <line {...defaultStrokeFill} x1="32" y1="32" x2="40" y2="32" />
    <path
      {...defaultStrokeFill}
      d="M44,45H4
		c-1.1045694,0-2-0.8954315-2-2V5c0-1.1045694,0.8954306-2,2-2h40c1.1045685,0,2,0.8954306,2,2v38
		C46,44.1045685,45.1045685,45,44,45z"
    />
  </g>
))
