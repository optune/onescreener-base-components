import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import styled from 'styled-components'

// Media
import { MediaSmall } from '../../style/media.js'

const Modal = ({ children, show, isPreviewMobile, style }) => {
  const contentStyle = style || isPreviewMobile ? { content: { backgroundColor: '#4F4F4F' } } : {}

  return (
    <ReactModal
      isOpen={show}
      className="modal content"
      overlayClassName="modal overlay"
      contentLabel="About info"
      style={contentStyle}
    >
      <div className="animated fadeIn">{children}</div>
    </ReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isPreviewMobile: PropTypes.bool,
  show: PropTypes.bool,
  style: PropTypes.object,
}

const ModalContainers = styled.div`
  position: relative;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 3rem;
  background: ${({ backgroundColor }) => backgroundColor || '#FFFFFF'};
  color: ${({ color }) => color || '#000000'};

  display: flex;
  flex-flow: column;
  align-items: center;

  @media ${MediaSmall} {
    width: 100%;
    top: 0;
    max-width: 100%;
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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
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

const StyledButton = styled.button`
  background-color: ${({ colorBackground }) => colorBackground};
  border-radius: ${({ circle, square }) => (circle && '50%') || (square && 'none') || '0.4rem'};
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => border / 10}rem;
  border-style: solid;
  box-sizing: border-box;
  color: ${({ color }) => color};
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out, color 0.25s ease-out;

  &:hover:not(:focus) {
    background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent};
    border-color: ${({ colorAccent }) => colorAccent};
    color: ${({ colorAccent }) => colorAccent};
  }
`

export const TextOverlay = ({
  backgroundColor,
  backgroundColorAccent,
  border,
  circle,
  color,
  colorAccent,
  content,
  isPreviewMobile,
  label,
  onClose,
  show,
  square,
}) => {
  let style = {
    content: {
      top: 'calc(80vh / 2)',
      background: 'none',
    },
  }

  if (isPreviewMobile) {
    style = {
      content: {
        top: 'calc(80vh / 2)',
        maxWidth: '666px',
        background: 'none',
      },
    }
  }

  return (
    <Modal isPreviewMobile={isPreviewMobile} show={show} style={style}>
      <ModalContainers
        color={color}
        backgroundColor={backgroundColor}
        isPreviewMobile={isPreviewMobile}
      >
        <StyledTitle>{label.charAt(0).toUpperCase() + label.slice(1)}</StyledTitle>
        <StyledTextContainer>
          {content.split('\n').map((word, i) => (
            <p key={i}>{word}</p>
          ))}
        </StyledTextContainer>

        <ButtonContainer>
          <StyledButton
            color={color}
            colorAccent={colorAccent}
            backgroundColor={backgroundColor}
            backgroundColorAccent={backgroundColorAccent}
            circle={circle}
            square={square}
            onClick={onClose}
          >
            Close
          </StyledButton>
        </ButtonContainer>
      </ModalContainers>
    </Modal>
  )
}

TextOverlay.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundColorAccent: PropTypes.string,
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
