/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const CompanyIcon = toSquidInkIcon(() => (
//   <g id="home">
//     <line {...defaultStrokeFill} x1="6" y1="20" x2="6" y2="42" />
//     <line {...defaultStrokeFill} x1="16" y1="20" x2="16" y2="42" />
//     <path
//       {...defaultStrokeFill}
//       d="
//       M27,21c0,0,0,2.5,0,6.5c0,7.7431984,5,12.5,5,12.5"
//     />
//     <line {...defaultStrokeFill} x1="32" y1="20" x2="32" y2="42" />
//     <line {...defaultStrokeFill} x1="42" y1="20" x2="42" y2="41" />
//     <line {...defaultStrokeFill} x1="3" y1="42" x2="44" y2="42" />
//     <line {...defaultStrokeFill} x1="48" y1="46" x2="0" y2="46" />
//     <g>
//       <rect x="2" y="16" {...defaultStrokeFill} width="44" height="4" />
//     </g>
//     <polygon
//       {...defaultStrokeFill}
//       points="
//       43,16 5,16 24,2.9033 	"
//     />
//     <line {...defaultStrokeFill} x1="24" y1="3" x2="24" y2="3" />
//     <line {...defaultStrokeFill} x1="24" y1="9" x2="24" y2="12" />
//     <line {...defaultStrokeFill} x1="27" y1="11" x2="27" y2="12" />
//     <line {...defaultStrokeFill} x1="30" y1="12" x2="30" y2="12" />
//     <line {...defaultStrokeFill} x1="18" y1="12" x2="18" y2="12" />
//     <line {...defaultStrokeFill} x1="21" y1="11" x2="21" y2="12" />
//     <polyline
//       {...defaultStrokeFill}
//       points="
//       16,27 24,27 32,27 	"
//     />
//     <path {...defaultStrokeFill} d="M21,21c0,0,0,2.5,0,6.5c0,7.7431984-5,12.5-5,12.5" />
//   </g>
// ))

import { Building } from '@styled-icons/bootstrap/Building'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const CompanyIcon = toSquidInkIconComponent(Building, 'home', {
  ['no-stroke']: true,
})
