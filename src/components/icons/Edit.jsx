import React from 'react'
import styled, { css } from 'styled-components'

const width = '20'
const height = '20'
const viewBox = '0 0 20 20'

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
        fill="#6F717D"
        fillRule="nonzero"
        d="M18.815.98A3.198 3.198 0 0 0 16.58 0a3.64 3.64 0 0 0-2.414 1.056L1.827 13.418a.625.625 0 0 0-.168.288c-.268 1-1.622 5.44-1.634 5.484a.625.625 0 0 0 .593.8.505.505 0 0 0 .2 0c.05 0 4.628-1.493 5.377-1.718a.723.723 0 0 0 .268-.156c.474-.475 11.66-11.55 12.402-12.319A3.463 3.463 0 0 0 20 3.348 3.412 3.412 0 0 0 18.815.981zm-3.097.38l2.864 2.88L6.818 16.077 4 13.2 15.718 1.36z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Edit',
})
