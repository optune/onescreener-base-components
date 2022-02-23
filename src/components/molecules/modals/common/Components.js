/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'
import SimpleBar from 'simplebar-react'

import { Button } from '../../../atoms/buttons/Button'

// Media
import { MediaMobile, MediaSmall } from '../../../../style/media.js'

// Styles
import { ForegroundColor } from '../../../../style/color'

const StyledModal = styled.div`
  position: ${({ isSidePreview }) => (isSidePreview ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  z-index: 999999;
  overflow: hidden;
  background-color: ${({ isPreviewMobile }) =>
    isPreviewMobile ? 'transparent' : 'rgba(0,0,0, 0.50)'};
  transition: opacity 0.5s ease-out;
`

const StyledModalContent = styled.div`
  position: relative;
  width: ${({ isSidePreview, isPreviewMobile, width }) =>
    isSidePreview && isPreviewMobile ? '100%' : isPreviewMobile ? '334px' : width || '50%'};
  height: ${({ isSidePreview, isPreviewMobile, height }) =>
    isSidePreview && isPreviewMobile ? '100%' : isPreviewMobile ? '520px' : height || '80%'};
  margin: ${({ isSidePreview, isPreviewMobile }) =>
      isSidePreview && isPreviewMobile ? '0' : isPreviewMobile ? '75px' : 'calc(100vh / 10)'}
    auto;
  max-height: ${({ maxHeight }) => maxHeight || 'unset'};
  max-width: ${({ maxWidth }) => maxWidth || 'unset'};

  padding: ${({ isSidePreview, isPreviewMobile }) =>
    isSidePreview && isPreviewMobile ? '50px 0 0' : '0'};
  background: ${({ isPreviewMobile }) => (isPreviewMobile ? 'rgba(0,0,0, 0.50)' : 'transparent')};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  overflow: hidden;

  @media ${MediaSmall} {
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    width: 100%;
    max-width: unset;
    height: ${({ height }) => height || 'auto'};

    &.checkout {
      height: auto;
      max-height: 100%;
    }
  }
`

export const Modal = ({
  children,
  className,
  show,
  isPreviewMobile,
  isSidePreview,
  onClose,
  width,
  maxWidth,
  height,
  maxHeight,
}) => {
  return (
    <StyledModal
      className="common-modal"
      show={show}
      isPreviewMobile={isPreviewMobile}
      isSidePreview={isSidePreview}
      onClick={onClose}
    >
      <StyledModalContent
        show={show}
        isPreviewMobile={isPreviewMobile}
        isSidePreview={isSidePreview}
        width={width}
        height={height}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        className={className}
      >
        {children}
      </StyledModalContent>
    </StyledModal>
  )
}

export const Header = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Container = styled.div`
  background: ${({ colorBackground }) => colorBackground || 'rgba(255,255,255)'};
  border-radius: 4px;
  position: relative;
  max-height: 90vh;

  &.height-100 {
    height: 100%;
  }

  &.overflow-y {
    overflow-y: auto;
    height: 100%;
  }

  .close-icon {
    width: 16px !important;
    height: 16px !important;

    g {
      path {
        fill: white !important;
        stroke: none;
      }
    }
  }

  svg.icon {
    height: 20px;
    width: 20px;

    * {
      stroke: ${ForegroundColor.secondary};
    }
  }

  .simplebar-placeholder {
    height: 0 !important;
  }

  .donate {
    width: 50%;
    height: ${({ isSidePreview }) => (isSidePreview ? '30px' : '60px')};
    text-decoration: none;
    font-size: ${({ isSidePreview }) => (isSidePreview ? '1rem' : '1.5rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ isSidePreview }) => (isSidePreview ? '10px' : '20px')};
    margin-bottom: ${({ isSidePreview }) => (isSidePreview ? '20px' : '40px')};

    background: linear-gradient(90deg, #d9b85e 5%, rgb(40 228 211 / 50%) 100%), #c4c4c4;
    color: white;

    &:hover {
      background: linear-gradient(90deg, rgb(40 228 211 / 50%) 5%, #d9b85e 100%), #c4c4c4;
    }
  }

  .price {
    font-size: 2rem;
    // font-family: Bangers, cursive;
    font-family: 'CeraPRO', Helvetica, sans-serif;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.marginTop {
      margin-top: 24px;
    }

    &.marginBottom {
      margin-bottom: 24px;
    }
  }

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    &.info-column {
      &.marginTop {
        margin-top: 8px;
      }
      .label {
        font-size: 1.2rem;
        color: ${ForegroundColor.info};
      }
      .value {
        font-size: 1.2rem;
      }
    }

    &.auto {
      width: auto;
    }

    &.fullwidth {
      width: 100%;
    }

    &.half {
      width: 50%;
    }

    &.third {
      width: 33.33%;
    }

    &.two-third {
      width: 66.66%;
    }

    &.left {
      justify-content: center;
      align-items: flex-start;
    }

    &.right {
      justify-content: center;
      align-items: flex-end;
    }

    &.space-between {
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #0a1c3b;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  cursor: pointer;
  z-index: 999;
`

export const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${({ imageUrl }) => imageUrl || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // filter: blur(0.5px);
`

export const ImageRow = styled.div`
  position: relative;
  width: 100%;
  height: 185px;
  overflow-x: auto;
  overflow-y: hidden;

  .scroll {
    position: absolute;
    top: 0;
    left: 0;
    right: ${({ center }) => (center ? '0' : 'unset')};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-box {
    position: relative;
    height: 160px;
    width: 160px;
    border-radius: 4px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 10px;
    }

    img {
      position: relative;
      height: 100%;
      width: 100%;
      border-radius: 4px;
      object-fit: contain;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 2px 8px rgba(0, 0, 0, 0.08);
    }
  }

  &.small {
    min-height: 50px;
    min-width: 50px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.08);

    img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`

export const TextContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 1rem 3rem 0 3rem;
  color: ${({ color }) => color || '#000000'};
  overflow: ${({ overflowHidden }) => (overflowHidden ? 'hidden' : 'auto')};

  @media ${MediaSmall} {
    padding: 2rem 1.5rem 0 1.5rem;
  }

  &.checkout {
    padding: 0 16px 0;
  }

  & h2,
  p {
    color: ${({ color }) => color || '#000000'};
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    word-break: break-word;
    white-space: pre-wrap;
    align-self: center;
  }

  & b {
    font-weight: bold;
  }

  & i {
    font-style: italic;
  }
`

export const StyledTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  width: 100%;

  &.bangers {
    font-family: 'CeraPRO', Helvetica, sans-serif;
    // font-family: Bangers, cursive;
    // letter-spacing: 0.05em;
    // line-height: 110%;
    // font-weight: 400;
  }

  &.no-margin {
    margin: 0;
  }
`

export const Select = styled.select`
  font-size: 1.1rem;
  width: 100%;
  padding: 10px 0;
  max-width: 60px;
`

export const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  text-align: left;
  width: 100%;
  margin: ${({ margin }) => (margin > '' ? `${margin} !important` : 'initial')};

  &.editor {
    overflow-y: auto;
    max-height: 35vh;

    > p.white-space:last-child {
      @media ${MediaMobile} {
        margin-bottom: 3.5rem;
      }
    }

    ol,
    ul {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }

    ul {
      list-style-type: disc;
    }

    ol {
      list-style-type: decimal;
    }

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.17rem;
    }

    h1,
    h2,
    h3,
    strong,
    b {
      font-weight: 600;
    }
  }

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }

  &.bold {
    font-weight: bold;
  }

  &.info {
    color: ${ForegroundColor.info};
  }

  &.clip {
    max-width: 220px;
    max-height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &.bangers {
    font-family: 'CeraPRO', Helvetica, sans-serif;
    //   font-family: Bangers, cursive;
    //   letter-spacing: 0.05em;
    //   line-height: 110%;
  }
`

export const StyledTextContainer = styled(({ isSidePreview, ...other }) => (
  <SimpleBar {...other} />
))`
  margin-top: 0.5rem;
  margin-bottom: 0;
  width: 100%;
  /* padding-right: 15px; */
  max-height: ${({ isSidePreview }) => (isSidePreview ? '150px' : '300px')};
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
`

// const getBackgroundColor = ({ secondary,  disabled,  }) =>
//   (disabled && BackgroundColor.disabled) ||
//   (secondary && BackgroundColor.secondary) ||
//   BackgroundColor.accent

// const getForegroundColor = ({ secondary,  disabled, }) =>
//   (disabled && ForegroundColor.disabled) ||
//   (secondary && ForegroundColor.secondary) ||
//   ForegroundColor.accent

export const StyledButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    @media ${MediaMobile} {
      width: 90%;
      margin: 0.5rem auto 0.5rem;
      line-height: 1;
      font-size: 13px;
      min-height: 32px;
    }
  }
  &.gradient {
    background: linear-gradient(to top, white, 75%, transparent);
  }
`

// ${({ active }) =>
// active &&
// css`
//   color: ${ForegroundColor.accent};
//   background-color: ${BackgroundColor.selected};
// `}

// &:hover {
// color: ${ForegroundColor.accent};
// background-color: ${BackgroundColor.selected};
// }

export const StyledButton = styled(Button)`
  justify-self: flex-end;
  margin: 1rem auto 1rem;

  &.fullwidth {
    width: 100%;
  }
`
