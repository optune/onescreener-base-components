import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const PatreonIcon = toSquidInkIcon(
  () => (
    <g id="patreon">
      <path
        d="M26.4755 13.3423V13.3424C26.4755 17.4161 23.1748 20.7273 19.1237 20.7273C15.0575 20.7273 11.7471 17.4144 11.7471 13.3424C11.7471 9.25533 15.0592 5.93337 19.124 5.93337C23.1734 5.93337 26.4759 9.25353 26.4755 13.3423ZM8.21751 5.93337V26.0667H5.52285V5.93337H8.21751Z"
        {...defaultStrokeFill}
      />
    </g>
  ),
  '0  0 28  28'
)
