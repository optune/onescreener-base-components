import { createGlobalStyle } from 'styled-components'

import { MediaSmall, MediaMobile } from './media.js'

// FIXME: make sure fonts load in browser
export default createGlobalStyle`
  @font-face {
    font-family: 'Brandon Text Regular', sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  :root {
    --basic-font-size: 14px;
  }

  @media ${MediaSmall} {
    :root {
      --basic-font-size: 12px;
    }
  }

  @media ${MediaMobile} {
    :root {
      --basic-font-size: 10px;
    }
  }

  html {
    font-size: var(--basic-font-size);
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
    line-height: normal;
  }
`
