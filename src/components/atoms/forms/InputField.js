/* eslint-disable react/prop-types */

// React
import React from 'react'

import { Input } from './Input'

import styled from 'styled-components'

const Field = styled.div`
  position: relative;
  overflow: auto;
  display: flex;
  width: 100%;
  transition: color 0.3s;
`

export const InputField = ({ margin, value, isResizable, error, touched, ...other }) => (
  <Field>
    <Input margin={margin} value={value} error={error && touched} valid={!error} {...other} />
  </Field>
)
