import styled from 'styled-components'

const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);

  /* positioning & dimensions are most important for Bottombar of SubNavigation */
  /* FIXME: maybe use this part in SubNavigation Component? */
  &&& {
    margin: 0 20px 20px 20px;
    padding: 1em 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export default BottomBar
