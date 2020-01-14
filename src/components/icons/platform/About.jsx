import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

export const AboutIcon = toSquidInkIcon(
  () => (
    <g id="notify">
      <path
        {...defaultStrokeFill}
        d="M23.7922153,32h-1l-1.7834263-14.7715702C20.8923397,16.0302334,21.947998,15,23.2922115,15h0.0000057c1.3442135,0,2.3998718,1.0302334,2.2834244,2.2284298L23.7922153,32z"
      />
      <circle {...defaultStrokeFill} cx="23" cy="38" r="2" />
    </g>
  ),
  '7 8 33 40'
)
