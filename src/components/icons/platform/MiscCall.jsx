/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const MiscCallIcon = toSquidInkIcon(() => (
//   <g>
//     <path
//       {...defaultStrokeFill}
//       d="M44.301548,19.0324593
// 			c2.1602173-5.0219517,0.8455734-10.8719664-3.0950928-14.6611176c-0.8551483-0.8222678-1.4886818-1.423099-1.4886818-1.423099
// 			c-1.7698975-1.7698975-4.6394043-1.7698975-6.4093018,0l-2.7830811,2.7830811
// 			c-1.7698803,1.7698798-1.7698803,4.6394215,0,6.4093018l0.9068966,0.9068966
// 			c2.1743679,2.174366,3.0298023,5.3713932,2.1465435,8.3168278c-2.0833855,6.9475269-7.7182655,10.2208538-11.9738579,11.7357712
// 			c-2.9236641,1.0407753-6.1789799,0.3881569-8.4835987-1.6902485l-0.9807491-0.8844814
// 			c-1.7698975-1.7698975-4.6394043-1.7698975-6.4093018,0l-2.7830813,2.7830811
// 			c-1.7698797,1.7698784-1.7698798,4.6394234-0.0000002,6.4093018l1.4967251,1.496727
// 			c3.8993554,3.899353,9.8203888,5.0579262,14.8360291,2.7659187C24.1313705,41.7639313,29.4892406,37.8801422,34.3693848,33
// 			C38.8669624,28.5024223,42.3476868,23.5746841,44.301548,19.0324593z"
//     />

//     <line {...defaultStrokeFill} x1="14" y1="33" x2="5.5" y2="41.5" />

//     <line {...defaultStrokeFill} x1="41" y1="5" x2="32.5" y2="13.5" />
//   </g>
// ))

import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscCallIcon = toSquidInkIconComponent(TelephoneFill, 'call', {
  ['no-stroke']: true,
})
