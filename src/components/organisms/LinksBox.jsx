/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { MediaMobile, MediaSmall, NotMediaMobile } from '../../style/media.js'

const LinksContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 0;
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;

  ${({ isInstagramBrowser }) =>
    isInstagramBrowser &&
    css`
      bottom: 20px;
    `};
`

const LinksList = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row;
  width: 100%;
  height: auto;
  pointer-events: all;

  @media ${MediaSmall} {
    &.bottom-left {
      justify-content: center;
    }
    &.bottom-right {
      justify-content: center;
    }
    &.center-left {
      flex-flow: row;
      width: 100%;
      height: auto;
      bottom: 0;
      right: none;
      justify-content: center;
      white-space: nowrap;
    }
    &.center-right {
      flex-flow: row;
      width: 100%;
      height: auto;
      bottom: 0;
      left: none;
      justify-content: center;
      white-space: nowrap;
    }
  }

  ${({ isPreviewMobile }) =>
    isPreviewMobile
      ? css`
          bottom: 0;
          justify-content: center;
          white-space: nowrap;
        `
      : css`
          &.bottom-center {
            bottom: 0;
            justify-content: center;
            white-space: nowrap;
          }

          &.bottom-left {
            bottom: 0;
            justify-content: flex-start;
            white-space: nowrap;
          }

          &.bottom-right {
            bottom: 0;
            justify-content: flex-end;
            white-space: nowrap;
          }

          &.center-right {
            right: 0;
            width: auto;
            height: 100%;
            flex-flow: column;
            justify-content: center;
            align-items: flex-end;
          }

          &.center-left {
            left: 0;
            width: auto;
            height: 100%;
            flex-flow: column;
            justify-content: center;
            align-items: flex-start;
          }
        `}

  @media ${MediaSmall} {
            ${({ isSidePreview }) =>
              !isSidePreview &&
              css`
                &.bottom-left {
                  justify-content: center;
                }
                &.bottom-right {
                  justify-content: center;
                }
                &.center-left {
                  flex-flow: row;
                  width: 100%;
                  height: auto;
                  bottom: 0;
                  right: none;
                  justify-content: center;
                  white-space: nowrap;
                }
                &.center-right {
                  flex-flow: row;
                  width: 100%;
                  height: auto;
                  bottom: 0;
                  left: none;
                  justify-content: center;
                  white-space: nowrap;
                }
              `}
  }
`

export const LinksBox = ({
  children,
  position,
  zIndex,
  isSidePreview,
  isPreviewMobile,
  isInstagramBrowser,
}) => (
  <LinksContainer zIndex={zIndex} isInstagramBrowser={isInstagramBrowser}>
    <LinksList
      className={position > '' ? position.toLowerCase().replace('_', '-') : 'bottom-center'}
      isPreviewMobile={isPreviewMobile}
      isSidePreview={isSidePreview}
    >
      {children}
    </LinksList>
  </LinksContainer>
)
