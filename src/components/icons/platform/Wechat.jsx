import { Wechat } from '@styled-icons/simple-icons/Wechat'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const WechatIcon = toSquidInkIconComponent(Wechat, 'wechat', {
  ['no-stroke']: true,
})
