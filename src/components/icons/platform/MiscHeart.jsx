// import classNames from 'classnames'
// import React from 'react'
// import PropTypes from 'prop-types'

// export const MiscHeartIcon = ({ className }) => (
//   <svg
//     className={classNames('icon squid-ink', className)}
//     enableBackground="new 4 8 40 43"
//     version="1.1"
//     viewBox="4 8 40 43"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g id="heart">
//       <path
//         fill="none"
//         strokeWidth="2"
//         strokeMiterlimit="10"
//         d="M44,25c0.2038269-5.8696365-3.7009888-10-9.5-10c-4.6829834,0-8.6465454,3.0672607-10,7.3012695C23.1465454,18.0672607,19.1829834,15,14.5,15C8.7009888,15,3.4401827,19.4592209,4,26c0.802125,9.3718452,20,21,20,21S43.6467476,35.1726418,44,25z"
//       />
//     </g>
//   </svg>
// )

// MiscHeartIcon.propTypes = {
//   className: PropTypes.string,
// }

import { HeartFill } from '@styled-icons/bootstrap/HeartFill'

import { toSquidInkIconComponent } from '../mixins/toSquidInkIcon.jsx'

export const MiscHeartIcon = toSquidInkIconComponent(HeartFill, 'heart', {
  ['no-stroke']: true,
})
