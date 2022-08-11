import React from 'react'
import {
  toSquidInkIconComponent,
  defaultStrokeFill,
  toSquidInkIcon,
} from '../mixins/toSquidInkIcon.jsx'

/* Right */

import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

export const ArrowRightIcon = toSquidInkIconComponent(ArrowRight, 'arrow-right')

/* Left */

import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft'

export const ArrowLeftIcon = toSquidInkIconComponent(ArrowLeft, 'arrow-left')

export const ArrowUpDownIcon = toSquidInkIcon(() => {
  return (
    <g id="arrow-up-down">
      <path
        {...defaultStrokeFill}
        d="M8.33317 6.66669L4.99984 3.33335L1.6665 6.66669"
        strokeWidth={1.2}
      />
      <path
        {...defaultStrokeFill}
        d="M8.33317 13.3333L4.99984 16.6666L1.6665 13.3333"
        strokeWidth={1.2}
      />
    </g>
  )
}, '0 0 10 20')
