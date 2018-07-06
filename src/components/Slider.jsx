/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const desktop = {
  margin: 8,
  x: 288,
  y: 184,
}

const mobile = {
  margin: 10,
  x: 192,
  y: 122,
}

const MovingFlexRowContainer = styled.div`
  display: flex;
  flex-flow: row;
  max-width: 100%;

  position: relative;
  left: ${({ id }) =>
    `${desktop.x / 2 - id * (desktop.x + 2 * desktop.margin)}px`};

  @media (max-width: 600px) {
    left: ${({ id }) =>
      `${mobile.x / 2 - id * (mobile.x + 2 * mobile.margin)}px`};
  }
  transition: all 0.5s ease-out;
`

const Slider = props => {
  const { id, slides } = props
  return (
    <MovingFlexRowContainer id={id}>
      {slides.map(([SlideContainer, Slide, componentProps], key) => {
        const ResponsiveSlide = styled(Slide)`
          padding: 10px;
          margin: 0 ${desktop.margin}px;
          width: ${desktop.x}px;
          height: ${desktop.y}px;

          @media (max-width: 600px) {
            margin: 0 ${mobile.margin}px;
            width: ${mobile.x}px;
            height: ${mobile.y}px;
          }
        `
        return (
          <SlideContainer key={key}>
            <ResponsiveSlide {...componentProps} />
          </SlideContainer>
        )
      })}
    </MovingFlexRowContainer>
  )
}

export default Slider
