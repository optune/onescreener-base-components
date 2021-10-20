/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const TreeIcon = toSquidInkIcon(() => (
//   <g id="tree">
//     <g>
//       <path
//         {...defaultStrokeFill}
//         d="
// 			M35.4,19.8c0.4-1.2,0.6-2.5,0.6-3.8c0-6.6-5.4-12-12-12S12,9.4,12,16c0,1.3,0.2,2.6,0.6,3.8C9.8,21.7,8,24.9,8,28.5
// 			C8,34.3,12.7,39,18.5,39c2,0,3.9-0.6,5.5-1.6c1.6,1,3.5,1.6,5.5,1.6C35.3,39,40,34.3,40,28.5C40,24.9,38.2,21.7,35.4,19.8z"
//       />
//       <line {...defaultStrokeFill} x1="24" y1="18" x2="24" y2="46" />
//       <line {...defaultStrokeFill} x1="24" y1="37.4" x2="16" y2="30" />
//       <line {...defaultStrokeFill} x1="24" y1="37.4" x2="32" y2="30" />
//     </g>
//   </g>
// ))

import { TreeFill } from '@styled-icons/bootstrap/TreeFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const TreeIcon = toSquidInkIconComponent(TreeFill, 'tree', {
  ['no-stroke']: true,
})
