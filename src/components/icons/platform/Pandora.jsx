// import React from 'react'
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

import { Pandora } from '@styled-icons/simple-icons/Pandora'

export const PandoraIcon = toSquidInkIconComponent(Pandora, 'pandora', {
  ['no-stroke']: true,
})

// export const PandoraIcon = toSquidInkIcon(() => (
//   <g id="pandora">
//     <path
//       {...defaultStrokeFill}
//       d="M37.9285774,5.5204482C35.2113647,3.1733198,31.4254551,2,26.6387997,2H7.7781734v1.5404708
// 		c6.0005531,0,6.7866774,1.026655,6.7866774,8.5060797v23.8330574c0,7.4799156-0.7856359,8.5789261-6.7866774,8.5789261v1.5404701
// 		h19.2903557v-1.5404701c-6.0020199,0-6.7881451-1.0990105-6.7881451-8.5789261v-9.1675377h6.3584156
// 		c4.7866554,0,8.5725651-1.1718521,11.2897778-3.4466267C40.6428604,20.9197826,42,17.9859943,42,14.3922119
// 		C42,10.8003874,40.6428604,7.8665991,37.9285774,5.5204482z M26.5684013,24.072588H20.280386V4.7137909h6.2875271
// 		c5.9296646,0,9.0736732,4.0318203,9.0736732,9.678421C35.6415863,20.0393028,32.4975777,24.072588,26.5684013,24.072588z"
//     />
//   </g>
// ))
