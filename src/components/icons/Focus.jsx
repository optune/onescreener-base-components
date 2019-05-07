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
      <path d="M-1-1h24v24H-1z" />
      <path
        fill="#000"
        fillRule="nonzero"
        d="M12 19.951c2.064-.205 3.84-1.063 5.364-2.587 1.524-1.524 2.382-3.3 2.587-5.364H17a1 1 0 0 1 0-2h2.951c-.205-2.064-1.063-3.84-2.587-5.364-1.524-1.524-3.3-2.382-5.364-2.587V5a1 1 0 0 1-2 0V2.049c-2.064.205-3.84 1.063-5.364 2.587C3.112 6.16 2.254 7.936 2.049 10H5a1 1 0 0 1 0 2H2.049c.205 2.064 1.063 3.84 2.587 5.364 1.524 1.524 3.3 2.382 5.364 2.587V17a1 1 0 0 1 2 0v2.951zM22 11c0 3.027-1.082 5.638-3.222 7.778C16.638 20.918 14.027 22 11 22c-3.027 0-5.638-1.082-7.778-3.222C1.082 16.638 0 14.027 0 11c0-3.027 1.082-5.638 3.222-7.778C5.362 1.082 7.973 0 11 0c3.027 0 5.638 1.082 7.778 3.222C20.918 5.362 22 7.973 22 11z"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Focus',
})
