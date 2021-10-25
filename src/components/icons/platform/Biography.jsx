/* eslint-disable max-len */

import { ChatSquareTextFill } from '@styled-icons/bootstrap/ChatSquareTextFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const BiographyIcon = toSquidInkIconComponent(ChatSquareTextFill, 'leaf', {
  ['no-stroke']: true,
})
