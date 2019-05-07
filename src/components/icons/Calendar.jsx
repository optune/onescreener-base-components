import React from 'react'
import styled, { css } from 'styled-components'

const width = '20'
const height = '22'
const viewBox = '0 0 20 22'

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
      <path d="M-2-1h24v24H-2z" />
      <path
        fill="#5F5F5F"
        fillRule="nonzero"
        d="M7 2h6V1a1 1 0 0 1 2 0v1h2c1.886 0 3 1.114 3 3v14c0 1.886-1.114 3-3 3H3c-1.886 0-3-1.114-3-3V5c0-1.886 1.114-3 3-3h2V1a1 1 0 1 1 2 0v1zm0 2v1a1 1 0 1 1-2 0V4H3.009a1 1 0 0 0-1 1v3H18V5a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V4H7zM2.009 19a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-9H2.009v9z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Calendar',
})
