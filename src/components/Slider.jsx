/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import { default as PreviewIcon } from './icons/Preview.jsx'

import { poison } from '../style/colors.js'

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
  position: relative;
  display: flex;
  width: 100%;

  margin-left: ${({ activeIndex }) =>
    `${desktop.x / 2 - activeIndex * (desktop.x + 2 * desktop.margin)}px`};

  @media (max-width: 600px) {
    margin-left: ${({ activeIndex }) =>
      `${mobile.x / 2 - activeIndex * (mobile.x + 2 * mobile.margin)}px`};
  }
  transition: margin-left 0.5s ease-out;
`

const Preview = styled.div`
  box-sizing: border-box;
  color: white;
  background-color: #4a4a4a;
  user-select: none;

  background-image: ${({ previewImage }) => `url(${previewImage})`};
  background-size: cover;
  border: ${({ active }) => (active ? `4px solid ${poison}` : 'none')};

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

const PreviewIconWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 20px;
`

const ActiveSlideDecoration = () => (
  <PreviewIconWrapper>
    <PreviewIcon />
  </PreviewIconWrapper>
)

const Slider = ({ slides, activeIndex }) => {
  return (
    <MovingFlexRowContainer activeIndex={activeIndex > 0 ? activeIndex : 0}>
      {slides.map(({ previewImage, name, onSelect }, index) => (
        <Preview
          active={index === activeIndex}
          key={index}
          onClick={onSelect}
          previewImage={previewImage}
        >
          {name}
          {index === activeIndex && <ActiveSlideDecoration />}
        </Preview>
      ))}
    </MovingFlexRowContainer>
  )
}

export default Slider
