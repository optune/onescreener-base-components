/* eslint-disable max-len, react/display-name, react/prop-types */

import { Film } from '@styled-icons/bootstrap/Film'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const FilmRollIcon = toSquidInkIconComponent(Film, 'film-roll', {
  ['no-stroke']: true,
})
