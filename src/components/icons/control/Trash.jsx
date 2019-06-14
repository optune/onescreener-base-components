import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const TrashIcon = toSquidInkIcon(() => (
  <g id="trash">
    <line
      fill="none"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="24"
      y1="14"
      x2="24"
      y2="40"
    />

    <line
      fill="none"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="16"
      y1="14"
      x2="18"
      y2="40"
    />

    <line
      fill="none"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="32"
      y1="14"
      x2="30"
      y2="40"
    />
    <path
      fill="none"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M40,8l-3.7,35.3c-0.2,1.5-1.4,2.7-3,2.7H14.7c-1.5,0-2.8-1.2-3-2.7L8,8"
    />

    <line
      fill="none"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="6"
      y1="8"
      x2="42"
      y2="8"
    />
    <path
      fill="none"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M16,7V5c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v2"
    />
  </g>
))
