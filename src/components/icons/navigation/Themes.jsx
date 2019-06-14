import React from 'react'
import styled, { css } from 'styled-components'

const width = '25'
const height = '20'
const viewBox = '0 0 24 20'

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
        fill="#27E200"
        fillRule="nonzero"
        d="M22.5 16.148h-9.75v2.314h3.75c.413 0 .75.346.75.77a.762.762 0 0 1-.75.768h-9a.762.762 0 0 1-.75-.769c0-.423.338-.769.75-.769h3.75v-2.314H1.5c-.825 0-1.5-.692-1.5-1.538V1.538C0 .692.675 0 1.5 0h21c.825 0 1.5.692 1.5 1.538V14.61c0 .846-.675 1.538-1.5 1.538zm0-14.61h-21V14.61h21V1.538z"
      />
    </g>,
  ],
  viewBox,
}

export const ThemesIcon = Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Themes',
})
