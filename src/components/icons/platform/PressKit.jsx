/* eslint-disable maxLen */

// import React from 'react'
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// export const PressKitIcon = toSquidInkIcon(() => (
//   <g id="jack-2">
//     <path
//       d="M42 46H6C3.79086 46 2 44.2091 2 42V2H35C36.6569 2 38 3.34315 38 5V42C38 44.2091 39.7909 46 42 46H42C44.2091 46 46 44.2091 46 42V3"
//       {...defaultStrokeFill}
//     />
//     <path d="M42 3V42" {...defaultStrokeFill} />
//     <path d="M19 7H7V19H19V7Z" {...defaultStrokeFill} />
//     <path d="M23 7H32" {...defaultStrokeFill} />
//     <path d="M23 11H32" {...defaultStrokeFill} />
//     <path d="M23 15H32" {...defaultStrokeFill} />
//     <path d="M23 19H32" {...defaultStrokeFill} />
//     <path d="M7 25H32" {...defaultStrokeFill} />
//     <path d="M7 29H32" {...defaultStrokeFill} />
//     <path d="M7 33H19" {...defaultStrokeFill} />
//     <path d="M7 37H19" {...defaultStrokeFill} />
//     <path d="M7 41H19" {...defaultStrokeFill} />
//     <path d="M32 33H23V41H32V33Z" {...defaultStrokeFill} />
//   </g>
// ))

import { PenFill } from '@styled-icons/bootstrap/PenFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const PressKitIcon = toSquidInkIconComponent(PenFill, 'jack-2', {
  ['no-stroke']: true,
})
