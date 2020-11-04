/* eslint-disable react/prop-types */

import React from 'react'

import styled from 'styled-components'

const BacklinkUrl =
  'https://res.cloudinary.com/optune-me/image/upload/v1598948675/onescreener-v2/app/back_link.png'

const StyledBackLink = styled.a`
  position: ${({ isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? 'absolute' : 'fixed'};
  background-image: url(${BacklinkUrl});
  background-size: contain;
  background-color: #606060;
  background-position: center;
  background-repeat: no-repeat;
  width: 90px;
  height: 26px;
  opacity: 0.4;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;
  color: #ffffff;
  transition: opacity 0.3s ease-out;
  z-index: 9999;

  &:hover {
    opacity: 0.6;
  }

  & h1 {
    color: #808080;
    font-size: 5px;
    opacity: 0.1;
  }
`

export const BackLink = ({ isPreviewMobile }) => (
  <StyledBackLink
    href="https://www.onescreener.com"
    target="_blank"
    title="created with onescreener.com"
    isPreviewMobile={isPreviewMobile}
  >
    <h1>created by onescreener.com</h1>
  </StyledBackLink>
)
