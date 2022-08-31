import classNames from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: ${({ center, right, spaceBetween }) =>
    center || right || spaceBetween ? 'flex' : 'block'};
  justify-content: ${({ center, right, spaceBetween }) =>
    (right && 'flex-end') ||
    (center && 'center') ||
    (spaceBetween && 'space-between') ||
    'flex-start'};
  align-items: center;
  flex-flow: ${({ flow }) => flow || 'column'};
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  max-height: ${({ hide }) => (hide ? 0 : 'auto')};
  transition: opacity 0.3s, max-height 0.3s;
  position: ${({ relative }) => (relative ? 'relative' : 'initial')};
`

export const Column = ({
  children,
  className,
  fullwidth,
  golden13,
  golden8,
  half,
  third,
  twoThird,
  inline,
  ...other
}) => (
  <ColumnContainer
    className={classNames('column', className, {
      third,
      half,
      fullwidth,
      inline,
      'two-third': twoThird,
      'golden-13': golden13,
      'golden-8': golden8,
    })}
    {...other}
  >
    {children}
  </ColumnContainer>
)

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hide: PropTypes.bool,
  inline: PropTypes.bool,
  fullwidth: PropTypes.bool,
  golden13: PropTypes.bool,
  golden8: PropTypes.bool,
  half: PropTypes.bool,
  third: PropTypes.bool,
  twoThird: PropTypes.bool,
}
