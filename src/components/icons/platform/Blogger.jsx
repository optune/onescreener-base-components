/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon.jsx'

// React
import React from 'react'

export const BloggerIcon = toSquidInkIcon(() => (
  <g id="blogger">
    <path
      {...defaultStrokeFill}
      d="M32.0236893,46c7.6861725,0,13.9298439-6.219635,13.9729462-13.8636856l0.0866966-11.2341328l-0.1297989-0.6018505
		l-0.3693199-0.7652721l-0.6245155-0.4803524c-0.8111305-0.6362686-4.9211693,0.044405-6.0276604-0.9606934
		c-0.7851715-0.7170887-0.9076233-2.0119991-1.1451836-3.7679844c-0.4413261-3.4007845-0.7200317-3.5777721-1.2529488-4.7307959
		C34.5991364,5.5013609,29.3488102,2.4251592,25.7413254,2h-9.7703381C8.2843237,2,2,8.2706089,2,15.9293537v16.2486286
		C2,39.8220329,8.2843237,46,15.9709873,46H32.0236893z M16.1487923,13h7.7464199
		c1.4787521,0,2.6768379,1.5388832,2.6768379,2.9980402C26.5720501,17.4513206,25.3739643,19,23.8952122,19h-7.7464199
		c-1.4792414,0-2.6743889-1.5491695-2.6743889-3.0019598C13.4744024,14.5388832,14.6695499,13,16.1487923,13z
		 M13.4744024,32.0002441C13.4744024,30.5415764,14.6695509,29,16.1487923,29h15.7401962
		c1.4694443,0,2.662632,1.5415764,2.662632,3.0002441C34.5516205,33.4398117,33.3584328,35,31.8889885,35H16.1487923
		C14.6695499,35,13.4744024,33.4398079,13.4744024,32.0002441z"
    />
  </g>
))
