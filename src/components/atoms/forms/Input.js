import React from 'react'
import styled, { css } from 'styled-components'

import {
  ForegroundColor,
  BackgroundColor,
  ColorLightGreySecond,
  ColorSecondary30,
  ColorSecondary60,
} from '../../../style/color'

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: ${({ margin, small }) => margin || (small && 0.5) || 1}rem 0;

  .input-row {
    display: flex;
    align-items: center;
    width: 100%;

    .prefix {
      font-size: ${({ big }) => (big ? 16 : 14)}px;
      padding: 0.6rem 0.58rem;
      max-width: ${({ prefixMaxWidth }) => (prefixMaxWidth ? prefixMaxWidth : 'unset')};
      color: ${ForegroundColor.secondary};

      background: ${BackgroundColor.secondary};
      border: 2px solid ${ColorLightGreySecond};
      border-radius: 2px;

      /*
      * dedicated to our all-favorite special browser Safari
      */
      @media not all and (min-resolution: 0.001dpcm) {
        @media {
          max-width: ${({ prefixMaxWidth }) =>
            prefixMaxWidth ? `calc(${prefixMaxWidth} + 3px)` : 'unset'};
          color: black;
        }
      }

      ${({ prefix }) =>
        prefix &&
        css`
          background: ${BackgroundColor.secondary};
          border: 2px solid ${ColorLightGreySecond};
          border-radius: 2px;

          border-right: none;
          margin-right: 0;
          padding-right: 0;
        `}
    }
  }
`

export const InputLabel = styled.h5`
  color: ${ColorSecondary30};
  font-size: 13px;
  margin: 0 0 5px 2px;
  font-weight: 500;
  text-transform: initial;
  align-self: ${({ left }) => (left ? 'flex-start' : 'auto')};
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'unset')};
`

const InputComponent = styled.input`
  font-size: ${({ big }) => (big ? 16 : 14)}px;
  width: ${({ prefix }) => (prefix ? 'calc(100% + 2px)' : '100%')};
  padding: 0.6rem 0.58rem;

  background: ${BackgroundColor.secondary};
  border: 2px solid ${ColorLightGreySecond};
  border-radius: 2px;

  color: ${({ error, success, valid }) =>
    (error && ForegroundColor.error) ||
    (success && ForegroundColor.success) ||
    (valid && ForegroundColor.secondary) ||
    ForegroundColor.secondary};

  ${({ prefix }) =>
    prefix &&
    css`
      background: ${BackgroundColor.secondary};
      border: 2px solid ${ColorLightGreySecond};
      border-radius: 2px;

      border-left: none;
      margin-left: -2px;
      padding-left: 0;
    `}

  &:focus {
    outline-style: none;
  }

  &::placeholder {
    color: ${ColorSecondary60};
  }
`

export const Input = ({ label, prefix, dataCyInput, onBlur, onFocus, onClick, as, ...other }) => (
  <InputWrapper prefix={prefix} {...other}>
    {label && <InputLabel>{label}</InputLabel>}
    <div className="input-row">
      {prefix > '' && (
        <input className="prefix" as="div" disabled contentEditable={false} value={prefix} />
      )}
      <InputComponent
        data-cy-input={dataCyInput}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
        as={as}
        prefix={prefix}
        {...other}
      />
    </div>
  </InputWrapper>
)
