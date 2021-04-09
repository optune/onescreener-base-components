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
import { CloseDarkIcon } from '../icons/CloseIcon'

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

const Container = styled.div`
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
`

const CloseButton = styled.div`
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
    align-self: center;
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
  /* padding-right: 15px; */
  max-height: ${({ isSidePreview }) => (isSidePreview ? '150px' : '300px')};
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
`

const StyledButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const TextOverlay = ({
  isSidePreview,
  title,
  content,
  isPreviewMobile,
  label,
  onAction,
  hasActionFinished,
  paypalLink,
  userName,
  onClose,
  show,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])

  const isDonation = paypalLink > ''

  return (
    <Modal isPreviewMobile={isPreviewMobile} show={ssrDone && show} isSidePreview={isSidePreview}>
      <Container isSidePreview={isSidePreview}>
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>
        <TextContainer>
          <StyledTitle>
            {isDonation
              ? (!hasActionFinished && title > '' && title) ||
                (userName > '' && `Donate to ${userName}`) ||
                'Donation'
              : label}
          </StyledTitle>
          <StyledTextContainer isSidePreview={isSidePreview}>
            {content?.split('\n').map((line, lineIndex) => (
              <p key={lineIndex}>{line}</p>
            ))}
          </StyledTextContainer>
        </TextContainer>

        <StyledButtonContainer>
          {isDonation && !hasActionFinished ? (
            <a
              className="donate"
              href={paypalLink}
              onClick={onAction}
              target="_blank"
              rel="noreferrer noopener"
            >
              Donate
            </a>
          ) : (
            <StyledButton onClick={onClose}>Close</StyledButton>
          )}
        </StyledButtonContainer>
      </Container>
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
