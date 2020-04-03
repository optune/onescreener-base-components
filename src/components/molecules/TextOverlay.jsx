import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

import SimpleBar from 'simplebar-react'

import { Button } from '../atoms/buttons/Button'

// Media
import { MediaSmall } from '../../style/media.js'

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const modalFadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 999999;
  overflow: auto;
  background-color: ${({ isPreviewMobile }) =>
    isPreviewMobile ? 'transparent' : 'rgba(10, 15, 44, 0.95)'};
  pointer-events: none;
  animation-name: ${({ show }) => (show ? modalFadeIn : modalFadeOut)};
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  animation-duration: ${({ show }) => (!show ? '0.1s' : '0.5s')};
`

const StyledModalContent = styled.div`
  position: relative;
  width: ${({ isPreviewMobile }) => (isPreviewMobile ? '334px' : '50%')};
  height: ${({ isPreviewMobile }) => (isPreviewMobile ? '520px' : '80%')};
  margin: ${({ isPreviewMobile }) => (isPreviewMobile ? '75px' : 'calc(100vh / 10)')} auto;
  background: ${({ isPreviewMobile }) =>
    isPreviewMobile ? 'rgba(10, 15, 44, 0.95)' : 'transparent'};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  overflow: hidden;

  @media ${MediaSmall} {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`

const Modal = ({ children, show, isPreviewMobile }) => {
  return (
    <StyledModal show={show} isPreviewMobile={isPreviewMobile}>
      <StyledModalContent show={show} isPreviewMobile={isPreviewMobile}>
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
  background: ${({ colorBackground }) => colorBackground || 'rgba(255,255,255, 0.9)'};
`

const TextContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 1rem 3rem 0 3rem;

  color: ${({ color }) => color || '#000000'};

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

const StyledTextContainer = styled(SimpleBar)`
  margin-top: 0.5rem;
  margin-bottom: 0;
  width: 100%;
  padding-right: 10px;
  max-height: 300px;
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
`

export const TextOverlay = ({
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  content,
  isPreviewMobile,
  label,
  onClose,
  show,
  square,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])

  return (
    <Modal isPreviewMobile={isPreviewMobile} show={ssrDone && show}>
      <ContentContainer>
        <TextContainer>
          <StyledTitle>{label.charAt(0).toUpperCase() + label.slice(1)}</StyledTitle>
          <StyledTextContainer>
            {content.split('\n').map((word, i) => (
              <p key={i}>{word}</p>
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
  colorBackground: PropTypes.string,
  colorBackgroundAccent: PropTypes.string,
  border: PropTypes.number,
  circle: PropTypes.bool,
  color: PropTypes.string,
  colorAccent: PropTypes.string,
  content: PropTypes.string,
  isPreviewMobile: PropTypes.bool,
  label: PropTypes.string,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  square: PropTypes.bool,
}
