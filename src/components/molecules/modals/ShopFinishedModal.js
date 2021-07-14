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

const InfoColumn = ({ label = ' ', value = ' ', marginTop, third, fullwidth }) => (
  <div
    className={`info-column column  ${marginTop && 'marginTop'} ${third && 'third'} ${
      fullwidth && 'fullwidth'
    } left`}
  >
    <Text as="div" className="label">
      {label}
    </Text>
    <div className="value">{value}</div>
  </div>
  // <Column {...other} className="shrink info-column">
  //   <Text left className="hollow label">
  //     {label}
  //   </Text>
  //   <div className="value">{value}</div>
  // </Column>
)

const SuccessMessage = ({ order }) => {
  return (
    <Fragment>
      <div className="row marginBottom">
        <div className="column">
          <Text className="bangers" fontSize="4rem" margin="0">
            {order?.product.message}
          </Text>{' '}
        </div>
      </div>
      <div className="row ">
        <div className="column  left">
          <InfoColumn label={'Order ID'} value={order?._id} third />
        </div>
      </div>

      <div className="row marginTop">
        <Text className="bold" fontSize="1.3rem" margin="0 0 5px 0">
          Order details
        </Text>
      </div>

      <div className="row ">
        <InfoColumn label={'Quantity'} value={order?.details.quantity} third />
        <InfoColumn label={'Price'} value={`$ ${order?.details.price}`} third />
        <InfoColumn label={'Total'} value={`$ ${order?.details.total}`} third />
      </div>

      {order?.product?.isPhysical && order?.details?.clientNote > '' ? (
        <div className="row  marginBottom">
          <InfoColumn
            label={'Your message'}
            value={order?.details.clientNote || '-'}
            fullwidth
            marginTop
          />
        </div>
      ) : (
        <div className="row marginTop marginBottom">
          <div className="column">
            <StyledButton
              className="fullwidth"
              active
              onClick={() => window.open(order?.product.downloadLink, '_blank')}
            >
              {order?.product.downloadLabel || 'Download link'}
            </StyledButton>
          </div>
        </div>
      )}
      <div className="row marginTop">
        <div className="column">
          <Text fontSize="1.1rem" className="center info" margin="0">
            You will shortly receive your receipt by e-mail{' '}
          </Text>
        </div>
      </div>
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

  useEffect(() => {
    if (isOrderSuccess) {
      ;(async () => {
        const order = await onLoadOrder?.()

        if (!!order) {
          setOrder(order)
        } else {
          setOrder({
            details: {},
            client: {},
            product: {},
            isEmpty: true,
          })
        }
      })()
    }
    setSsrDone(true)
  }, [])

  useEffect(() => {
    if (show && (order.isViewed || order.isEmpty)) {
      setOrder({
        details: {},
        client: {},
        product: {},
        isEmpty: true,
      })
      handleClose()
    }
  }, [show, order])

  if (show && (order.isViewed || order.isEmpty)) {
    return null
  }

  return (
    <Modal
      isPreviewMobile={isPreviewMobile}
      show={ssrDone && show}
      isSidePreview={isSidePreview}
      width="60%"
      maxWidth="385px"
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
