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
        fill="#000"
        fillRule="nonzero"
        d="M15 4h4a1 1 0 1 1 0 2h-1v13c0 1.886-1.114 3-3 3H5c-1.886 0-3-1.114-3-3V6H1a1 1 0 1 1 0-2h4V3c0-.818.3-1.543.879-2.121A2.926 2.926 0 0 1 8 0h4c1.886 0 3 1.114 3 3v1zm-2 0V3c0-.781-.219-1-1-1H8a.93.93 0 0 0-.707.293A.93.93 0 0 0 7 3v1h6zm3 2H4v13c0 .781.219 1 1 1h10c.781 0 1-.219 1-1V6zm-9 4a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm4 0a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Trash',
})
