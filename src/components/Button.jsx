import styled from 'styled-components'

import { black, grey, poison, white } from '../style/colors.js'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: ${({ round }) => (round ? '0px' : '16px')};
  line-height: 0px;
  font-size: 1em;
  font-weight: 600;
  color: ${({ secondary, disabled }) =>
    disabled ? grey : secondary ? poison : white};
  width: ${({ round }) => (round ? '40px' : 'auto')};
  min-height: 40px;
  background-color: ${({ secondary, disabled }) =>
    disabled ? black : secondary ? white : poison};
  border-radius: ${({ secondary, round }) =>
    round ? '50%' : secondary ? '2px' : '3px'};
  overflow: ${({ round }) => (round ? 'hidden' : 'none')};
  border-width: 0;
  border-style: solid;
  border-color: black;
  box-shadow: ${({ shadow }) =>
    shadow
      ? '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 0 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)'
      : 'none'};
  /* 4px 4px 10px 0px rgba(0,0,0,0.75) */
`

export default StyledButton
