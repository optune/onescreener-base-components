import React from 'react'
import styled, { css } from 'styled-components'

const width = '22'
const height = '21'
const viewBox = '0 0 22 21'

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
      <path d="M-1-2h24v24H-1z" />
      <path
        fill="#5F5F5F"
        d="M21.657 15.14c-2.16-.561-3.815-1.858-4.654-3.64 0-.001.002-.006.005-.009h.001l2.011-1.564c.459-.358.643-.968.46-1.52a1.382 1.382 0 0 0-1.559-.916l-1.407.252c.387-2.354-.074-4.443-1.297-5.884C14.2.66 12.702 0 11 0 9.3 0 7.8.66 6.783 1.86 5.559 3.302 5.099 5.392 5.49 7.76c-.601-.108-1.403-.26-1.403-.26a1.37 1.37 0 0 0-1.569.91c-.183.55.001 1.158.46 1.514l2.02 1.565c-.842 1.793-2.494 3.09-4.656 3.65a.46.46 0 0 0-.342.478c.029.38.172.682.425.898.521.444 1.333.373 2.048.312.302-.026.754-.066.835-.04.348.436.358 1.084.358 1.088 0 .254.205.459.458.459H5.96c.505 0 1.147.354 1.828.73.937.517 1.999 1.103 3.213 1.103 1.215 0 2.277-.586 3.213-1.103.68-.376 1.323-.73 1.828-.73h1.834a.46.46 0 0 0 .458-.457c0-.006.01-.654.32-1.057.119-.059.573-.018.873.007.714.061 1.527.132 2.047-.312.254-.216.397-.518.426-.898a.458.458 0 0 0-.342-.477"
      />
    </g>,
  ],
  viewBox,
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Snapchat',
})
