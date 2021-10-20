/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const VideoCamIcon = toSquidInkIcon(() => (
//   <g id="video-cam">
//     <circle {...defaultStrokeFill} cx="30" cy="25" r="10" />
//     <circle {...defaultStrokeFill} cx="30" cy="25" r="5" />
//     <path
//       {...defaultStrokeFill}
//       d="
//   M13,18H9c-0.5522852,0-1-0.4477158-1-1v-3c0-0.5522852,0.4477148-1,1-1h4c0.5522852,0,1,0.4477148,1,1v3
//   C14,17.5522842,13.5522852,18,13,18z"
//     />
//     <path
//       {...defaultStrokeFill}
//       d="
//   M41,8h-9l-0.8944263-1.7888546C30.4280052,4.8560095,29.0429516,4,27.5278645,4h-6.0557289
//   c-1.5150871,0-2.9001408,0.8560095-3.5777092,2.2111454L17,8H7c-2.2091389,0-4,1.7908611-4,4v25c0,2.2091408,1.7908611,4,4,4h34
//   c2.2091408,0,4-1.7908592,4-4V12C45,9.7908611,43.2091408,8,41,8z"
//     />
//     <line {...defaultStrokeFill} x1="9" y1="22" x2="13" y2="22" />
//   </g>
// ))

import { CameraVideoFill } from '@styled-icons/bootstrap/CameraVideoFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const VideoCamIcon = toSquidInkIconComponent(CameraVideoFill, 'video-cam', {
  ['no-stroke']: true,
})
