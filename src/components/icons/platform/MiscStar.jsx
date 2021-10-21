/* eslint-disable max-len, react/display-name, react/prop-types */

// // Node
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// // React
// import React from 'react'

// export const MiscStarIcon = toSquidInkIcon(() => (
//   <g id="star">
//     <path
//       {...defaultStrokeFill}
//       d="M24.9510574,4.0194278l3.9931278,12.2895889C29.0780602,16.7210388,29.4620171,17,29.8952427,17H42.802742c0.9701309,0,1.3719711,1.2425823,0.5855446,1.8106384l-10.4341469,7.5368614c-0.3521767,0.254385-0.4998169,0.7070522-0.3653488,1.1201591l3.9884644,12.2532158c0.3000298,0.9217415-0.7554131,1.6884384-1.539238,1.1181297l-10.4503136-7.603611c-0.3504143-0.2549629-0.8251705-0.2552071-1.1758499-0.0006104l-10.4504232,7.5871696c-0.7841768,0.5693245-1.838623-0.1978531-1.5382566-1.1191788l3.9876451-12.2314434c0.1346922-0.4131451-0.012846-0.8659878-0.3650637-1.1204967L4.6106577,18.8105373C3.8244004,18.2423954,4.2263002,17,5.1963439,17h12.9084129c0.4332256,0,0.8171825-0.2789612,0.9510574-0.6909828l3.9931278-12.2895889C23.3482952,3.0981169,24.6517048,3.0981169,24.9510574,4.0194278z"
//     />
//   </g>
// ))

import { StarFill } from '@styled-icons/bootstrap/StarFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscStarIcon = toSquidInkIconComponent(StarFill, 'star', {
  ['no-stroke']: true,
})
