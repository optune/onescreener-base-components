import React from 'react'
import styled from 'styled-components'

import Button from './Button.jsx'

const AnchorStyle = styled(Button)`
  text-decoration: none;
  min-height: unset;
  line-height: 2;
  padding: 4px 28px;
  cursor: pointer;
  user-select: none;
`

const AnchorButton = props => (
  <AnchorStyle as="a" {...props}>
    {props.children}
  </AnchorStyle>
)

export default AnchorButton
