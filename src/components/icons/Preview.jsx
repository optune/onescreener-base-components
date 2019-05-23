import React from 'react'
import styled, { css } from 'styled-components'

const width = '32'
const height = '26'
const viewBox = '0 0 32 26'

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

  & use[id='black'] {
    fill: #000;
    transition: fill 0.3s ease-out;
  }

  & use[id='white'] {
    fill: #fff;
    transition: fill 0.3s ease-out;
  }
`

const defaultProps = {
  children: [
    <defs key="key-0">
      <path
        id="s-3d4a82ba12-b"
        d="M.106 11.553c.14-.281.404-.75.788-1.346a20.492 20.492 0 0 1 2.251-2.89C5.661 4.631 8.62 3 12 3c3.38 0 6.339 1.632 8.855 4.316a20.492 20.492 0 0 1 2.25 2.891c.385.596.649 1.065.79 1.346a1 1 0 0 1 0 .894c-.141.281-.405.75-.79 1.346a20.492 20.492 0 0 1-2.25 2.89C18.339 19.369 15.38 21 12 21c-3.38 0-6.339-1.632-8.855-4.316a20.492 20.492 0 0 1-2.25-2.891 15.188 15.188 0 0 1-.79-1.346 1 1 0 0 1 0-.894zm2.468 1.154c.575.89 1.254 1.781 2.03 2.61C6.777 17.631 9.255 19 12 19c2.745 0 5.224-1.368 7.395-3.684A18.513 18.513 0 0 0 21.86 12a18.513 18.513 0 0 0-2.464-3.316C17.224 6.368 14.745 5 12 5 9.255 5 6.776 6.368 4.605 8.684A18.513 18.513 0 0 0 2.14 12c.126.218.27.455.433.707zM16 12c0 2.552-1.448 4-4 4s-4-1.448-4-4 1.448-4 4-4 4 1.448 4 4zm-2 0c0-1.448-.552-2-2-2s-2 .552-2 2 .552 2 2 2 2-.552 2-2z"
      />
      <filter
        id="s-3d4a82ba12-a"
        width="150%"
        height="166.7%"
        x="-25%"
        y="-33.3%"
        filterUnits="objectBoundingBox"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="2"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
      </filter>
    </defs>,
    <g fill="none" fillRule="evenodd" key="key-1">
      <path d="M4 1h24v24H4z" />
      <g fillRule="nonzero" transform="translate(4 1)">
        <use
          id="black"
          filter="url(#s-3d4a82ba12-a)"
          xlinkHref="#s-3d4a82ba12-b"
        />
        <use id="white" fillRule="evenodd" xlinkHref="#s-3d4a82ba12-b" />
      </g>
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Preview',
})
