/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

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

    .logo-container {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &.top-center {
    align-items: flex-start;
    justify-content: center;

    .logo-container {
      align-items: center;
      justify-content: flex-start;
    }
  }

  &.top-right {
    align-items: flex-start;
    justify-content: flex-end;

    .logo-container {
      align-items: flex-end;
      justify-content: flex-start;
    }
  }

  &.center-left {
    align-items: center;
    justify-content: flex-start;

    .logo-container {
      align-items: flex-start;
      justify-content: center;
    }
  }

  &.center-center {
    align-items: center;
    justify-content: center;

    .logo-container {
      align-items: center;
      justify-content: center;
    }
  }

  &.center-right {
    align-items: center;
    justify-content: flex-end;

    .logo-container {
      align-items: flex-end;
      justify-content: center;
    }
  }

  &.bottom-left {
    align-items: flex-end;
    justify-content: flex-start;

    .logo-container {
      align-items: flex-start;
      justify-content: flex-end;
    }
  }

  &.bottom-center {
    align-items: flex-end;
    justify-content: center;

    .logo-container {
      align-items: center;
      justify-content: flex-end;
    }
  }

  &.bottom-right {
    align-items: flex-end;
    justify-content: flex-end;

    .logo-container {
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
`

export const LogoBox = ({ position, children, ...other }) => (
  <LogoContainer
    className={position > '' ? position.toLowerCase().replace('_', '-') : 'top-center'}
    {...other}
  >
    {children}
  </LogoContainer>
)
