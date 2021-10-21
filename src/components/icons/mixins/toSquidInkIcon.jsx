/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import classNames from 'classnames'

// React
import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export const defaultStrokeFill = {
  fill: 'none',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '10',
}

export const toSquidInkIconComponent = (Icon, id, additionalClassnames) => {
  const SquidInkIcon = ({ className }) => (
    <Icon
      id={id}
      className={classNames('icon squid-ink', { ...additionalClassnames }, className)}
    />
  )

  SquidInkIcon.propTypes = {
    className: PropTypes.string,
  }

  return SquidInkIcon
}

export const toSquidInkIcon = (Icon, viewBox = '0 0 48 48') => {
  const SquidInkIcon = ({ className }) => (
    <svg
      className={classNames('icon squid-ink', className)}
      enableBackground={`new ${viewBox}`}
      version="1.1"
      viewBox={viewBox}
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
