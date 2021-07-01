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
  image,
  price,
  isPhysical,
  description,
  quantity,
  onSelectQuantity,
  actualPrice,
}) => {
  return (
    <Fragment>
      <StyledTitle left>{name}</StyledTitle>
      <Text>Image TBA: {image?.url}</Text>
      <div className="row marginTop marginBottom">
        <div className="column third left">
          {isPhysical && (
            <Select onChange={onSelectQuantity} value={quantity}>
              <option value={1}>1x</option>
              <option value={2}>2x</option>
              <option value={3}>3x</option>
              <option value={4}>4x</option>
            </Select>
          )}
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
  image,
  price,
  description,
  isPhysical,
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
      <Text>Image TBA: {image?.url}</Text>

      <div className="row marginTop marginBottom">
        <div className="column third left">
          {isPhysical && (
            <Select onChange={onSelectQuantity} value={quantity}>
              <option value={1}>1x</option>
              <option value={2}>2x</option>
              <option value={3}>3x</option>
              <option value={4}>4x</option>
            </Select>
          )}
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
              placeholder={'Add message'}
              label={note}
              // small={true}
            />
          </div>
        </div>
      )}
      {isPhysical && (
        <Fragment>
          <div className="row">
            <div className="column">
              <InputField
                fullwidth
                name="street"
                type="text"
                touched={false}
                error={false}
                value={formData.street}
                onChange={handleFormChange}
                onBlur={handleFormChange}
                placeholder={'Enter street name and number'}
                label={'Address'}
                // small={true}
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <InputField
                fullwidth
                name="city"
                type="text"
                touched={false}
                error={false}
                value={formData.city}
                onChange={handleFormChange}
                onBlur={handleFormChange}
                placeholder={'Enter the city you live in'}
                label={'City'}
                // small={true}
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <InputField
                fullwidth
                name="zip"
                type="text"
                touched={false}
                error={false}
                value={formData.zip}
                onChange={handleFormChange}
                onBlur={handleFormChange}
                placeholder={'Zip'}
                label={'Zip code'}
                // small={true}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export const ShopModal = ({
  isPreviewMobile,
  isSidePreview,
  onBuyItem,
  onClose,
  shopItem,
  show,
  // TODO: should be open thank you page?
  accountId,
}) => {
  const [ssrDone, setSsrDone] = useState(false)

  const [quantity, setQuantity] = useState(1)
  const [step, setStep] = useState(1)

  const initialFormData = {
    clientName: '',
    clientNote: '',
    email: '',
    city: '',
    zip: '',
    street: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  // TODO: add fields for address
  const { name, image, price, description, note, maxQuantity, isPhysical } = shopItem || {
    checkout: {},
  }

  console.log({ MODAL: shopItem })

  const actualPrice = +price * +quantity

  const handleQuantityChange = (e) => setQuantity(e.target.value)

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  useEffect(() => {
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
      {/* // TODO: fix overflow y */}
      <Container isSidePreview={isSidePreview} className={isPhysical && step === 2 && 'overflow-y'}>
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>
        <TextContainer className="checkout">
          {step === 1 && (
            <InfoForm
              actualPrice={actualPrice}
              name={name}
              image={image}
              price={price}
              description={description}
              isPhysical={isPhysical}
              quantity={quantity}
              onSelectQuantity={handleQuantityChange}
            />
          )}
          {step === 2 && (
            <CheckoutForm
              actualPrice={actualPrice}
              name={name}
              image={image}
              price={price}
              description={description}
              quantity={quantity}
              onSelectQuantity={handleQuantityChange}
              formData={formData}
              isPhysical={isPhysical}
              handleFormChange={handleFormChange}
              note={note}
            />
          )}
        </TextContainer>

        <StyledButtonContainer className="gradient">
          <StyledButton
            active
            // TODO: secondary
            // TODO: disabled
            onClick={
              step === 1
                ? () => {
                    setStep(2)
                  }
                : () => {
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
                  }
            }
          >
            {step === 1 && 'Checkout'}
            {step === 2 && `Buy for $ ${actualPrice}`}
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
