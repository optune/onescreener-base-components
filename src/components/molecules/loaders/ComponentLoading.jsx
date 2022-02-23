import React from 'react'

import styled, { keyframes } from 'styled-components'
import { BackgroundColor } from '../../../style/color'

const rotary = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const circleySmall = keyframes`
  0% {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 167.5517;
  }
  12.5% {
    stroke-dashoffset: 0;
    stroke-dasharray: 125.6636, 41.8879;
  }
  25% {
    stroke-dashoffset: -125.6636;
    stroke-dasharray: 0 167.5517;
  }
  37.5% {
    stroke-dashoffset: -125.6636;
    stroke-dasharray: 125.6636, 41.8879;
  }
  50% {
    stroke-dashoffset: -251.3272;
    stroke-dasharray: 0 167.5517;
  }
  62.5% {
    stroke-dashoffset: -251.3272;
    stroke-dasharray: 125.6636, 41.8879;
  }
  75% {
    stroke-dashoffset: -376.9908;
    stroke-dasharray: 0 167.5517;
  }
  87.5% {
    stroke-dashoffset: -376.9908;
    stroke-dasharray: 125.6636, 41.8879;
  }
  100% {
    stroke-dashoffset: -502.6544;
    stroke-dasharray: 0 167.5517;
  }
`
const LoadingContent = styled.svg`
  width: ${({ small, width }) => (width > '' ? width : small ? 30 : 60)}px;
  height: ${({ small, width }) => (width > '' ? width : small ? 30 : 60)}px;
  margin-right: ${({ hasLabel }) => (hasLabel ? 10 : 0)}px;
`

const LoadingCircle = styled.circle`
  fill: none;
  stroke: ${BackgroundColor.accent};
  stroke-linecap: round;
  stroke-width: ${({ small }) => (small ? 1 : 3)};
  animation: ${circleySmall} 5.333s ease infinite, ${rotary} 2.2s linear infinite;
  transform-origin: center center;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
`

export const ComponentLoading = ({ label, small, width }) => (
  <Container className="flex-center-middle animated" small={small}>
    <LoadingContent small={small} width={width}>
      <LoadingCircle
        small={small}
        cx={width > '' ? width / 2 : small ? '15' : '30'}
        cy={width > '' ? width / 2 : small ? '15' : '30'}
        r={width > '' ? (width / 2) * 0.666 : small ? '10' : '20'}
      />
    </LoadingContent>

    {label > '' && (
      <p className="font-small-regular saving">
        {label} <span>. </span>
        <span>. </span>
        <span>. </span>
      </p>
    )}
  </Container>
)
