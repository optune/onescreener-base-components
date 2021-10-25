import { HeartFill } from '@styled-icons/bootstrap/HeartFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscHeartIcon = toSquidInkIconComponent(HeartFill, 'heart', {
  ['no-stroke']: true,
})
