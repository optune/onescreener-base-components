import React from 'react'
import styled from 'styled-components'

import {green, white} from '../style/colors'

const StyledButton = styled.button`
  display: block;
  padding: 16px;
  line-height: 0px;
  font-size: 1em;
  font-weight: 600;
  color: ${white};
  width: auto;
  min-height: 40px;
  background-color: ${green};
  border-radius: 3px;
  border: 0px solid black;
  /* box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.75); */
`

export default StyledButton
