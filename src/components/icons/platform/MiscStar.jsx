/* eslint-disable max-len, react/display-name, react/prop-types */

import { StarFill } from '@styled-icons/bootstrap/StarFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscStarIcon = toSquidInkIconComponent(StarFill, 'star', {
  ['no-stroke']: true,
})
