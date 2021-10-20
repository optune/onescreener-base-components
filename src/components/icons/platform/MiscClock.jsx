/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const MiscClockIcon = toSquidInkIcon(() => (
//   <g id="clock">
//     <circle {...defaultStrokeFill} cx="24" cy="24" r="22.5" />
//     <text transform="matrix(1 0 0 1 22 12)" fontFamily="'GothamRounded-Bold'" fontSize="10">
//       1
//     </text>
//     <text transform="matrix(1 0 0 1 37 28)" fontFamily="'GothamRounded-Bold'" fontSize="10">
//       3
//     </text>
//     <text transform="matrix(1 0 0 1 4 27)" fontFamily="'GothamRounded-Bold'" fontSize="10">
//       9
//     </text>
//     <text transform="matrix(1 0 0 1 21 43)" fontFamily="'GothamRounded-Bold'" fontSize="10">
//       6
//     </text>
//     <polyline {...defaultStrokeFill} points="15,15 24,24 36,12" />
//     <circle {...defaultStrokeFill} cx="24" cy="24" r="2" />
//   </g>
// ))

import { ClockFill } from '@styled-icons/bootstrap/ClockFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscClockIcon = toSquidInkIconComponent(ClockFill, 'clock', {
  ['no-stroke']: true,
})
