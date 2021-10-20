/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const PaypalIcon = toSquidInkIcon(
//   () => (
//     <g id="paypal-icon">
//       <path
//         {...defaultStrokeFill}
//         d="M11 18.5c-.2 1.2-1.1 6.8-1.3 8.4-.1.1-.1.1-.3.1H4.8c-.5 0-.8-.4-.8-.9L7.7 2.9c.1-.6.6-1.1 1.2-1.1 9.5 0 10.3-.2 12.7.7 3.8 1.5 4.1 5 2.8 8.8-1.3 3.9-4.5 5.6-8.8 5.6-2.6.1-4.3-.4-4.6 1.6zm15.3-9c-.1-.1-.2-.1-.2.1-.1.7-.3 1.4-.5 2.1-2.5 7.1-9.4 6.5-12.8 6.5-.4 0-.6.2-.7.6-1.4 8.8-1.7 10.6-1.7 10.6-.1.4.2.8.7.8h4c.5 0 1-.4 1.1-.9 0-.3-.1.4.9-5.7.3-1.4.9-1.2 1.8-1.2 4.4 0 7.9-1.8 8.9-7 .4-2.3.3-4.6-1.5-5.9z"
//       />
//     </g>
//   ),
//   '0 0 32 32'
// )

import { Paypal } from '@styled-icons/fa-brands/Paypal'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const PaypalIcon = toSquidInkIconComponent(Paypal, 'paypal')
