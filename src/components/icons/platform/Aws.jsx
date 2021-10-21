/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const AwsIcon = toSquidInkIcon(() => (
//   <g id="aws">
//     <path
//       {...defaultStrokeFill}
//       d="M1.9942529,10.785655L22,17.1971035v28.210474L2.2405748,38.721817L1.9942529,10.785655z M26.2818737,45.5L46,38.721817V10.9695177
// 		l-19.7132301,6.1361475L26.2818737,45.5z M23.9807243,13.8999424l18.1504478-5.904839L23.9807243,2.5L5.4131265,7.9951034
// 		L23.9807243,13.8999424z"
//     />
//   </g>
// ))

import { Aws } from '@styled-icons/fa-brands/Aws'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const AwsIcon = toSquidInkIconComponent(Aws, 'aws')
