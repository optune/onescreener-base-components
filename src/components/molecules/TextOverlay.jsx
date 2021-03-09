/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import SimpleBar from 'simplebar-react'

import { Button } from '../atoms/buttons/Button'

// Media
import { MediaSmall } from '../../style/media.js'

// Styles
import { BackgroundColor, ForegroundColor, ColorHaiti } from '../../style/color'

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

/* REMOVED: Tricky for first time without having a fade-out effect
  animation-name: ${({ show }) => (show ? modalFadeIn : modalFadeOut)};
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  animation-duration: ${({ show }) => (!show ? '0.1s' : '0.5s')};
 */

const StyledModalContent = styled.div`
  position: relative;
  width: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview && isPreviewMobile ? '100%' : isPreviewMobile ? '334px' : '50%'};
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

const Modal = ({ children, show, isPreviewMobile, isSidePreview }) => {
  return (
    <StyledModal show={show} isPreviewMobile={isPreviewMobile} isSidePreview={isSidePreview}>
      <StyledModalContent
        show={show}
        isPreviewMobile={isPreviewMobile}
        isSidePreview={isSidePreview}
      >
        {children}
      </StyledModalContent>
    </StyledModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isPreviewMobile: PropTypes.bool,
  show: PropTypes.bool,
  style: PropTypes.object,
}

const ContentContainer = styled.div`
  background: ${({ colorBackground }) => colorBackground || 'rgba(255,255,255)'};
  border-radius: 4px;
`

const TextContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 1rem 3rem 0 3rem;
  color: ${({ color }) => color || '#000000'};
  overflow: hidden;

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
  }

  & b {
    font-weight: bold;
  }

  & i {
    font-style: italic;
  }
`

const StyledTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`

const StyledTextContainer = styled(({ isSidePreview, ...other }) => <SimpleBar {...other} />)`
  margin-top: 0.5rem;
  margin-bottom: 0;
  width: 100%;
  padding-right: 15px;
  max-height: ${({ isSidePreview }) => (isSidePreview ? '150px' : '300px')};
  overflow-y: auto;
  overflow-x: hidden;
`

const StyledButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`

const StyledButton = styled(Button)`
  justify-self: flex-end;
  margin: 1rem auto 1rem;
  background-color: ${ForegroundColor.accent};
  color: ${ColorHaiti} !important;

  &:hover {
    color: ${ForegroundColor.accent} !important;
    background-color: ${BackgroundColor.selected} !important;
  }
`

export const TextOverlay = ({ isSidePreview, content, isPreviewMobile, label, onClose, show }) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])

  return (
    <Modal isPreviewMobile={isPreviewMobile} show={ssrDone && show} isSidePreview={isSidePreview}>
      <ContentContainer>
        <TextContainer>
          <StyledTitle>{label}</StyledTitle>
          <StyledTextContainer isSidePreview={isSidePreview}>
            {content.split('\n').map((line, lineIndex) => (
              <p key={lineIndex}>{line}</p>
            ))}
          </StyledTextContainer>
        </TextContainer>

        <StyledButtonContainer>
          <StyledButton onClick={onClose}>Close</StyledButton>
        </StyledButtonContainer>
      </ContentContainer>
    </Modal>
  )
}

TextOverlay.propTypes = {
  content: PropTypes.string,
  isPreviewMobile: PropTypes.bool,
  label: PropTypes.string,
  onClose: PropTypes.func,
  show: PropTypes.bool,
}
