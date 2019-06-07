import { createGlobalStyle } from 'styled-components'

import { MediaSmall } from './media.js'

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

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1.0rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  p {
    font-size: 1rem;
  }
`
