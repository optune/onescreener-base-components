import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscCallIcon = toSquidInkIconComponent(TelephoneFill, 'call', {
  ['no-stroke']: true,
})
