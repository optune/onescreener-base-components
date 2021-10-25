import { Codepen } from '@styled-icons/boxicons-logos/Codepen'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const CodepenIcon = toSquidInkIconComponent(Codepen, 'codepen', {
  ['no-stroke']: true,
})
