import { createGlobalStyle } from 'styled-components'

import { green, white, grey } from '../style/colors.js'
import BrandonTextRegular from './brandon-text-regular.woff2'

// FIXME: make sure fonts load in browser
export default createGlobalStyle`
  @font-face {
    font-family: 'Brandon Text Regular', sans-serif;
    src: url(${BrandonTextRegular}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0 auto;
    color: #5f5f5f;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    /* define grid layout desktop main mode */
    width: 100%;

    font-family: 'Brandon Text Regular', sans-serif;
  }
`
