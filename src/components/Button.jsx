import styled from 'styled-components'

import { black, grey, poison, white } from '../style/colors.js'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-weight: 600;
  color: ${({ secondary, disabled }) =>
    disabled ? grey : secondary ? poison : white};

  ${({ round }) =>
    round
      ? `
        line-height: 40px;
        padding: 0px;
        width: 40px;
        overflow: hidden;
        `
      : `
        line-height: 0px;
        padding: 16px;
        width: auto;
        overflow: none;
        `};

  min-height: 40px;
  background-color: ${({ secondary, disabled }) =>
    disabled ? black : secondary ? white : poison};
  border-radius: ${({ secondary, round }) =>
    round ? '50%' : secondary ? '2px' : '3px'};
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
