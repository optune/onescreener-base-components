/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const FilmRollIcon = toSquidInkIcon(() => (
//   <g id="film-roll">
//     <path
//       {...defaultStrokeFill}
//       d="
// 		M21.0000019,11H3.9999981C2.8954296,11,2,10.1045704,2,9.0000019V8.9999981C2,7.8954296,2.8954296,7,3.9999981,7h17.0000038
// 		C22.1045704,7,23,7.8954296,23,8.9999981v0.0000038C23,10.1045704,22.1045704,11,21.0000019,11z"
//     />
//     <path
//       {...defaultStrokeFill}
//       d="
// 		M21.0000019,41H3.9999981C2.8954296,41,2,40.1045723,2,39.0000038v-0.0000076C2,37.8954277,2.8954296,37,3.9999981,37h17.0000038
// 		C22.1045704,37,23,37.8954277,23,38.9999962v0.0000076C23,40.1045723,22.1045704,41,21.0000019,41z"
//     />

//     <line {...defaultStrokeFill} x1="4" y1="36" x2="4" y2="12" />
//     <line {...defaultStrokeFill} x1="21" y1="12" x2="21" y2="36" />
//     <path
//       {...defaultStrokeFill}
//       d="M46,25v-9c0-1.1045694-0.8954315-2-2-2H21v20h16C37,29.029438,41.029438,25,46,25z"
//     />
//     <line {...defaultStrokeFill} x1="25" y1="18" x2="27" y2="18" />
//     <line {...defaultStrokeFill} x1="31" y1="18" x2="33" y2="18" />
//     <line {...defaultStrokeFill} x1="25" y1="30" x2="27" y2="30" />
//     <line {...defaultStrokeFill} x1="31" y1="30" x2="33" y2="30" />
//     <line {...defaultStrokeFill} x1="37" y1="18" x2="39" y2="18" />
//     <line {...defaultStrokeFill} x1="8" y1="14" x2="8" y2="26" />
//   </g>
// ))

import { Film } from '@styled-icons/bootstrap/Film'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const FilmRollIcon = toSquidInkIconComponent(Film, 'film-roll', {
  ['no-stroke']: true,
})
