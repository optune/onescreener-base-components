/* eslint-disable max-len, react/display-name, react/prop-types */

import { Building } from '@styled-icons/bootstrap/Building'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const CompanyIcon = toSquidInkIconComponent(Building, 'home', {
  ['no-stroke']: true,
})
