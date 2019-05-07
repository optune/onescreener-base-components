import React from 'react'
import styled, { css } from 'styled-components'

const width = '20'
const height = '24'
const viewBox = '0 0 20 24'

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
        d="M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 4a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2H5zm0 14a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2H5zM5 8a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H5zm0 6a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H5zm0-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H5z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Bio',
})
