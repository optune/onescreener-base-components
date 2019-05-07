import React from 'react'
import styled, { css } from 'styled-components'

const width = '23'
const height = '14'
const viewBox = '0 0 23 14'

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
        d="M13.732 4.614A3.213 3.213 0 0 1 16.5 7.792C16.5 9.56 15.06 11 13.292 11H3.667A3.67 3.67 0 0 1 0 7.333a3.67 3.67 0 0 1 3.861-3.659A5.04 5.04 0 0 1 8.708 0a5.049 5.049 0 0 1 5.024 4.614zm4.063 6.832a.503.503 0 0 1-.43-.763 5.428 5.428 0 0 0 .828-2.872 5.442 5.442 0 0 0-.84-2.897.496.496 0 0 1 .16-.689.507.507 0 0 1 .693.159 6.421 6.421 0 0 1 .995 3.427 6.43 6.43 0 0 1-.977 3.398.506.506 0 0 1-.43.237zm2.413 1.846a.501.501 0 0 1-.42-.777 8.428 8.428 0 0 0 1.428-4.723 8.428 8.428 0 0 0-1.427-4.723.497.497 0 0 1 .14-.693.506.506 0 0 1 .698.139 9.423 9.423 0 0 1 1.597 5.277 9.423 9.423 0 0 1-1.597 5.277.504.504 0 0 1-.419.223z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Mixcloud',
})
