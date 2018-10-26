/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import Button from './Button.jsx'

const LabelStyle = styled(Button)`
  text-decoration: none;
  min-height: unset;
  line-height: 2;
  padding: 4px 28px;
  cursor: pointer;
  user-select: none;
`

const Label = props => (
  <LabelStyle as="label" {...props}>
    {props.children}
  </LabelStyle>
)

export default Label
