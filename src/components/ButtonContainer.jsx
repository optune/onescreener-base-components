import Button from './Button.jsx'
import CenterContainer from './CenterContainer.jsx'

const ButtonContainer = CenterContainer.extend`
    height: 100%;
    &&& {
        width: 6em;
    }

    > ${Button} {
        width: 100%;
    }
`

export default ButtonContainer
