import { PenFill } from '@styled-icons/bootstrap/PenFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const PressKitIcon = toSquidInkIconComponent(PenFill, 'jack-2', {
  ['no-stroke']: true,
})
