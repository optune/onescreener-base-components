/* eslint-disable max-len, react/display-name, react/prop-types */

import { CloudDownloadFill } from '@styled-icons/bootstrap/CloudDownloadFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const DownloadIcon = toSquidInkIconComponent(CloudDownloadFill, 'cloud-down', {
  ['no-stroke']: true,
})
