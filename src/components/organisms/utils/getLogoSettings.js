/*
 * Get classnames for logo position
 */

export const getLogoPosition = ({ logo }) => {
  const positionDesktop = (logo.positionDesktop > '' && logo.positionDesktop) || logo.position

  const classnameDesktop =
    (positionDesktop > '' && positionDesktop.toLowerCase().replace('_', '-')) || 'top-center'

  const logoPosition =
    (logo.isDifferentPositions && logo.positionMobile) || logo.positionDesktop || logo.position

  const classnameMobile =
    (logoPosition > '' && logoPosition.toLowerCase().replace('_', '-')) || 'top-center'

  return {
    classnameMobile,
    classnameDesktop,
  }
}
