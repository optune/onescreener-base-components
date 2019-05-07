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
      <path
        fill="#5F5F5F"
        d="M22 .074a10.83 10.83 0 0 1-3.14 1.53C17.49.029 15.831-.386 13.882.358c-1.95.744-2.91 2.16-2.882 4.246v1c-3.81.098-6.81-1.412-9-4.53 0 0-4 9 5 13-2.114 1.435-4.447 2.101-7 2 9 5 20 0 20-11.5 0-.28-.028-.556-.08-.83A7.576 7.576 0 0 0 22 .074z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Twitter',
})
