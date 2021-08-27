/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect, useMemo } from 'react'
import ImageViewer from 'react-images-viewer'

// API
import { CurrencySign } from '../../../api'

// Styles
import { CloseDarkIcon } from '../../icons/CloseIcon'

// Common
import {
  Modal,
  Container,
  CloseButton,
  TextContainer,
  ImageRow,
  StyledButton,
  StyledButtonContainer,
  StyledTitle,
  Header,
  Text,
  Select,
  ImageBackground,
} from './common/Components'

import { InputField } from '../../atoms/forms/InputField'
import { debounce } from '../../../utils/debounce'

const InfoForm = ({
  name,
  images,
  getImageUrl,
  maxQuantity,
  currency,
  isPhysical,
  description,
  quantity,
  onSelectQuantity,
  actualPrice,
}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const handleOpen = (index) => () => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }
  const handleClose = () => setViewerIsOpen(false)

  const handleNext = () => setCurrentImage(currentImage + 1)
  const handlePrevious = () => setCurrentImage(currentImage - 1)

  const imgs = useMemo(
    () =>
      images?.map(({ file }) => ({
        src: getImageUrl({ image: file, maxHeight: 1024, maxWidth: 1024 }),
        thumbnail: getImageUrl({ image: file, maxHeight: 300, maxWidth: 300 }),
        srcSet: [
          getImageUrl({ image: file, maxHeight: 1024, maxWidth: 1024 }),
          getImageUrl({ image: file, maxHeight: 800, maxWidth: 800 }),
          getImageUrl({ image: file, maxHeight: 500, maxWidth: 500 }),
          getImageUrl({ image: file, maxHeight: 300, maxWidth: 300 }),
        ],
      })),
    [images]
  )

  console.log({ imgs, viewerIsOpen })

  return (
    <Fragment>
      {!!imgs && (
        <ImageViewer
          imgs={imgs}
          currImg={currentImage}
          isOpen={viewerIsOpen}
          onClickPrev={handleNext}
          onClickNext={handlePrevious}
          onClose={handleClose}
        />
      )}

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
      <ImageRow center={images?.length <= 2}>
        <div className="scroll">
          {images?.map((i, index) => {
            return (
              <div key={i.file.public_id} className="image-box" onClick={handleOpen(index)}>
                <ImageBackground imageUrl={getImageUrl({ image: i.file })} />
                <img src={getImageUrl({ image: i.file }) || ''} alt={`product image ${index}`} />
              </div>
            )
          })}
        </div>
      </ImageRow>
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
        <div className="column half right price">
          {actualPrice} {currency}
        </div>
      </div>

      <Text left className="bangers" fontSize="1rem">
        {description}
      </Text>
    </Fragment>
  )
}

const CheckoutForm = ({
  actualPrice,
  currency,
  description,
  emailTouched,
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
  validEmail,
}) => {
  return (
    <Fragment>
      <div className="checkout header"></div>
      <div className="row">
        <ImageRow className="small">
          <img src={imageUrl || ''} alt="product" />
        </ImageRow>
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
        <div className="column half right price">
          {actualPrice} {currency}
        </div>
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
            touched={emailTouched || formData.email > ''}
            error={!validEmail && formData.email > ''}
            errorMessage="Email is not valid"
            value={formData.email}
            onChange={handleFormChange}
            onFocus={onEmailTouch}
            onBlur={(e) => onValidateEmail(e.target.value)}
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

const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

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
  const [validEmail, setValidEmail] = useState(true)
  const [emailTouched, setEmailTouched] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const {
    name,
    images,
    price,
    currency,
    description,
    note,
    maxQuantity,
    isPhysical,
  } = shopItem || {
    checkout: {},
  }

  const currencySign = CurrencySign[currency] || '$'
  const actualPrice = +parseFloat(+price * +quantity).toFixed(2)

  const disabled =
    step === 2 &&
    (formData.email === '' ||
      !validEmail ||
      emailTouched ||
      formData.clientName === '' ||
      (isPhysical ? !(formData.city > '' && formData.zip > '' && formData.street > '') : false))

  const onValidateEmail = (email) => {
    setEmailTouched(false)

    const isValid = email.match(regexEmail)

    if (!isValid) {
      setValidEmail(false)
      return
    }

    setValidEmail(true)
    return
  }

  const _onValidateEmail = debounce(onValidateEmail, 650)

  const handleQuantityChange = (e) => setQuantity(e.target.value)

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (e.target.name === 'email') {
      setEmailTouched(true)
      setValidEmail(true)
      _onValidateEmail(e.target.value)
    }
  }

  const onEmailTouch = () => {
    setValidEmail(true)
    setEmailTouched(true)
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
      className="checkout"
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
              currency={currencySign}
              imageUrl={!!images?.[0]?.file && getImageUrl({ image: images[0].file })}
              images={images}
              getImageUrl={getImageUrl}
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
              currency={currencySign}
              description={description}
              emailTouched={emailTouched}
              formData={formData}
              handleFormChange={handleFormChange}
              imageUrl={
                !!images?.[0]?.file &&
                getImageUrl({ image: images[0].file, maxWidth: 50, maxHeight: 50 })
              }
              isPhysical={isPhysical}
              maxQuantity={maxQuantity}
              name={name}
              note={note}
              onEmailTouch={onEmailTouch}
              onSelectQuantity={handleQuantityChange}
              onValidateEmail={onValidateEmail}
              price={price}
              quantity={quantity}
              validEmail={validEmail}
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
                            currency,
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
              (buttonDisabled
                ? 'Redirecting to checkout...'
                : `Buy for ${currencySign} ${actualPrice}`)}
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
