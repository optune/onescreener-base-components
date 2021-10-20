// import React from 'react'
// import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// export const SoundcloudIcon = toSquidInkIcon(() => (
//   <g id="soundcloude">
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       {...defaultStrokeFill}
//       d="M40.6578903,23.2774296c-0.6387749,0-1.2503662,0.1494999-1.8347778,0.4484997c-0.1902695,0.0951366-0.3941345,0.1494999-0.6115913,0.1494999c-0.2310448,0-0.4620895-0.0543633-0.6659546-0.1766815c-0.3941383-0.2174549-0.6523628-0.6251831-0.6795464-1.0872746c-0.4485016-6.2382355-4.6458015-11.1173801-9.6608562-11.1173801c-0.8493366,0-1.7007198,0.1456184-2.5046692,0.4243708C24.2872944,12.0617313,24,12.4388657,24,12.8761969v22.0687904c0,0.5519676,0.4472198,0.9995499,0.9991875,1l15.7425423,0.0127792c2.7317772,0,4.9187698-2.8405037,4.9187698-6.333374C45.6604996,26.1179333,43.3896675,23.2774296,40.6578903,23.2774296z"
//     />
//     <line {...defaultStrokeFill} x1="20" y1="36" x2="20" y2="13" />
//     <line {...defaultStrokeFill} x1="17" y1="36" x2="17" y2="15" />
//     <line {...defaultStrokeFill} x1="14" y1="36" x2="14" y2="20" />
//     <line {...defaultStrokeFill} x1="11" y1="36" x2="11" y2="25" />
//     <line {...defaultStrokeFill} x1="8" y1="36" x2="8" y2="26" />
//     <line {...defaultStrokeFill} x1="5" y1="36" x2="5" y2="29" />
//   </g>
// ))

import { Snapchat } from '@styled-icons/fa-brands/Snapchat'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const SnapchatIcon = toSquidInkIconComponent(Snapchat, 'snapchat')
