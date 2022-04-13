/* eslint-disable react/prop-types */

import React from 'react'

import styled from 'styled-components'

const BacklinkUrl =
  'https://res.cloudinary.com/optune-me/image/upload/v1598948675/onescreener-v2/app/back_link.png'

const StyledBackLink = styled.a`
  position: ${({ isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? 'absolute' : 'fixed'};
  background-image: ${({ isPro }) =>
    isPro ? null : 'linear-gradient(175.35deg,#e7fb00 2.6%, #5aeb3c 60%, #00F7CB 100%)'};

  background-size: contain;
  background-color: ${({ isPro }) => isPro && '#60606090'};
  color: ${({ isPro }) => (isPro ? '#F5f5f5' : '#0a1c3b')};
  background-position: center;
  background-repeat: no-repeat;
  width: 100px;
  height: 26px;
  opacity: 0.8;
  transform: rotate(-90deg);
  transform-origin: 139% 250%;
  right: 0;
  transition: opacity 0.3s ease-out;
  z-index: 9999;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }

  & h1 {
    color: ${({ isPro }) => (isPro ? '#F5f5f5' : '#0a1c3b')};
    font-size: 12px;
    opacity: 1;
    font-family: 'CeraPRO', Helvetica, sans-serif;
    word-wrap: break-word;
    line-height: 10px;
    text-align: center;
    margin-top: 4px;
  }

  & h1:first-line {
    font-size: 10px;
  }
`

export const BackLink = ({ artistSlug, isPreviewMobile, isPro }) => (
  <StyledBackLink
    href={`https://www.onescreener.com/sign-up?utm_source=livepage&utm_medium=banner&utm_campaign=${
      artistSlug || 'unknown'
    }`}
    target="_blank"
    title="created with onescreener"
    isPreviewMobile={isPreviewMobile}
    isPro={isPro}
  >
    <h1>
      Create your <strong>Onescreener</strong>
    </h1>
  </StyledBackLink>
)
