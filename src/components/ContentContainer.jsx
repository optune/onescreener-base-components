import styled from 'styled-components'
import Button from './Button.jsx'
import CenterContainer from './CenterContainer.jsx'

const ContentContainer = styled(CenterContainer)`
  flex-flow: column;
  width: 100%;
  height: auto;

  > ${Button}, label {
    margin: 2em auto;
  }

  padding-top: 50px; /* height of top navigation bar */
  padding-bottom: 120px; /* height of bottom bar */
`

export default ContentContainer
