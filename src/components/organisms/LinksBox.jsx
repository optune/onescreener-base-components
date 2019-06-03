/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const LinksContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 20px;
  z-index: ${({ zIndex }) => zIndex};
`

const LinksList = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 3.6rem;

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
    width: 3.6rem;
    height: 100%;
    flex-flow: column;
    justify-content: center;
  }

  &.center-left {
    left: 0;
    width: 3.6rem;
    height: 100%;
    flex-flow: column;
    justify-content: center;
  }
`

export const LinksBox = ({ children, position, zIndex }) => (
  <LinksContainer zIndex={zIndex}>
    <LinksList
      className={
        position > ''
          ? position.toLowerCase().replace('_', '-')
          : 'bottom-center'
      }
    >
      {children}
    </LinksList>
  </LinksContainer>
)
