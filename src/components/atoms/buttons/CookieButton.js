import React from 'react'
import styled from 'styled-components'
import { ZIndex4 } from '../../../style/media'

const Container = styled.div`
  width: 32px;
  height: 33px;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: ${ZIndex4};
  cursor: pointer;

  .close-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${ZIndex4};
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const CookieButton = ({ isOpen, onOpen, onClose }) => {
  return (
    <Container onClick={onOpen}>
      {isOpen && <div className="close-overlay" onClick={onClose} />}
      <img
        src="https://res.cloudinary.com/optune-me/image/upload/v1667405034/onescreener-v2/app/cookie-image.png"
        alt="cookie button"
      />
    </Container>
  )
}
