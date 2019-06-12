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
        fill="#6F717D"
        fillRule="nonzero"
        d="M11.545.162l10 6.5A1 1 0 0 1 22 7.5v7a1 1 0 0 1-.455.838l-10 6.5a1 1 0 0 1-1.09 0l-10-6.5A1 1 0 0 1 0 14.5v-7a1 1 0 0 1 .455-.838l10-6.5a1 1 0 0 1 1.09 0zM11 2.192l-9 5.85v5.915l9 5.85 9-5.85V8.043l-9-5.85zm0 11.087l9.427-6.598a1 1 0 0 1 1.146 1.638l-10 7a1 1 0 0 1-1.146 0l-10-7a1 1 0 1 1 1.146-1.638L11 13.279zm0-4.558l-9.427 6.598a1 1 0 0 1-1.146-1.638l10-7a1 1 0 0 1 1.146 0l10 7a1 1 0 1 1-1.146 1.638L11 8.721zM12 21a1 1 0 0 1-2 0v-6.5a1 1 0 1 1 2 0V21zM10 1a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0V1z"
      />
    </g>,
  ],
  viewBox,
}

export const PublishIcon = Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Publish',
})
