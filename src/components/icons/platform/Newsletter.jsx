import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const NewsletterIcon = toSquidInkIcon(() => (
  <g id="about">
    <path
      d="M9 3.00173H40C40 3.00173 45 2.7595 45 8.00173C45 13.8044 44.3106 40.5235 40 44.0017C33.0062 44.2502 9 44.0017 9 44.0017C12.8199 35.244 13.9572 17.4642 14 8.50173C14.0145 5.4642 11.5376 3.00173 8.5 3.00173C5.46243 3.00173 3 5.46417 3 8.50173L13 9.00173"
      {...defaultStrokeFill}
    />
    <path d="M20 14.0017H30" {...defaultStrokeFill} />
    <path d="M20 20.0017H39" {...defaultStrokeFill} />
    <path d="M19 26.0017H38" {...defaultStrokeFill} />
    <path d="M18 32.0017H37" {...defaultStrokeFill} />
  </g>
))
