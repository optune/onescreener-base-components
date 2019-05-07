import React from 'react'
import styled, { css } from 'styled-components'

const width = '22'
const height = '12'
const viewBox = '0 0 22 12'

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
        d="M17.415 5.813a3.172 3.172 0 0 1 1.377-.313C20.56 5.5 22 6.94 22 8.708c0 1.77-1.44 3.209-3.208 3.209h-7.334a.459.459 0 0 1-.458-.459v-11c0-.253.205-.458.458-.458a5.966 5.966 0 0 1 5.957 5.813zm-16.79.604c.345 0 .625.205.625.458v3.667c0 .253-.28.458-.625.458S0 10.795 0 10.542V6.875c0-.253.28-.458.625-.458zm2.75-2.75c.345 0 .625.205.625.458v7.333c0 .253-.28.459-.625.459s-.625-.206-.625-.459V4.125c0-.253.28-.458.625-.458zm2.75.916c.345 0 .625.206.625.459v6.416c0 .253-.28.459-.625.459s-.625-.206-.625-.459V5.042c0-.253.28-.459.625-.459zM8.875.917c.345 0 .625.205.625.458v10.083c0 .253-.28.459-.625.459s-.625-.206-.625-.459V1.375c0-.253.28-.458.625-.458z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Soundcloud',
})
