/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect, useMemo } from 'react'
import ImageViewer from 'react-images-viewer'

// API
import { BookingMethod, CurrencySign, TeaserLinkType } from '../../../api'

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

// Atoms
import { InputField } from '../../atoms/forms/InputField'

// Components
import { ComponentLoading } from '../loaders/ComponentLoading'

// Utils
import { debounce } from '../../../utils/debounce'
import { renderHtml } from '../../../utils/renderHtml'
import { RoundClockIcon } from '../../icons/ClockIcon'

const InfoForm = ({
  name,
  images,
  getImageUrl,
  maxQuantity,
  currency,
  isPhysical,
  description,
  isSession,
  isShop,
  duration,
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
        srcSet: [
          `${getImageUrl({ image: file, maxWidth: 100, maxHeight: 100 })} 1000w`,
          `${getImageUrl({ image: file, maxWidth: 75, maxHeight: 75 })} 450w`,
        ],
        src: getImageUrl({ image: file }),
      })),
    [images]
  )

  return (
    <Fragment>
      <ImageViewer
        imgs={imgs || []}
        currImg={currentImage}
        isOpen={viewerIsOpen}
        onClickPrev={handlePrevious}
        onClickNext={handleNext}
        onClose={handleClose}
        spinner={ComponentLoading}
      />

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
                <ImageBackground
                  imageUrl={getImageUrl({ image: i.file, maxWidth: 10, maxHeight: 10, blur: 700 })}
                />
                <img
                  src={getImageUrl({ image: i.file, maxWidth: 75, maxHeight: 75 }) || ''}
                  alt={`product image ${index}`}
                />
              </div>
            )
          })}
        </div>
      </ImageRow>
      <div className="row marginTop marginBottom">
        {isShop && isPhysical ? (
          <div className="column third left">
            <Select onChange={onSelectQuantity} value={quantity}>
              {[1, 2, 3, 4].map((n) => {
                let la = +maxQuantity - +n
                if (maxQuantity === 0 || la >= 0)
                  return <option key={n} value={n}>{`${n}x`}</option>

                return null
              })}
            </Select>
          </div>
        ) : isSession && !!duration ? (
          <Fragment>
            <div className="column auto left">
              <RoundClockIcon className="icon normal" />
            </div>
            <div className="column two-third left">
              <Text as="div" className="bangers left clip" margin="0 0 0 5px">
                {duration}
              </Text>
            </div>
          </Fragment>
        ) : (
          <div className="column third"></div>
        )}
        <div className="column third right price">
          {actualPrice} {currency}
        </div>
      </div>

      <Text as="div" left className="bangers editor" fontSize="1rem">
        {renderHtml(description)}
        <p className="white-space"></p>
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
      {/* <div className="checkout header"></div> */}
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

const stripTags = (text) => {
  const el = document.createElement('div')
  el.innerHTML = text
  return el.innerText.replace(/\s+/g, ' ')
}

const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const MonetizationModal = ({
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
    isShop,
    isSession,
    bookingMethod,
    duration: sessionDuration,
    schedulingUrl,
    length,
  } = shopItem || {
    checkout: {},
  }

  const isCalendly = bookingMethod === BookingMethod.CALENDLY

  let duration = length
  if (!duration && isCalendly) duration = `${sessionDuration} minutes`

  const currencySign = CurrencySign[currency] || 'USD'
  const actualPrice = Number(+price * +quantity).toFixed(2)

  let orderType = TeaserLinkType.MONETIZATION_ONE_TO_ONE
  if (isShop && isPhysical) orderType = TeaserLinkType.SHOP_PHYSICAL
  if (isShop && !isPhysical) orderType = TeaserLinkType.SHOP_DIGITAL

  const modalHeader = {
    1: {
      [TeaserLinkType.MONETIZATION_ONE_TO_ONE]: 'Session',
      [TeaserLinkType.SHOP_PHYSICAL]: 'Shop',
      [TeaserLinkType.SHOP_DIGITAL]: 'Shop',
    },
    2: {
      [TeaserLinkType.MONETIZATION_ONE_TO_ONE]: 'Checkout',
      [TeaserLinkType.SHOP_PHYSICAL]: 'Checkout',
      [TeaserLinkType.SHOP_DIGITAL]: 'Checkout',
    },
  }

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
      onClose={onClose}
      width="45%"
      maxWidth="365px"
      height="auto"
      className="checkout"
    >
      <Container
        isSidePreview={isSidePreview}
        className={isPhysical && step === 2 && 'overflow-y'}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>

        <Header>
          <Text className="bold" fontSize="1.2rem">
            {modalHeader[step][orderType]}
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
              isSession={isSession}
              isShop={isShop}
              duration={duration}
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
                        shopItem: {
                          ...shopItem,
                          description: stripTags(shopItem.description),
                        },
                        order: {
                          type: orderType,
                          isShop,
                          isSession,
                          session: {
                            bookingMethod,
                            duration: sessionDuration,
                            schedulingUrl,
                            length,
                          },
                          details: {
                            price,
                            currency,
                            quantity,
                            total: +actualPrice,
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
                : `Buy for ${actualPrice} ${currencySign}`)}
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
