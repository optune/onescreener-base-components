// import React from 'react'
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// export const PodcastIcon = toSquidInkIcon(() => (
//   <g id="podcast">
//     <circle {...defaultStrokeFill} cx="24" cy="18" r="5" />
//     <path
//       {...defaultStrokeFill}
//       d="M32,31c0,4.4182777-3.5817223,15-8,15s-8-10.5817223-8-15s3.5817223-8,8-8S32,26.5817223,32,31z"
//     />
//     <path
//       {...defaultStrokeFill}
//       d="M11.2720776,12.2720776C14.5294371,9.014719,19.029438,7,24,7s9.470562,2.014719,12.7279205,5.2720776"
//     />
//     <path
//       {...defaultStrokeFill}
//       d="M8.0311718,9.0311718C12.1179514,4.9443922,17.7637844,2.4166667,24,2.4166667s11.8820496,2.5277255,15.9688263,6.6145048"
//     />
//   </g>
// ))

import { Podcast } from '@styled-icons/fa-solid/Podcast'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const PodcastIcon = toSquidInkIconComponent(Podcast, 'podcast')
