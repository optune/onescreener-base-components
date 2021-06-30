/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'
import SimpleBar from 'simplebar-react'

import { Button } from '../../../atoms/buttons/Button'

// Media
import { MediaSmall } from '../../../../style/media.js'

// Styles
import { BackgroundColor, ForegroundColor, ColorHaiti } from '../../../../style/color'

const StyledModal = styled.div`
  position: ${({ isSidePreview }) => (isSidePreview ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: 999999;
  overflow: hidden;
  background-color: ${({ isPreviewMobile }) =>
    isPreviewMobile ? 'transparent' : 'rgba(0,0,0, 0.50)'};
  pointer-events: none;
  transition: opacity 0.5s ease-out;
`

const StyledModalContent = styled.div`
  position: relative;
  width: ${({ isSidePreview, isPreviewMobile, width }) =>
    isSidePreview && isPreviewMobile ? '100%' : isPreviewMobile ? '334px' : width || '50%'};
  height: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview && isPreviewMobile ? '100%' : isPreviewMobile ? '520px' : '80%'};
  margin: ${({ isSidePreview, isPreviewMobile }) =>
      isSidePreview && isPreviewMobile ? '0' : isPreviewMobile ? '75px' : 'calc(100vh / 10)'}
    auto;
  padding: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview && isPreviewMobile ? '50px 0 0' : '0'};
  background: ${({ isPreviewMobile }) => (isPreviewMobile ? 'rgba(0,0,0, 0.50)' : 'transparent')};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  overflow: hidden;

  @media ${MediaSmall} {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`

export const Modal = ({ children, show, isPreviewMobile, isSidePreview, width }) => {
  return (
    <StyledModal show={show} isPreviewMobile={isPreviewMobile} isSidePreview={isSidePreview}>
      <StyledModalContent
        show={show}
        isPreviewMobile={isPreviewMobile}
        isSidePreview={isSidePreview}
        width={width}
      >
        {children}
      </StyledModalContent>
    </StyledModal>
  )
}

export const Container = styled.div`
  background: ${({ colorBackground }) => colorBackground || 'rgba(255,255,255)'};
  border-radius: 4px;
  position: relative;

  .close-icon {
    width: 16px !important;
    height: 16px !important;

    g {
      path {
        fill: white !important;
      }
    }
  }

  .donate {
    width: 50%;
    height: ${({ isSidePreview }) => (isSidePreview ? '30px' : '60px')};
    text-decoration: none;
    font-size: ${({ isSidePreview }) => (isSidePreview ? '1rem' : '1.5rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ isSidePreview }) => (isSidePreview ? '10px' : '20px')};
    margin-bottom: ${({ isSidePreview }) => (isSidePreview ? '20px' : '40px')};

    background: linear-gradient(90deg, #d9b85e 5%, rgb(40 228 211 / 50%) 100%), #c4c4c4;
    color: white;

    &:hover {
      background: linear-gradient(90deg, rgb(40 228 211 / 50%) 5%, #d9b85e 100%), #c4c4c4;
    }
  }

  .price {
    font-weight: bold;
    font-size: 2rem;
    text-transform: italic;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.marginTop {
      margin-top: 24px;
    }

    &.marginBottom {
      margin-bottom: 24px;
    }
  }

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    &.fullwidth {
      width: 100%;
    }

    &.half {
      width: 50%;
    }

    &.third {
      width: 33.33%;
    }

    &.left {
      justify-content: flex-start;
    }

    &.right {
      justify-content: flex-end;
    }
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #0a1c3b;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 999;
`

export const TextContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 1rem 3rem 0 3rem;
  color: ${({ color }) => color || '#000000'};
  overflow: ${({ overflowHidden }) => (overflowHidden ? 'hidden' : 'auto')};

  @media ${MediaSmall} {
    padding: 2rem 1.5rem 0 1.5rem;
  }

  & h2,
  p {
    color: ${({ color }) => color || '#000000'};
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    word-break: break-word;
    white-space: pre-wrap;
    align-self: center;
  }

  & b {
    font-weight: bold;
  }

  & i {
    font-style: italic;
  }
`

export const StyledTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  width: 100%;
`

export const Select = styled.select`
  font-size: 1.5rem;
  width: 100%;
  padding: 5px 0;
  max-width: 60px;
`

export const Text = styled.p`
  font-size: 1.5rem;
  text-align: left;
  width: 100%;

  &.bold {
    font-weight: bold;
  }
`

export const StyledTextContainer = styled(({ isSidePreview, ...other }) => (
  <SimpleBar {...other} />
))`
  margin-top: 0.5rem;
  margin-bottom: 0;
  width: 100%;
  /* padding-right: 15px; */
  max-height: ${({ isSidePreview }) => (isSidePreview ? '150px' : '300px')};
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
`

export const StyledButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled(Button)`
  justify-self: flex-end;
  margin: 1rem auto 1rem;
  background-color: ${ForegroundColor.accent};
  color: ${ColorHaiti} !important;

  ${({ active }) =>
    active &&
    css`
      color: ${ForegroundColor.accent} !important;
      background-color: ${BackgroundColor.selected} !important;
    `}
  &:hover {
    color: ${ForegroundColor.accent} !important;
    background-color: ${BackgroundColor.selected} !important;
  }
`
