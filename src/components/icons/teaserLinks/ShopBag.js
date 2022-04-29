// React
import React from 'react'

import { defaultStrokeFill, toSquidInkIcon } from '../mixins/toSquidInkIcon'

// Teaser link - Physical shop
export const ShopBag = toSquidInkIcon(
  () => (
    <g id="shopping-bag">
      <path
        {...defaultStrokeFill}
        strokeWidth={3}
        d="M38.6016541,44H9.3983469
		c-1.8044944,0-3.200654-1.581543-2.9768338-3.3721046l3.2499995-26C9.8591738,13.1266098,11.1353769,12,12.6483469,12h22.7033081
		c1.51297,0,2.7891731,1.1266098,2.9768333,2.6278954l3.25,26C41.8023071,42.418457,40.406147,44,38.6016541,44z"
      />
      <path
        {...defaultStrokeFill}
        strokeWidth={3}
        d="M16,11
		c0-4.4182782,3.5817223-8,8-8s8,3.5817218,8,8"
      />
      <path
        {...defaultStrokeFill}
        strokeWidth={3}
        d="M20,11
		c0-2.2091389,1.7908611-4,4-4s4,1.7908611,4,4"
      />
    </g>
  ),
  '0 0 48 48'
)
