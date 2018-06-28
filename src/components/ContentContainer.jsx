import styled from 'styled-components'

import Button from './Button.jsx'

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  > ${Button} {
    margin: 2em auto;
  }

  > * {
    padding: 1em;
  }
`

export default ContentContainer
