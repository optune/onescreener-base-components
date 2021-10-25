/* eslint-disable max-len, react/display-name, react/prop-types */

import { CameraFill } from '@styled-icons/bootstrap/CameraFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const PhotosIcon = toSquidInkIconComponent(CameraFill, 'cam-2', {
  ['no-stroke']: true,
})
