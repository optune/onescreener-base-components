// eslint-disable react/prop-types
import React from 'react'
import styled from 'styled-components'

const MovingFlexRowContainer = styled.div`
  display: flex;
  flex-flow: row;
  max-width: 100%;

  position: relative;
  left: ${({ id, elementWidth }) =>
    `${elementWidth / 2 - id * elementWidth}px`};

  transition: all 0.5s ease-out;
`

const Slider = props => (
  <MovingFlexRowContainer {...props}>{props.children}</MovingFlexRowContainer>
)

export default Slider
