/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import classNames from 'classnames'

// React
import React from 'react'
import PropTypes from 'prop-types'

export const defaultStrokeFill = {
  fill: 'none',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '10',
}

export const toSquidInkIcon = Icon => {
  const SquidInkIcon = ({ className }) => (
    <svg
      className={classNames('icon squid-ink', className)}
      enableBackground="new 0 0 48 48"
      version="1.1"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icon()}
    </svg>
  )

  SquidInkIcon.propTypes = {
    className: PropTypes.string,
  }

  return SquidInkIcon
}
