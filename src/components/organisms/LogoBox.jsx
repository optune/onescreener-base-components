/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import { Logo } from '../atoms/Logo.jsx'
import { LogoText } from '../atoms/LogoText.jsx'

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: var(--margin-logo);
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;

  &.top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &.top-center {
    align-items: flex-start;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &.top-right {
    align-items: flex-start;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &.center-left {
    align-items: center;
    justify-content: flex-start;
  }

  &.center-center {
    align-items: center;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &.center-right {
    align-items: center;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }

  &.bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
  }

  &.bottom-center {
    align-items: flex-end;
    justify-content: center;

    & > div > div {
      justify-content: center;
    }
  }

  &.bottom-right {
    align-items: flex-end;
    justify-content: flex-end;

    & > div > div {
      justify-content: flex-end;
    }
  }
`

export const LogoBox = ({ logo, zIndex, getImageUrl }) => (
  <LogoContainer
    className={logo.position > '' ? logo.position.toLowerCase().replace('_', '-') : 'top-center'}
    zIndex={zIndex}
  >
    {logo.image?.url > '' ? (
      <Logo logo={logo} getImageUrl={getImageUrl} />
    ) : (
      <LogoText logo={logo} />
    )}
  </LogoContainer>
)
