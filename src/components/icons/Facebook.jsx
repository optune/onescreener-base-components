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
        d="M11.75 22H1.215C.544 22 0 21.456 0 20.786V1.214C0 .544.544 0 1.214 0h19.572C21.456 0 22 .544 22 1.214v19.572c0 .67-.544 1.214-1.214 1.214H15.18v-8.52h2.86l.428-3.32H15.18V8.04c0-.96.267-1.616 1.645-1.616h1.758v-2.97c-.304-.04-1.347-.131-2.562-.131-2.535 0-4.27 1.547-4.27 4.389v2.448H8.884v3.32h2.867V22z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Facebook',
})
