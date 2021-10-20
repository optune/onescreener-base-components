/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

import { Itunes } from '@styled-icons/fa-brands/Itunes'

export const ITunesIcon = toSquidInkIconComponent(Itunes, 'itunes', {
  ['no-stroke']: true,
})

// export const ITunesIcon = toSquidInkIcon(() => (
//   <g id="itunes">
//     <path
//       id="iTunes"
//       {...defaultStrokeFill}
//       d="M36.4579773,36.378624c0.2548485,3.3756485-2.2786484,6.4488258-5.6631145,6.8703384c-3.3791752,0.418869-6.3350716-1.9752998-6.5881557-5.3509483c-0.2583752-3.3712349,2.2839413-6.4488239,5.6631145-6.8668098c1.0696621-0.1313915,2.0925846,0.0158749,3.00704,0.3871231V14.8443289l-15.872942,2.9523668v20.7053719h-0.0308647c0.0070534,0.0582008,0.022047,0.1119919,0.022047,0.1701927c0.2566128,3.3756485-2.2786493,6.4452972-5.6578236,6.8668137c-3.3862281,0.418869-6.3315411-1.9761772-6.5881538-5.3474197c-0.2601404-3.3756447,2.2751236-6.4514732,5.6578226-6.8668098c1.0696611-0.1358032,2.0925846,0.015873,3.007041,0.3906517V9.8487616V9.8443527l23.027235-3.9329615l0.022049-0.0079374V5.906981l0.0088196-0.0035272l-0.0088196,0.1049376v30.2026863h-0.0308685C36.4429817,36.2701607,36.4535637,36.3195419,36.4579773,36.378624z"
//     />
//   </g>
// ))
