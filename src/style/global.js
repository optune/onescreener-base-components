import { createGlobalStyle } from 'styled-components'

import { MediaSmall, MediaMobile } from './media.js'
import { ColorWhite, ColorLightGreySecond } from './color.js'

export default createGlobalStyle`
  @font-face {
    font-family: 'CeraPRO-Regular', Helvetica, sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  html {
    font-size: 14px;

    @media ${MediaSmall} {
      font-size: 12px;
    }

    @media ${MediaMobile} {
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
    font-family: 'CeraPRO-Regular', Helvetica, sans-serif;
    line-height: normal;
  }

  h1, h2, h3, h4, h5, p, li, ul, i, span, b {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  ol, ul {
    list-style: none;
  }

  #font-picker {
    box-shadow: none;
    
    > button {
      background-color: ${ColorWhite};
      border: 2px solid ${ColorLightGreySecond};
      border-radius: 2px;
      min-height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.6rem 0.58rem;
    }

    > ul {
      background-color: ${ColorWhite};
    }
  }
`
