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

  > p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    margin: 1.2em;
  }
`

export default ContentContainer
