import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

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
  animation-name: ${({ show }) => (show ? modalFadeIn : '')};
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  animation-duration: 0.5s;
`
const StyledModalContent = styled.div`
  position: relative;
  width: ${({ isPreviewMobile }) => (isPreviewMobile ? '334px' : '50%')};
  height: ${({ isPreviewMobile }) => (isPreviewMobile ? '520px' : '80%')};
  margin: ${({ isPreviewMobile }) => (isPreviewMobile ? '75px' : 'calc(100vh / 10)')} auto;
  background: ${({ isPreviewMobile }) =>
    isPreviewMobile ? 'rgba(10, 15, 44, 0.95)' : 'transparent'};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  overflow-y: scroll;

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
  background: ${({ colorBackground }) => colorBackground || '#FFFFFF'};
`

const TextContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 3rem 3rem;

  color: ${({ color }) => color || '#000000'};

  @media ${MediaSmall} {
    padding: 2rem 1.5rem;
  }

  & h2,
  p {
    color: ${({ color }) => color || '#000000'};
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
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

const StyledTextContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
`
const StyledButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`

const StyledButton = styled.button`
  justify-self: flex-end;
  background-color: ${({ colorBackground }) => colorBackground};
  border-radius: ${({ circle, square }) => (circle && '50%') || (square && '0px') || '0.4rem'};
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => border / 10}rem;
  border-style: solid;
  box-sizing: border-box;
  color: ${({ color }) => color};
  width: auto;
  font-size: 1.2rem;
  padding: 0.5rem 2.5rem;
  margin: 2rem auto 3rem;
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out, color 0.25s ease-out;
  cursor: pointer;

  &:hover:not(:focus) {
    background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent};
    border-color: ${({ colorAccent }) => colorAccent};
    color: ${({ colorAccent }) => colorAccent};
  }
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
      <ContentContainer color={color} colorBackground={colorBackground}>
        <TextContainer color={color} colorBackground={colorBackground}>
          <StyledTitle>{label.charAt(0).toUpperCase() + label.slice(1)}</StyledTitle>
          <StyledTextContainer>
            {content.split('\n').map((word, i) => (
              <p key={i}>{word}</p>
            ))}
          </StyledTextContainer>
        </TextContainer>

        <StyledButtonContainer>
          <StyledButton
            border={border}
            circle={circle}
            color={color}
            colorAccent={colorAccent}
            colorBackground={colorBackground}
            colorBackgroundAccent={colorBackgroundAccent}
            onClick={onClose}
            square={square}
          >
            Close
          </StyledButton>
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
