import { getLogoPosition } from './getLogoSettings'
import { isPositionCenter, isPositionTop } from './getPositionSettings'

export const getContentPosition = ({ content, logo }) => {
  const positionDesktop =
    (content.positionDesktop > '' && content.positionDesktop) || content.position

  const classnameDesktop =
    (positionDesktop > '' && positionDesktop.toLowerCase().replace('_', '-')) || 'top-center'

  let positionMobile =
    (content.isDifferentPositions && content.positionMobile) ||
    content.positionDesktop ||
    content.position

  const classnameMobile =
    (positionMobile > '' && positionMobile.toLowerCase().replace('_', '-')) || 'top-center'

  let offsetDesktop, offsetMobile

  if (isPositionTop(positionMobile)) {
    const { positionMobile: logoMobile } = getLogoPosition({ logo })
    if (isPositionTop(logoMobile)) {
      offsetMobile = 'top'
    }
  }

  if (isPositionTop(positionDesktop) && isPositionCenter(positionDesktop)) {
    const { positionDesktop: logoDesktop } = getLogoPosition({ logo })
    if (isPositionTop(logoDesktop)) {
      offsetDesktop = 'top'
    }
  }

  return {
    positionDesktop,
    positionMobile,
    classnameMobile,
    classnameDesktop,
    offsetDesktop,
    offsetMobile,
  }
}
