/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { MediaSmall } from '../../style/media.js'
import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

const TextBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: ${({ colorBackground }) =>
    colorBackground || 'transparent'};
  padding: 1em 2em;
`

const Text = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  color: ${({ colorPrimary }) => colorPrimary};
  transition: color 0.3s ease-out;

  & h1,
  h2,
  h3,
  h4,
  h5,
  a,
  li,
  p,
  span {
    font-size: 1em;
    color: ${({ color }) => color};
    white-space: ${({ includeWidth }) =>
      includeWidth ? 'nowrap' : 'pre-wrap'};
    transition: color 0.3s ease-out;
    line-height: 1.2;
    margin: 1em 0;
    padding: 0;
  }

  & a:hover {
    color: ${({ color, colorAccent }) => colorAccent || color};
  }

  & h1 {
    font-size: 1.8em;
    font-weight: bold;
  }

  & h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  & h3 {
    font-size: 1.2em;
  }

  & h4 {
    font-size: 1em;
  }

  & h5 {
    font-size: 0.8em;
  }
`

export const TextBox = ({
  children,
  color,
  colorBackground,
  colorAccent,
  includeWidth,
  ...otherOptions
}) => (
  <TextBackground colorBackground={colorBackground}>
    <Text colorPrimary={color} colorAccent={colorAccent} includeWidth={includeWidth}>
      <AutoTextFit includeWidth={includeWidth} {...otherOptions}>
        {children}
      </AutoTextFit>
    </Text>
  </TextBackground>
)
