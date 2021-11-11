import { Mailbox2 } from '@styled-icons/bootstrap/Mailbox2'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MailIcon = toSquidInkIconComponent(Mailbox2, 'mail', {
  ['no-stroke']: true,
})
