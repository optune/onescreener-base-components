/* eslint-disable react/prop-types */
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

import { AutoTextFit } from '../../utils/AutoTextFit.jsx'
import { MediaMobile } from '../../style/media.js'

const FadeIn = keyframes`
  from { opacity: 0.1; }
  to { opacity: 1; }
`

const TextBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${FadeIn} 0.3s ease-out;
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
    color: ${({ colorPrimary }) => colorPrimary};
    white-space: ${({ wordWrap }) => (wordWrap ? 'pre-line' : 'nowrap')};
    transition: color 0.3s ease-out;
    line-height: 1.4;
    margin: 0 0 0.1em;
    padding: 0;
  }
  & a {
    word-break: ${({ wordWrap }) => (wordWrap ? 'break-word' : 'normal')};
  }
  & .separator-line {
    background: ${({ colorPrimary }) => colorPrimary};
    height: 0.1em;
    min-height: 1px;
    margin 1em 0;
    padding: 0;
    border: none;
  }
  & a:hover {
    color: ${({ colorPrimary, colorAccent }) => colorAccent || colorPrimary};
  }
  & h1 {
    font-size: 1.8em;
    font-weight: bold;
    margin: 1em 0;
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


 ${({ isGigs }) =>
   !isGigs &&
   css`
     ol,
     ul {
       display: block;
       margin-block-start: 1em;
       margin-block-end: 1em;
       margin-inline-start: 0px;
       margin-inline-end: 0px;
       padding-inline-start: 40px;
     }

     ul {
       list-style-type: disc;
     }

     ol {
       list-style-type: decimal;
     }
   `}

`

export const TextBox = ({
  children,
  color,
  colorBackground,
  colorAccent,
  isGigs,
  isPreviewMobile,
  isSidePreview,
  textValue,
  wordWrap,
  ...otherOptions
}) => {
  return (
    <TextBackground>
      <Text colorPrimary={color} colorAccent={colorAccent} wordWrap={wordWrap} isGigs={isGigs}>
        <AutoTextFit
          colorBackground={colorBackground}
          includeWidth={!wordWrap}
          isMobileView={isPreviewMobile}
          isSidePreview={isSidePreview}
          textValue={textValue}
          {...otherOptions}
        >
          {children}
        </AutoTextFit>
      </Text>
    </TextBackground>
  )
}
