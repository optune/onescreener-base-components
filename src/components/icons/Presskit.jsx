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
        fillRule="nonzero"
        d="M10.553.106a1 1 0 0 1 .894 0l10 5a1 1 0 0 1 0 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 0-1.788l10-5zM11 2.118L3.236 6 11 9.882 18.764 6 11 2.118zm9.553 12.988a1 1 0 1 1 .894 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 .894-1.788L11 19.882l9.553-4.776zm0-5a1 1 0 1 1 .894 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 .894-1.788L11 14.882l9.553-4.776z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Presskit',
})
