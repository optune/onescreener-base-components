import styled from 'styled-components'
import Button from './Button.jsx'
import CenterContainer from './CenterContainer.jsx'

const ButtonContainer = styled(CenterContainer)`
  height: 100%;
  &&& {
    width: 6em;
  }

  > ${Button} {
    width: 100%;
  }
`

export default ButtonContainer
