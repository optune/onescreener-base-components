/* eslint-disable max-len, react/display-name, react/prop-types */

import { Baidu } from '@styled-icons/simple-icons/Baidu'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const BaiduIcon = toSquidInkIconComponent(Baidu, 'baidu', {
  ['no-stroke']: true,
})
