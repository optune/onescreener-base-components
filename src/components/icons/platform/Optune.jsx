/* eslint-disable max-len, react/display-name, react/prop-types */

// Node
import classNames from 'classnames'

// React
import React from 'react'
import PropTypes from 'prop-types'

export const OptuneIcon = ({ className }) => (
  <svg
    className={classNames('icon squid-ink', className)}
    enableBackground="new 0 0 35.2 35.4"
    version="1.1"
    viewBox="0 0 35.2 35.4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="optune">
      <path
        stroke="none"
        d="M17.6,0c-1.9,0-3.9,0.3-5.9,0.9C6.6,2.5,2.6,6.6,0.9,11.8C-0.9,17.6,0,23.5,3.4,28.2c3.3,4.5,8.5,7.2,14.2,7.2c1.9,0,3.9-0.3,5.8-0.9c5.2-1.6,9.3-5.6,10.9-10.8c1.8-5.8,1-11.8-2.4-16.4C28.5,2.6,23.3,0,17.6,0z M9.1,12.3c1.9-3,5-4.8,8.5-4.8c1.6,0,3.1,0.4,4.7,1.1c1.8,0.9,3.4,2.4,4.2,4.2c1.6,3.4,1.5,7-0.4,10s-5.1,4.7-8.5,4.7l0,0c-1.6,0-3.1-0.4-4.6-1.1c-1.8-0.9-3.4-2.3-4.2-4.2C7.1,19.1,7.2,15.4,9.1,12.3z"
      />
    </g>
  </svg>
)
