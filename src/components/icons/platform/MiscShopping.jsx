/* eslint-disable max-len, react/display-name, react/prop-types */

import { CartFill } from '@styled-icons/bootstrap/CartFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscShoppingIcon = toSquidInkIconComponent(CartFill, 'cart', {
  ['no-stroke']: true,
})
