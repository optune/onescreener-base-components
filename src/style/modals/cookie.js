import { MediaSmallMobile } from '../media'

export const cookieBannerStyles = `
.cc-window {
  font-family: CeraPRO !important;
  opacity: 0 !important;
  pointer-events: none !important;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out !important;
  left: 50px !important;
  top: 12px !important;
  z-index: 9999999 !important;

  &.cookie-banner-on {
    opacity: 1 !important;
    pointer-events: all !important;
  }

  @media ${MediaSmallMobile} {
    top: unset !important;
    left: unset !important;
  }
}

// #cookieconsent:desc {
  // margin: 0 0 0 16px !important;
  // display: flex !important;

  // a {
  //   padding: 0 0 0 3px !important;
  // }
// }

// .cc-compliance a {
//   margin: 0 16px 0 0 !important;
//   text-align: right !important;
//   text-transform: uppercase !important; 
// }

// .cc-window a {
//   font-family: CeraPRO !important;
//   font-weight: bold !important;
// }
// .cc-message {
//   min-width: 200px !important;
//   display: inline-block !important;
//   margin: 13px 16px 13px 16px !important;
// }

// .cc-btn {
//   padding: 0 !important;
//   margin: 13px !important;
// }
`
