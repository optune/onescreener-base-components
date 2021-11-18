import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { BackgroundColor } from '../../../style/color'
import { ZIndex4 } from '../../../style/media'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: ${ZIndex4};
`

const LoadingContent = styled.svg`
  width: 200px;
  height: 200px;
`
const LoadingCircle = styled.circle`
  fill: none;
  stroke: ${BackgroundColor.accent};
  stroke-linecap: round;
  stroke-width: 7;
  animation: circley 5.333s ease infinite, rotaty 2.2s linear infinite;
  transform-origin: center center;
`

const LoadingText = styled.p`
  margin-top: 20px;
`

export const PageLoading = ({ label }) => (
  <LoadingContainer>
    <div className="animated center">
      <LoadingContent>
        <LoadingCircle cx="100" cy="100" r="40" />
      </LoadingContent>

      <LoadingText className="font-large-bold saving">
        {label} <span>. </span>
        <span>. </span>
        <span>. </span>
      </LoadingText>
    </div>
  </LoadingContainer>
)

PageLoading.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}
