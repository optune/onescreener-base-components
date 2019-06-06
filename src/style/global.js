import { createGlobalStyle } from 'styled-components'

import { poison, white, grey } from './colors.js'
import { MediaSmall } from './media.js'

// FIXME: make sure fonts load in browser
export default createGlobalStyle`
  @font-face {
    font-family: 'Brandon Text Regular', sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  :root {
    --basic-font-size: 100%;
    
    --margin-logo: 64px;
    --logo-size-0: 100px; 
    --logo-size-1: 150px; 
    --logo-size-2: 200px; 
    --logo-size-3: 250px; 
    --logo-size-4: 300px;

    --margin-links: 32px;
  }

  @media ${MediaSmall} {
    :root {
      --basic-font-size: 80%;
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
    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }
`
