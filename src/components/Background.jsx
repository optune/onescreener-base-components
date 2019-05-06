import styled from 'styled-components'

import Content from './ContentContainer.jsx'

const Background = styled(Content)`
  background-color: ${({ color }) => color};
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ fullscreen }) => (fullscreen ? 'cover' : 'contain')};
`

export default Background
