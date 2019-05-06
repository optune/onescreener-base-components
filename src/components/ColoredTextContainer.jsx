import styled from 'styled-components'

const ColoredTextContainer = styled.div`
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ color }) => color};
  }
`

export default ColoredTextContainer
