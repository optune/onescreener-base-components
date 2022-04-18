import classNames from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { MediaSmall } from '../../../style/media'

const RowContainer = styled.div`
  width: 100%;
  margin-top: ${({ marginTop, hide }) => (!hide && marginTop ? 1 : 0)}rem;
  margin-bottom: ${({ marginBottom, hide }) => (!hide && marginBottom ? 3 : 0)}rem;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  max-height: ${({ hide }) => (hide ? 0 : 'auto')};
  transition: opacity 0.3s, max-height 0.3s, margin-top 0.3s, margin-bottom 0.3s;

  @media ${MediaSmall} {
    margin-top: ${({ marginTop, hide }) => (!hide && marginTop ? 0.66 : 0)}rem;
    margin-bottom: ${({ marginBottom, hide }) => (!hide && marginBottom ? 1.75 : 0)}rem;
  }
`

export const Row = ({ children, center, className, ...other }) => (
  <RowContainer className={classNames('row', center && 'flex-center', className)} {...other}>
    {children}
  </RowContainer>
)

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  center: PropTypes.bool,
  hide: PropTypes.bool,
}
