import { injectGlobal } from 'styled-components'

// FIXME: make sure fonts load in browser
injectGlobal`
  @font-face {
    font-family: 'Brandon Text Regular', sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0 auto;
    font-family: sans-serif;
    color: #5f5f5f;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    /* define grid layout desktop main mode */
    width: 100%;

    font-family: 'Brandon Text Regular', sans-serif;
  }
`
