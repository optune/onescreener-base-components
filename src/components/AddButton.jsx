import React from 'react'
import styled from 'styled-components'

import { green, white } from '../style/colors'

const StyledButton = styled.button`
  text-align: center;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  height: 32px;
  width: 32px;
  color: ${white};
  background-color: ${green};
  border: 0px solid black;
  border-radius: 2em;
  opacity: 1;
  cursor: pointer;
  box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.75);
`
const AddButton = props => <StyledButton>+</StyledButton>

export default AddButton
