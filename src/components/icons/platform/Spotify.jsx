/* eslint-disable max-len, react/display-name, react/prop-types */

// // React
// import React from 'react'
// import { toSquidInkIcon } from '../mixins/toSquidInkIcon.jsx'

// export const SpotifyIcon = toSquidInkIcon(() => (
//   <g id="spotify">
//     <path
//       fill="none"
//       strokeWidth="2"
//       strokeMiterlimit="10"
//       strokeLinejoin="round"
//       d="M24,2C11.8,2,2,11.8,2,24c0,12.2,9.8,22,22,22c12.2,0,22-9.8,22-22C46,11.8,36.2,2,24,2z M34.1,33.7
// 		c-0.4,0.6-1.2,0.9-1.9,0.5C27,31,20.5,30.3,12.9,32.1c-0.7,0.2-1.5-0.3-1.6-1c-0.2-0.7,0.3-1.5,1-1.6c8.4-1.9,15.6-1.1,21.4,2.5
// 		C34.3,32.2,34.5,33.1,34.1,33.7z M36.8,27.7c-0.5,0.8-1.6,1.1-2.4,0.6c-5.9-3.6-14.9-4.7-21.9-2.6c-0.9,0.3-1.9-0.2-2.1-1.1
// 		c-0.3-0.9,0.2-1.9,1.1-2.1c8-2.4,17.9-1.3,24.7,2.9C37,25.9,37.3,26.9,36.8,27.7z M37,21.5c-7.1-4.2-18.8-4.6-25.6-2.5
// 		c-1.1,0.3-2.2-0.3-2.6-1.4c-0.3-1.1,0.3-2.2,1.4-2.6C18,12.7,31,13.1,39.1,18c1,0.6,1.3,1.8,0.7,2.8C39.3,21.8,38,22.1,37,21.5z"
//     />
//   </g>
// ))

import { Spotify } from '@styled-icons/fa-brands/Spotify'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const SpotifyIcon = toSquidInkIconComponent(Spotify, 'spotify')
