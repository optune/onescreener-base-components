/*
 * Get classnames for logo position
 */

export const getLogoPosition = ({ logo }) => {
  const positionDesktop = (logo.positionDesktop > '' && logo.positionDesktop) || logo.position

  const classnameDesktop =
    (positionDesktop > '' && positionDesktop.toLowerCase().replace('_', '-')) || 'top-center'

  const positionMobile =
    (logo.isDifferentPositions && logo.positionMobile) || logo.positionDesktop || logo.position

  const classnameMobile =
    (positionMobile > '' && positionMobile.toLowerCase().replace('_', '-')) || 'top-center'

  return {
    positionDesktop,
    positionMobile,
    classnameMobile,
    classnameDesktop,
  }
}
