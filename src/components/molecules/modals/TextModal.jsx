/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Styles
import { CloseDarkIcon } from '../../icons/CloseIcon'

// Common
import {
  Modal,
  Container,
  CloseButton,
  TextContainer,
  StyledButton,
  StyledButtonContainer,
  StyledTextContainer,
  StyledTitle,
  Text,
} from './common/Components'
import { renderHtml } from '../../../utils/renderHtml'

export const TextModal = ({
  isSidePreview,
  title,
  content,
  isPreviewMobile,
  label,
  onAction,
  hasActionFinished,
  paypalLink,
  artistName,
  onClose,
  show,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])

  const isDonation = paypalLink > ''

  return (
    <Modal
      isPreviewMobile={isPreviewMobile}
      show={ssrDone && show}
      isSidePreview={isSidePreview}
      onClose={onClose}
      height="auto"
    >
      <Container isSidePreview={isSidePreview}>
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>
        <TextContainer overflowHidden>
          <StyledTitle>
            {isDonation
              ? (!hasActionFinished && title > '' && title) ||
                (artistName > '' && `Donate to ${artistName}`) ||
                'Donation'
              : label}
          </StyledTitle>
          <StyledTextContainer isSidePreview={isSidePreview}>
            {/* {content?.split('\n').map((line, lineIndex) => (
              <p key={lineIndex}>{line}</p>
            ))} */}
            <Text as="div" className="editor">
              {renderHtml(content)}
            </Text>
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

TextModal.propTypes = {
  content: PropTypes.string,
  isPreviewMobile: PropTypes.bool,
  label: PropTypes.string,
  onClose: PropTypes.func,
  show: PropTypes.bool,
}
