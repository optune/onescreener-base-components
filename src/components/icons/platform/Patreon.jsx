import { Patreon } from '@styled-icons/simple-icons/Patreon'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const PatreonIcon = toSquidInkIconComponent(Patreon, 'patreon', {
  ['no-stroke']: true,
})
