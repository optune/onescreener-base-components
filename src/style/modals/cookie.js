export const cookieBannerStyles = `
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
`
