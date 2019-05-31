import styled from 'styled-components'

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-flow: ${({ column }) => (column ? 'column' : 'row')};
  margin: ${({ column }) => (column ? '0.5em' : '')};
`

export default CenterContainer
