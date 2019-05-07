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
        d="M3 2h14c1.886 0 3 1.114 3 3v14c0 1.886-1.114 3-3 3H3c-1.886 0-3-1.114-3-3V5c0-1.886 1.114-3 3-3zm-.991 17a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1V8H2.009v11zM5 0a1 1 0 0 1 1 1v1H4V1a1 1 0 0 1 1-1zm9 0a1 1 0 0 1 1 1v1h-2V1a1 1 0 0 1 1-1z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Calendar2',
})
