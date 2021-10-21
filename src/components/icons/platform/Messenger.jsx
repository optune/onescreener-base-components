// import React from 'react'
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// export const MessengerIcon = toSquidInkIcon(
//   () => (
//     <g id="messenger">
//       <path
//         d="M16.0008 5.33337C9.99132 5.33337 5.33398 9.73531 5.33398 15.6804C5.33398 18.7903 6.60885 21.4774 8.68426 23.3339C8.85811 23.4905 8.96327 23.7073 8.97186 23.9413L9.02981 25.8385C9.04912 26.4438 9.67368 26.8365 10.2274 26.594L12.3436 25.6604C12.5239 25.581 12.7235 25.566 12.9124 25.6175C13.8846 25.8857 14.9212 26.0274 16.0008 26.0274C22.0103 26.0274 26.6676 21.6255 26.6676 15.6804C26.6676 9.73531 22.0103 5.33337 16.0008 5.33337Z"
//         {...defaultStrokeFill}
//       />
//       <path
//         d="M9.59591 18.7066L12.7294 13.7359C13.2273 12.9461 14.2962 12.7486 15.0431 13.3088L17.5348 15.1781C17.7645 15.3498 18.0778 15.3477 18.3053 15.176L21.6706 12.622C22.1192 12.2807 22.7073 12.8194 22.4047 13.2959L19.2712 18.2666C18.7732 19.0564 17.7044 19.2539 16.9575 18.6937L14.4657 16.8243C14.2361 16.6526 13.9227 16.6548 13.6952 16.8265L10.3299 19.3805C9.88136 19.7217 9.29329 19.183 9.59591 18.7066Z"
//         {...defaultStrokeFill}
//       />
//     </g>
//   ),
//   '0  0 28  28'
// )

import { FacebookMessenger } from '@styled-icons/fa-brands/FacebookMessenger'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MessengerIcon = toSquidInkIconComponent(FacebookMessenger, 'messenger')
