import { createGlobalStyle } from 'styled-components'

import { poison, white, grey } from './colors.js'
import { MediaSmall } from './media.js'

// FIXME: make sure fonts load in browser
export default createGlobalStyle`
  @font-face {
    font-family: 'Brandon Text Regular', sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  html {
    font-size: 14px;

    @media ${MediaSmall} {
      font-size: 10px;
    }
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0 auto;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    /* define grid layout desktop main mode */
    width: 100%;
    font-family: 'Brandon Text Regular', sans-serif;
  }

  p {
    font-size: 1rem;
  }
`
