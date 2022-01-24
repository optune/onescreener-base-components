import { createGlobalStyle } from 'styled-components'

import { MediaSmall, MediaMobile } from './media.js'
import { ColorWhite, ColorLightGreySecond } from './color.js'

// Styles
import { cookieBannerStyles } from './modals/cookie.js'

export const globalStyles = `
html {
  font-size: 14px;

  @media ${MediaSmall} {
    font-size: 12px;

  }

  @media ${MediaMobile} {
    font-size: 10px;

    ${cookieBannerStyles}
  }
}

body {
  min-height: 100%;
  padding: 0;
  margin: 0 auto;
  background-color: #FAFAFA;
  display: flex;
  justify-content: center;
  /* define grid layout desktop main mode */
  width: 100%;
  font-family: 'CeraPRO', Helvetica, sans-serif;
  line-height: normal;

  &.ReactModal__Body--open {
    overflow:hidden;
  }



  @media ${MediaSmall} {
    &.noscroll {
      overflow-y: hidden;

      #render-target {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;

        overflow-y: scroll;
      }
    }
  }
}

h1, h2, h3, h4, h5, p, li, ul, i, span, b {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

a {
  text-decoration: none;
  color: inherit;
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

.ratio {
  &.inner {
    &-16x9 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &.wrapper {
    &-16x9 {
      height: unset;
      padding-top: 56.25%;
    }
  }
}

`

export default createGlobalStyle`
  ${globalStyles}
`
