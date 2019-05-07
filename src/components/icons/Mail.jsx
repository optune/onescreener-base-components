import React from 'react'
import styled, { css } from 'styled-components'

const width = '22'
const height = '18'
const viewBox = '0 0 22 18'

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
      <path d="M-1-3h24v24H-1z" />
      <path
        fill="#000"
        fillRule="nonzero"
        d="M22 2.983V15c0 1.652-1.348 3-3 3H3c-1.652 0-3-1.348-3-3V3.012v-.03A3.006 3.006 0 0 1 3 0h16a3.006 3.006 0 0 1 3 2.983zm-2.107-.43A1.006 1.006 0 0 0 19 2H3c-.388 0-.728.227-.893.554L11 8.779l8.893-6.225zM20 4.922l-8.427 5.898a1 1 0 0 1-1.146 0L2 4.921V15c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V4.92z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Mail',
})
