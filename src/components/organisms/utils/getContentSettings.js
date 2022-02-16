export const getContentPosition = ({ content }) => {
  const positionDesktop =
    (content.positionDesktop > '' && content.positionDesktop) || content.position

  const classnameDesktop =
    (positionDesktop > '' && positionDesktop.toLowerCase().replace('_', '-')) || 'top-center'

  const contentPosition =
    (content.isDifferentPositions && content.positionMobile) ||
    content.positionDesktop ||
    content.position

  const classnameMobile =
    (contentPosition > '' && contentPosition.toLowerCase().replace('_', '-')) || 'top-center'

  return {
    classnameMobile,
    classnameDesktop,
  }
}
