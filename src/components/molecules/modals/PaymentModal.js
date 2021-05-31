/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

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
} from './common/Components'

export const PaymentModal = ({
  isSidePreview,
  isPreviewMobile,
  onBuyItem,
  onClose,
  show,
  shopItem,
  accountId,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    setSsrDone(true)
  }, [])

  console.log({ shopItem })

  return (
    <Modal isPreviewMobile={isPreviewMobile} show={ssrDone && show} isSidePreview={isSidePreview}>
      <Container isSidePreview={isSidePreview}>
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>
        <TextContainer>
          <StyledTitle>Paymnet</StyledTitle>
          <StyledTextContainer isSidePreview={isSidePreview}>
            buy one {shopItem.name} for {shopItem.price}
          </StyledTextContainer>
        </TextContainer>

        <StyledButtonContainer>
          <StyledButton
            onClick={() => {
              onBuyItem?.({ shopItem })
            }}
          >
            Pay
          </StyledButton>
          <StyledButton onClick={onClose}>Close</StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
