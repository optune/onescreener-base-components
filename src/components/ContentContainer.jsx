import styled from 'styled-components'

import Button from './Button.jsx'

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

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

  padding-bottom: 80px; /* height of bottom subnavigation bar */
`

export default ContentContainer
