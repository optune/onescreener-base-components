/* eslint-disable max-len, react/display-name, react/prop-types */

import { ClockFill } from '@styled-icons/bootstrap/ClockFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscClockIcon = toSquidInkIconComponent(ClockFill, 'clock', {
  ['no-stroke']: true,
})
