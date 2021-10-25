import { TreeFill } from '@styled-icons/bootstrap/TreeFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const TreeIcon = toSquidInkIconComponent(TreeFill, 'tree', {
  ['no-stroke']: true,
})
