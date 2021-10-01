import { createGlobalStyle } from 'styled-components'

import { MediaSmall, MediaMobile } from './media.js'
import { ColorWhite, ColorLightGreySecond } from './color.js'

export default createGlobalStyle`
  html {
    font-size: 14px;

    @media ${MediaSmall} {
      font-size: 12px;
  
    }

    @media ${MediaMobile} {
      font-size: 10px;


      .cc-window {
        flex-direction: row !important;
        font-family: CeraPRO !important;
        padding: 0 !important;
        align-items: center !important;
        position: relative !important;
        height: 40px !important;
        margin: 0 !important;
        background: #EAECF0 !important;
        box-shadow: none !important;
        width: 100% !important;
        font-size: 12px !important;
        opacity: 0 !important;
        top: -40px !important;
        transition: transform 0.3s ease-out, opacity 0.3s ease-out !important;
        max-width: unset !important;
        right: 0 !important;

        &.cookie-banner-on {
          opacity: 1 !important;
          transform: translateY(40px);
        }
      }
  
      #cookieconsent:desc{
        margin: 0 0 0 16px !important;
        display: flex !important;
  
        a {
          padding: 0 0 0 3px !important;
        }
      }
  
      .cc-compliance a {
        margin: 0 16px 0 0 !important;
        text-align: right !important;
        text-transform: uppercase !important; 
      }
  
      .cc-window a {
        font-family: CeraPRO !important;
        font-weight: bold !important;
      }
      .cc-message {
        min-width: 200px !important;
        display: inline-block !important;
        margin: 13px 16px 13px 16px !important;
      }
  
      .cc-btn {
        padding: 0 !important;
        margin: 13px !important;
      }
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
`
