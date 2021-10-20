// import React from 'react'
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// const viewBox = '0 0 52 52'

// export const TwitchIcon = toSquidInkIcon(() => {
//   return (
//     <g id="twitch">
//       <path
//         id="twitch1"
//         strokeWidth="1"
//         d="M9.5,37h10v5c0,0.404,0.244,0.77,0.617,0.924C20.241,42.976,20.371,43,20.5,43c0.26,0,0.516-0.102,0.707-0.293L26.914,37
// 			H38c0.265,0,0.52-0.105,0.707-0.293l6.5-6.5C45.395,30.02,45.5,29.766,45.5,29.5V6c0-0.553-0.448-1-1-1h-35c-0.552,0-1,0.447-1,1
// 			v30C8.5,36.553,8.948,37,9.5,37z M10.5,7h33v22.086L37.586,35H26.5c-0.265,0-0.52,0.105-0.707,0.293L21.5,39.586V36
// 			c0-0.553-0.448-1-1-1h-10V7z"
//       />
//       <path
//         id="twitch2"
//         strokeWidth="1"
//         d="M50.5,0H5C4.644,0,4.315,0.189,4.136,0.496l-3.5,6C0.547,6.649,0.5,6.823,0.5,7v37c0,0.553,0.448,1,1,1h11v6
// 			c0,0.553,0.448,1,1,1h7c0.247,0,0.485-0.092,0.669-0.257L28.662,45H38c0.251,0,0.493-0.095,0.677-0.264l12.5-11.5
// 			c0.206-0.189,0.323-0.457,0.323-0.736V1C51.5,0.447,51.052,0,50.5,0z M49.5,32.062L37.61,43h-9.332
// 			c-0.247,0-0.485,0.092-0.669,0.257L20.116,50H14.5v-6c0-0.553-0.448-1-1-1h-11V7.271L5.574,2H49.5V32.062z"
//       />
//       <path
//         id="twitch3"
//         strokeWidth="1"
//         d="M21.5,28h4c0.552,0,1-0.447,1-1V14c0-0.553-0.448-1-1-1h-4c-0.552,0-1,0.447-1,1v13C20.5,27.553,20.948,28,21.5,28z
// 			 M22.5,15h2v11h-2V15z"
//       />
//       <path
//         id="twitch4"
//         strokeWidth="1"
//         d="M31.5,28h4c0.552,0,1-0.447,1-1V14c0-0.553-0.448-1-1-1h-4c-0.552,0-1,0.447-1,1v13C30.5,27.553,30.948,28,31.5,28z
// 			 M32.5,15h2v11h-2V15z"
//       />
//     </g>
//   )
// }, viewBox)

import { Twitch } from '@styled-icons/fa-brands/Twitch'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const TwitchIcon = toSquidInkIconComponent(Twitch, 'twitch')
