/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'

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
  StyledTitle,
  Text,
  Header,
} from './common/Components'

const SuccessMessage = ({ order }) => {
  console.log({ order })
  return (
    <Fragment>
      <div className="row">
        <div className="column">
          <StyledTitle left>{order?.product.message}</StyledTitle>{' '}
        </div>
      </div>
      <div className="row">
        <div className="column  left">
          <Text>Order ID: {order?._id}</Text>
        </div>
      </div>

      <div className="column third left">
        <Text>Quantity: {order?.details.quantity}</Text>
      </div>
      <div className="column third left">
        <Text>Price: {order?.details.price}</Text>
      </div>
      <div className="column third left">
        <Text>Total: {order?.details.total}</Text>
      </div>

      {order?.product?.isPhysical ? (
        <div className="row">
          <div className="column third left">
            <Text>Your message: {order?.details.clientNote}</Text>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="column">
            <StyledButton active onClick={() => window.open(order?.product.downloadLink, '_blank')}>
              {order?.product.downloadLabel || 'Download link'}
            </StyledButton>
          </div>
        </div>
      )}
      <Text fontSize="1rem" className="center">
        You will shortly receive your receipt by e-mail{' '}
      </Text>
    </Fragment>
  )
}

export const ShopFinishedModal = ({
  isOrderSuccess,
  isPreviewMobile,
  isSidePreview,
  onLoadOrder,
  onClose,
  shopItem,
  show,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  const [orderAvailable, setOrderAvailable] = useState(true)

  const initialOrder = {
    client: {},
    details: {
      clientNote: 'Default niote',
    },
    product: {
      name: 'Default name',
      isPhysical: true,
      downloadLink: '#',
      downloadLabel: '#',
      message: 'Default thanks!',
    },
  }
  const [order, setOrder] = useState(initialOrder)

  const handleClose = () => {
    const si = document.location.href.indexOf('success=')
    const newUrl = document.location.href.slice(0, si - 1)
    history.replaceState(null, '', newUrl)
    onClose()
  }

  console.log({ shopItem })

  useEffect(() => {
    // setOrderAvailable(true)
    if (isOrderSuccess) {
      ;(async () => {
        const order = await onLoadOrder?.()

        if (!!order) {
          setOrder(order)
          // setOrderAvailable(true)
        } else {
          // TODO: make viewd orders unavalible
          // TODO: MB move success modal out of this one
          // setOrderAvailable(false)
          setOrder({
            details: {},
            client: {},
            product: {},
          })
        }
      })()
    }
    setSsrDone(true)
  }, [])

  useEffect(() => {}, [])

  return (
    <Modal
      isPreviewMobile={isPreviewMobile}
      show={ssrDone && show}
      isSidePreview={isSidePreview}
      width="60%"
    >
      <Container isSidePreview={isSidePreview}>
        <CloseButton onClick={handleClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>

        <Header>
          <Text className="bold">Order successful</Text>
        </Header>
        <TextContainer className="checkout">
          <SuccessMessage order={order} />
        </TextContainer>

        <StyledButtonContainer>
          <StyledButton
            // TODO: secondary
            // TODO: disabled
            onClick={handleClose}
          >
            Close
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
