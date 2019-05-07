import styled from 'styled-components'

import { poison, white, black } from '../style/colors.js'

const PlatformIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  background-color: ${({ active }) => (active ? poison : black)};
  border-radius: 6px;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;

  > svg {
    height: 18px;
    width: 18px;
  }

  g > path {
    fill: ${({ color }) => color || white};
  }
`

export default PlatformIconWrapper
