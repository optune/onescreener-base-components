// React imports
import React from 'react'
import PropTypes from 'prop-types'
import MediaQueryable from '@optune/react-media-queryable'

const SMALL = 736
const MEDIUM = 1000

// keep in sync with style/variables.css @custom-media
export const mediaQueries = {
  mobile: '(max-width: 480px)',
  small: `(min-width: 481px) and (max-width: ${SMALL}px)`,
  medium: `(min-width: ${SMALL + 1}px) and (max-width: ${MEDIUM}px)`,
  desktop: `(min-width: ${MEDIUM + 1}px)`,
}

export const MediaQueryProps = (props) => (
  <MediaQueryable
    mediaQueries={mediaQueries}
    defaultMediaQuery="medium"
    style={{ width: '100%', height: '100%' }}
  >
    {props.children}
  </MediaQueryable>
)

MediaQueryProps.propTypes = {
  children: PropTypes.node,
}
