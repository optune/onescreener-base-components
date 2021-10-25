/* eslint-disable max-len, react/display-name, react/prop-types */

import { SignpostSplitFill } from '@styled-icons/bootstrap/SignpostSplitFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const LocationIcon = toSquidInkIconComponent(SignpostSplitFill, 'location', {
  ['no-stroke']: true,
})
