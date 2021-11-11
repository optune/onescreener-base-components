import { Link } from '@styled-icons/bootstrap/Link'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const WebsiteIcon = toSquidInkIconComponent(Link, 'line-arw-rt', {
  ['no-stroke']: true,
})
