import React from 'react'
import styled, { css } from 'styled-components'

const width = '22'
const height = '17'
const viewBox = '0 0 22 17'

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
        d="M9.167 11.534V4.963l5.11 3.285-5.11 3.286zM19.189.618C20.793.818 22 2.187 22 3.8v8.895a3.214 3.214 0 0 1-2.81 3.183l-1.741.217a52.141 52.141 0 0 1-12.898 0l-1.74-.217A3.214 3.214 0 0 1 0 12.696V3.8A3.213 3.213 0 0 1 2.81.618L4.552.399A52.256 52.256 0 0 1 17.45.4l1.74.219z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Youtube',
})
