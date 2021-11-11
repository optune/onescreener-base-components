import { CameraVideoFill } from '@styled-icons/bootstrap/CameraVideoFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const VideoCamIcon = toSquidInkIconComponent(CameraVideoFill, 'video-cam', {
  ['no-stroke']: true,
})
