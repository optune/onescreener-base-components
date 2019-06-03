/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  margin: 0 auto;
  width: 100%;
`

const Fields = ({ fields }) => <StyledContent>{fields}</StyledContent>

export default Fields

