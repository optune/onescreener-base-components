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
  ImageContainer,
  StyledButton,
  StyledButtonContainer,
  StyledTitle,
  Header,
  Text,
  Select,
} from './common/Components'

import { InputField } from '../../atoms/forms/InputField'

const InfoForm = ({
  name,
  imageUrl,
  maxQuantity,
  isPhysical,
  description,
  quantity,
  onSelectQuantity,
  actualPrice,
}) => {
  return (
    <Fragment>
      <div className="row marginBottom">
        <div className="column left">
          <StyledTitle as="div" className="bangers" left>
            {name}
          </StyledTitle>
        </div>
        {maxQuantity > 0 && (
          <div className="column third right ">
            <Text as="div" className="bangers right">
              Stock: {maxQuantity}
            </Text>
          </div>
        )}
      </div>
      {/* <Text>Image TBA: {image?.url}</Text> */}
      <ImageContainer>
        <img src={imageUrl || ''} alt="product" />
      </ImageContainer>
      <div className="row marginTop marginBottom">
        <div className="column third left">
          {isPhysical && (
            <Select onChange={onSelectQuantity} value={quantity}>
              {[1, 2, 3, 4].map((n) => {
                let la = +maxQuantity - +n
                if (maxQuantity === 0 || la >= 0)
                  return <option key={n} value={n}>{`${n}x`}</option>

                return null
              })}
            </Select>
          )}
        </div>
        <div className="column half right price">{actualPrice}$</div>
      </div>

      <Text left className="bangers" fontSize="1rem">
        {description}
      </Text>
    </Fragment>
  )
}

const CheckoutForm = ({
  actualPrice,
  description,
  formData,
  handleFormChange,
  imageUrl,
  isPhysical,
  maxQuantity,
  name,
  note,
  onEmailTouch,
  onSelectQuantity,
  onValidateEmail,
  price,
  quantity,
}) => {
  return (
    <Fragment>
      <div className="checkout header"></div>
      <div className="row">
        <ImageContainer className="small">
          <img src={imageUrl || ''} alt="product" />
        </ImageContainer>
        <StyledTitle className="bangers no-margin" left>
          {name}
        </StyledTitle>
      </div>

      <div className="row marginTop marginBottom">
        <div className="column third left">
          {isPhysical && (
            <Select onChange={onSelectQuantity} value={quantity}>
              {[1, 2, 3, 4].map((n) => {
                let la = +maxQuantity - +n
                if (maxQuantity === 0 || la >= 0)
                  return <option key={n} value={n}>{`${n}x`}</option>

                return null
              })}
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
            required
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
            onFocus={onEmailTouch}
            onBlur={onValidateEmail}
            placeholder="youremail@example.com"
            label="Email"
            required
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
                required
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
                required
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
                required
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
  getImageUrl,
  isPreviewMobile,
  isSidePreview,
  onBuyItem,
  onClose,
  shopItem,
  show,
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
  const [validEmail, setValidEmail] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const { name, image, price, description, note, maxQuantity, isPhysical } = shopItem || {
    checkout: {},
  }

  const actualPrice = +price * +quantity

  console.log({ step })
  const disabled =
    step === 2 &&
    (formData.email === '' ||
      !validEmail ||
      emailTouched ||
      formData.clientName === '' ||
      (isPhysical ? !(formData.city > '' && formData.zip > '' && formData.street > '') : false))

  const handleQuantityChange = (e) => setQuantity(e.target.value)

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onEmailTouch = () => setEmailTouched(true)

  const onValidateEmail = (e) => {
    let email = e.target.value

    setEmailTouched(false)

    if (!email) {
      setValidEmail(false)
      return
    }

    let parts = email.split('@')

    if (parts.length > 2 || !parts[1].includes('.') || parts[0] === '' || parts[1] === '') {
      setValidEmail(false)
      return
    }

    let endParts = parts[1].split('.')

    if (endParts.length > 2 || endParts[0] === '' || endParts[1] === '') {
      setValidEmail(false)
      return
    }

    setValidEmail(true)
  }

  const handleEnableButton = () => setButtonDisabled(false)
  const handleDisableButton = () => setButtonDisabled(true)

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
      width="45%"
      maxWidth="365px"
      height="auto"
      maxHeight="80%"
    >
      <Container isSidePreview={isSidePreview} className={isPhysical && step === 2 && 'overflow-y'}>
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>

        <Header>
          <Text className="bold" fontSize="1.2rem">
            {step === 1 ? 'Shop' : 'Checkout'}
          </Text>
        </Header>
        <TextContainer className="checkout">
          {step === 1 && (
            <InfoForm
              actualPrice={actualPrice}
              description={description}
              imageUrl={!!image?.file && getImageUrl({ image: image.file })}
              isPhysical={isPhysical}
              maxQuantity={maxQuantity}
              name={name}
              onSelectQuantity={handleQuantityChange}
              price={price}
              quantity={quantity}
            />
          )}
          {step === 2 && (
            <CheckoutForm
              actualPrice={actualPrice}
              description={description}
              formData={formData}
              handleFormChange={handleFormChange}
              imageUrl={
                !!image?.file && getImageUrl({ image: image.file, maxWidth: 50, maxHeight: 50 })
              }
              isPhysical={isPhysical}
              name={name}
              maxQuantity={maxQuantity}
              note={note}
              onEmailTouch={onEmailTouch}
              onSelectQuantity={handleQuantityChange}
              onValidateEmail={onValidateEmail}
              price={price}
              quantity={quantity}
            />
          )}
        </TextContainer>

        <StyledButtonContainer className="gradient">
          <StyledButton
            // active={!disabled}
            disabled={disabled || buttonDisabled}
            onClick={
              step === 1
                ? () => {
                    setStep(2)
                  }
                : () => {
                    !disabled &&
                      onBuyItem?.({
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
                        enableButton: handleEnableButton,
                        disableButton: handleDisableButton,
                      })
                  }
            }
          >
            {step === 1 && 'Checkout'}
            {step === 2 &&
              (buttonDisabled ? 'Redirecting to checkout...' : `Buy for $ ${actualPrice}`)}
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
