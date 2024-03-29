import React from 'react'
import { Twitter } from '@styled-icons/fa-brands/Twitter'

import { toSquidInkIcon, toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

// export const TwitterIcon = toSquidInkIconComponent(Twitter, 'twitter')
export const TwitterIcon = toSquidInkIcon(
  () => (
    <g id="twitter-icon">
      <path
        id="path1009"
        class="cls-1"
        d="M7.48,21.9,195.66,273.57,6.29,478.1H48.91L214.71,299l134,179.11h145L294.93,212.33,471.2,21.9H428.58L275.89,186.82,152.51,21.9ZM70.16,53.3h66.63L431,446.7H364.39Z"
        transform="translate(-6.29 -21.9)"
      />
    </g>
  ),
  '0 0 487.43 456.19'
)
