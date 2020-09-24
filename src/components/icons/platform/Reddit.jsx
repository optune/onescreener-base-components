import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const RedditIcon = toSquidInkIcon(() => (
  <g id="reddit">
    <ellipse {...defaultStrokeFill} cx="24" cy="28" rx="20" ry="14" />
    <path
      {...defaultStrokeFill}
      d="
			M24,13c0,0-0.166666-10.5,10-6"
    />

    <circle {...defaultStrokeFill} cx="39" cy="9" r="5" />
    <path
      {...defaultStrokeFill}
      d="
			M3.799078,24.8411064c-2.1213846-1.7678204-2.4080048-4.9206448-0.6401844-7.0420284s4.9206438-2.4080048,7.0420284-0.6401844"
    />
    <path
      {...defaultStrokeFill}
      d="
			M37.9304008,17.0772038c2.1494102-1.7336378,5.2972412-1.3965874,7.03088,0.7528229
			c1.7336349,2.1494083,1.3965874,5.2972412-0.7528229,7.0308781"
    />

    <circle {...defaultStrokeFill} cx="16" cy="25" r="2" />

    <circle {...defaultStrokeFill} cx="31" cy="25" r="2" />
    <path
      {...defaultStrokeFill}
      d="
			M16,32c0,0,7.833334,6.3333321,15,0"
    />
  </g>
))
