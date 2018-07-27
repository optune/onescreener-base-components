import Button from './Button'
import CenterContainer from './CenterContainer'

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
