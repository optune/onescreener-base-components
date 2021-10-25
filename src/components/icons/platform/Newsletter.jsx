import { Newsletter } from '@styled-icons/entypo/Newsletter'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const NewsletterIcon = toSquidInkIconComponent(Newsletter, 'about', {
  ['no-stroke']: true,
})
