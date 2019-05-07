import React from 'react'
import styled, { css } from 'styled-components'

const width = '22'
const height = '22'
const viewBox = '0 0 22 22'

const getDimensions = () => ({
  height,
  width,
})

const getDimensionsCss = () => css`
  width: ${width}px;
  height: ${height}px;
`

const Image = styled.svg`
  ${({ noStyles }) => (!noStyles ? getDimensionsCss() : null)};
`

const defaultProps = {
  children: [
    <g fill="none" fillRule="evenodd" key="key-0">
      <path
        fill="#5F5F5F"
        d="M16.022 0A5.985 5.985 0 0 1 22 5.978v10.044A5.985 5.985 0 0 1 16.022 22H5.978A5.985 5.985 0 0 1 0 16.022V5.978A5.985 5.985 0 0 1 5.978 0h10.044zM11 5c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm6-13c-.551 0-1 .449-1 1 0 .551.449 1 1 1 .551 0 1-.449 1-1 0-.551-.449-1-1-1z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Instagram',
})
