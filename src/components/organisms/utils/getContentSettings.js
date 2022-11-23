import { getLogoPosition, isLogoTop } from './getLogoSettings'

export const isContentTop = (position) => position.includes('TOP_')

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

  if (isContentTop(positionMobile)) {
    const { positionMobile: logoMobile } = getLogoPosition({ logo })
    if (isLogoTop(logoMobile)) {
      offsetMobile = 'top'
    }
  }

  if (isContentTop(positionDesktop)) {
    const { positionDesktop: logoDesktop } = getLogoPosition({ logo })
    if (isLogoTop(logoDesktop)) {
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
