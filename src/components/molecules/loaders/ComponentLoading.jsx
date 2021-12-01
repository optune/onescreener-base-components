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
  width: ${({ small }) => (small ? 30 : 60)}px;
  height: ${({ small }) => (small ? 30 : 60)}px;
  margin-right: ${({ hasLabel }) => (hasLabel ? 10 : 0)}px;
`

const LoadingCircle = styled.circle`
  fill: none;
  stroke: ${BackgroundColor.accent};
  stroke-linecap: round;
  stroke-width: 3;
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

export const ComponentLoading = ({ label, small }) => (
  <Container className="flex-center-middle animated">
    <LoadingContent small={small}>
      <LoadingCircle cx={small ? '15' : '30'} cy={small ? '15' : '30'} r={small ? '10' : '20'} />
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
