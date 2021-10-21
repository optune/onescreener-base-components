/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const HelpIcon = toSquidInkIcon(() => (
//   <g id="lifeguard">
//     <circle {...defaultStrokeFill} cx="24" cy="24" r="21" />
//     <circle {...defaultStrokeFill} cx="24" cy="24" r="10" />
//     <line {...defaultStrokeFill} x1="19" y1="4" x2="19" y2="15" />
//     <line {...defaultStrokeFill} x1="29" y1="4" x2="29" y2="15" />
//     <line {...defaultStrokeFill} x1="19" y1="33" x2="19" y2="44" />
//     <line {...defaultStrokeFill} x1="29" y1="33" x2="29" y2="44" />
//     <line {...defaultStrokeFill} x1="19" y1="4" x2="19" y2="15" />
//     <line {...defaultStrokeFill} x1="29" y1="4" x2="29" y2="15" />
//     <line {...defaultStrokeFill} x1="19" y1="33" x2="19" y2="44" />
//     <line {...defaultStrokeFill} x1="29" y1="33" x2="29" y2="44" />
//     <line {...defaultStrokeFill} x1="44" y1="19" x2="33" y2="19" />
//     <line {...defaultStrokeFill} x1="44" y1="29" x2="33" y2="29" />
//     <line {...defaultStrokeFill} x1="15" y1="19" x2="4" y2="19" />
//     <line {...defaultStrokeFill} x1="15" y1="29" x2="4" y2="29" />
//     <line {...defaultStrokeFill} x1="44" y1="19" x2="33" y2="19" />
//     <line {...defaultStrokeFill} x1="44" y1="29" x2="33" y2="29" />
//     <line {...defaultStrokeFill} x1="15" y1="19" x2="4" y2="19" />
//     <line {...defaultStrokeFill} x1="15" y1="29" x2="4" y2="29" />
//   </g>
// ))

import { PatchQuestion } from '@styled-icons/bootstrap/PatchQuestion'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const HelpIcon = toSquidInkIconComponent(PatchQuestion, 'lifeguard', {
  ['no-stroke']: true,
})
