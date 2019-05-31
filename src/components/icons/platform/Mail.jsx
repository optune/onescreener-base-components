import React from 'react'
import { toSquidInkIcon } from '../mixins/toSquidInkIcon.jsx'

export const MailIcon = toSquidInkIcon(() => (
  <g id="mail">
    <path
      fill="none"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M43,42H5c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v29C45,41.1,44.1,42,43,42z"
    />
    <path
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M3,9l18.9,18c1.2,1.1,3,1.1,4.1,0L45,9"
    />
    <line
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      x1="3"
      y1="42"
      x2="21"
      y2="26"
    />
    <line
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      x1="45"
      y1="42"
      x2="27"
      y2="26"
    />
  </g>
))
