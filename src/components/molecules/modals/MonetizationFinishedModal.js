/* eslint-disable react/prop-types */
import classNames from 'classnames'
import React, { Fragment, useState, useEffect } from 'react'

// API
import { BookingMethod, CurrencySign, adjustUrl } from '../../../api'

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

const SuccessMessage = ({ order, t }) => {
  const { isSession } = order || {}
  const isCalendly = order?.session?.bookingMethod === BookingMethod.CALENDLY

  return (
    <Fragment>
      <div className="row marginBottom">
        <div className="column">
          <Text className="bangers" fontSize="2.4rem" margin="0">
            {order?.product.message}
          </Text>
        </div>
      </div>
      <div className="row ">
        <div className="column  left">
          <InfoColumn label={t?.('page.monetization.success.order.id')} value={order?._id} third />
        </div>
      </div>

      {!isSession && (
        <Fragment>
          <div className="row marginTop">
            <Text className="bold" fontSize="1.3rem" margin="0 0 5px 0">
              {t?.('page.monetization.success.order.details')}
            </Text>
          </div>
          <div className="row ">
            <InfoColumn
              label={t?.('page.monetization.success.order.quantity')}
              value={order?.details.quantity}
              third
            />
            <InfoColumn
              label={t?.('page.monetization.success.order.price')}
              value={`${order?.details.price} ${CurrencySign[order?.details.currency] || 'USD'}`}
              third
            />
            <InfoColumn
              label={t?.('page.monetization.success.order.total')}
              value={`${order?.details.total} ${CurrencySign[order?.details.currency] || 'USD'}`}
              third
            />
          </div>
        </Fragment>
      )}

      {order?.product?.isPhysical && order?.details?.clientNote > '' ? (
        <div className="row  marginBottom">
          <InfoColumn
            label={t?.('page.monetization.success.order.clientNote')}
            value={order?.details.clientNote || '-'}
            fullwidth
            marginTop
          />
        </div>
      ) : (
        ((!isSession && !order?.product?.isPhysical) || (isSession && isCalendly)) && (
          <div className="row marginTop marginBottom">
            <div className="column">
              <StyledButton
                className="fullwidth"
                active
                onClick={() =>
                  window.open(
                    isSession && isCalendly
                      ? order.session.schedulingUrl
                      : adjustUrl(order?.product.downloadLink),
                    '_blank'
                  )
                }
              >
                {isSession && isCalendly
                  ? order?.product.downloadLabel ||
                    t?.('page.monetization.success.order.download.session')
                  : order?.product.downloadLabel ||
                    t?.('page.monetization.success.order.download.link')}
              </StyledButton>
            </div>
          </div>
        )
      )}
      <div className="row marginTop">
        <div className="column">
          <Text
            fontSize="1.1rem"
            className={classNames('info', {
              center: !isSession,
            })}
            margin="0"
          >
            {isSession
              ? t?.('page.monetization.success.order.instructions.email', {
                  email: order?.client?.email,
                })
              : t?.('page.monetization.success.order.instructions.default')}
          </Text>
        </div>
      </div>
    </Fragment>
  )
}

export const MonetizationFinishedModal = ({
  isOrderSuccess,
  isPreviewMobile,
  isSidePreview,
  onLoadOrder,
  onClose,
  shopItem,
  show,
  t,
}) => {
  const [ssrDone, setSsrDone] = useState(false)

  const initialOrder = {
    client: {},
    details: {
      clientNote: '',
    },
    product: {
      name: '',
      isPhysical: true,
      downloadLink: '#',
      downloadLabel: '#',
      message: '',
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
            session: {},
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
        session: {},
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
      onClose={handleClose}
      width="60%"
      height="90%"
      maxWidth="385px"
    >
      <Container isSidePreview={isSidePreview} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>

        <Header>
          <Text className="bold">{t?.('page.monetization.success.title')}</Text>
        </Header>
        <TextContainer className="checkout">
          <SuccessMessage order={order} t={t} />
        </TextContainer>

        <StyledButtonContainer>
          <StyledButton
            // TODO: secondary
            // TODO: disabled
            onClick={handleClose}
          >
            {t?.('page.monetization.closeButton')}
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  )
}
