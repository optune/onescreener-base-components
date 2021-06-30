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
  StyledTextContainer,
  StyledTitle,
  Text,
  Select,
} from './common/Components'

import { InputField } from '../../atoms/forms/InputField'

const InfoForm = ({
  name,
  images,
  price,
  description,
  quantity,
  onSelectQuantity,
  actualPrice,
}) => {
  return (
    <Fragment>
      <StyledTitle left>{name}</StyledTitle>
      <Text>images length: {images?.length}</Text>

      <div className="row marginTop marginBottom">
        <div className="column third left">
          <Select onChange={onSelectQuantity} value={quantity}>
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
            <option value={4}>4x</option>
          </Select>
        </div>
        <div className="column half right price">{actualPrice}$</div>
      </div>

      <Text left className="bold">
        {description}
      </Text>
    </Fragment>
  )
}

const CheckoutForm = ({
  name,
  images,
  price,
  description,
  quantity,
  onSelectQuantity,
  note,
  formData,
  handleFormChange,
  actualPrice,
}) => {
  return (
    <Fragment>
      <div className="checkout header"></div>
      <StyledTitle left>{name}</StyledTitle>

      <div className="row marginTop marginBottom">
        <div className="column third left">
          <Select onChange={onSelectQuantity} value={quantity}>
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
            <option value={4}>4x</option>
          </Select>
        </div>
        <div className="column half right price">{actualPrice}$</div>
      </div>

      <div className="row">
        <div className="column">
          <InputField
            fullwidth
            name="clientName"
            type="text"
            touched={false}
            error={false}
            value={formData.clientName}
            onChange={handleFormChange}
            onBlur={handleFormChange}
            placeholder="Joe Doe"
            label="Name"
            // small={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <InputField
            fullwidth
            name="email"
            type="email"
            touched={false}
            error={false}
            value={formData.email}
            onChange={handleFormChange}
            onBlur={handleFormChange}
            placeholder="youremail@example.com"
            label="Email"
            // small={true}
          />
        </div>
      </div>
      {note > '' && (
        <div className="row">
          <div className="column">
            <InputField
              fullwidth
              name="clientNote"
              type="text"
              touched={false}
              error={false}
              value={formData.clientNote}
              onChange={handleFormChange}
              onBlur={handleFormChange}
              placeholder={'Message'}
              label={note}
              // small={true}
            />
          </div>
        </div>
      )}
    </Fragment>
  )
}

const SuccessMessage = ({ isPhysical, order }) => {
  console.log({ order })
  return (
    <Fragment>
      <div className="row">
        <div className="column">
          <StyledTitle>{order.message}</StyledTitle>{' '}
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

      {isPhysical ? (
        <div className="row">
          <div className="column third left">
            <Text>Your message: {order?.details.note}</Text>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="column">
            <StyledButton>Download Link</StyledButton>
          </div>
        </div>
      )}
      <Text>You will shortly receive your receipt by e-mail </Text>
    </Fragment>
  )
}

export const ShopModal = ({
  isOrderSuccess,
  isPreviewMobile,
  isSidePreview,
  onBuyItem,
  onLoadOrder,
  onClose,
  shopItem,
  show,
  // TODO: should be open thank you page?
  accountId,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  const [orderAvailable, setOrderAvailable] = useState(true)

  const [quantity, setQuantity] = useState(1)
  const [step, setStep] = useState(isOrderSuccess ? 3 : 1)

  const initialFormData = {
    clientName: '',
    clientNote: '',
    email: '',
    city: '',
    zip: '',
    street: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  const initialOrder = {
    details: {
      note: 'Size 2',
    },
    product: {
      name: '',
      isPhysical: true,
      downloadLink: '#',
      downloadLabel: '#',
      message: 'Thank you for purchase!',
    },
  }
  const [order, setOrder] = useState(initialOrder)

  // TODO: add fields for address
  const { name, images, price, description, note, maxQuantity, isPhysical } = shopItem || {
    checkout: {},
  }

  console.log({ shopItem })

  const actualPrice = +price * +quantity

  const handleQuantityChange = (e) => setQuantity(e.target.value)

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  useEffect(() => {
    // setOrderAvailable(true)
    if (isOrderSuccess) {
      ;(async () => {
        const order = await onLoadOrder?.()
        console.log({ lOrder: order })
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
          })
        }
      })()
    }
    setSsrDone(true)
  }, [])

  useEffect(() => {
    if (!show) {
      setStep(1)
      setFormData(initialFormData)
      setQuantity(1)
    }
  }, [show])

  return (
    <Modal
      isPreviewMobile={isPreviewMobile}
      show={ssrDone && show}
      isSidePreview={isSidePreview}
      width="60%"
      // TODO: maxwidth
    >
      <Container isSidePreview={isSidePreview}>
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>
        <TextContainer>
          {step === 1 && (
            <InfoForm
              actualPrice={actualPrice}
              name={name}
              images={images}
              price={price}
              description={description}
              quantity={quantity}
              onSelectQuantity={handleQuantityChange}
            />
          )}
          {step === 2 && (
            <CheckoutForm
              actualPrice={actualPrice}
              name={name}
              images={images}
              price={price}
              description={description}
              quantity={quantity}
              onSelectQuantity={handleQuantityChange}
              formData={formData}
              handleFormChange={handleFormChange}
              note={note}
            />
          )}
          {step === 3 && (
            <SuccessMessage isPhysical={order?.isPhysical} message={order?.message} order={order} />
          )}
          Max quant: {+maxQuantity}
        </TextContainer>

        <StyledButtonContainer>
          <StyledButton
            active
            // TODO: secondary
            // TODO: disabled
            onClick={
              step === 1
                ? () => {
                    setStep(2)
                  }
                : step === 2
                ? () => {
                    onBuyItem?.({
                      // TODO: sort out all fields
                      shopItem,
                      order: {
                        details: {
                          price,
                          quantity,
                          total: actualPrice,
                          clientNote: formData.clientNote,
                        },
                        status: 'UNPAID',
                        client: {
                          email: formData.email,
                          name: formData.clientName,
                          city: formData.city || null,
                          street: formData.street || null,
                          zip: formData.zip || null,
                        },
                        product: {
                          name,
                          isPhysical,
                        },
                      },
                    })
                    // setStep(3)
                  }
                : () => {
                    const si = document.location.href.indexOf('success=')
                    const newUrl = document.location.href.slice(0, si - 1)
                    history.replaceState(null, '', newUrl)
                    onClose()
                  }
            }
          >
            {step === 1 && 'Checkout'}
            {step === 2 && `Buy for $ ${actualPrice}`}
            {step === 3 && `Close`}
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
