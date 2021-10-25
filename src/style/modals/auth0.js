import { BackgroundColor, ForegroundColor } from '../color'
import { MediaMobile, NotMediaSmall } from '../media'

// TODO: try to get rid of "!important" where it's possible
export const auth0Styles = `
.auth0-lock {

  &.auth0-lock-opened-in-frame {
    width: 100%;
  }

  .auth0-lock-content-body-wrapper {
    padding-top: 0;
    min-height: 200px;

    @media ${NotMediaSmall} {
      overflow-y: hidden;
    }

  }
 
  /* For loading spinner position  */

  @media ${MediaMobile} {
    &-cred-pane-internal-wrapper {
      height: 100% !important;
    }
  
    .auth0-loading-screen {
      top: 25px !important;
      left: calc(50% - 15px) !important;
    }
  }

  &-content-body-wrapper {
    height: 100%;

    .auth0-loading {
      top: 70px !important;
    }
  }

  &-center {
    position: relative !important;
    padding: 0 !important;
  }

  &-widget {
    margin: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  &-content-wrapper {
    width: 100% !important;
  }

  &-header {
    display: none !important;
  }

  &-center,
  &-widget,
  &-widget-container,
  &-content-wrapper {
    height: 100% !important;
  }

  &-form {
    padding: 0 !important;
  }

  &-terms {
    padding: 10px 2px !important;
    text-align: left !important;
    background-color: transparent !important;
  }


  &-input-wrap-with-icon,
  input {
    background-color: ${BackgroundColor.special} !important;
  }

  input {
    &[type='checkbox'] {
      top: 2px !important;
    }
    &::placeholder {
      color: ${ForegroundColor.subsecondary} !important;
    }
  }

  &.auth0-lock  {
    .auth0-lock-terms  {
      color: ${ForegroundColor.secondaryAttention} !important;

      a {
        color: ${ForegroundColor.secondary} !important;
        text-decoration: underline;
      }
    }
  }
}

.auth0-lock {
  &.auth0-lock {
    .auth0-lock {
      &-submit {
        border-radius: 4px !important;
        height: 48px !important;
        padding: 0 !important;

        &[disabled] {
          background-color: ${BackgroundColor.disabledDark} !important;
          color: ${ForegroundColor.subsecondary} !important;
        }

        /* For loading on submit button  */

        .auth0-loading-container .auth0-loading {
          top: -2px !important;
          left: 47% !important;
          width: 20px !important;
          height: 20px !important;
        }

        .auth0-label-submit {
          height: auto !important;
          line-height: 20px !important;
          font-weight: bold;

          svg.icon-text {
            display: none;
          }
        }
      }
    }
  }
}
`
