export const getBackground = ({ url, color = 'transparent', designColor }) => {
  let isRgb = color > '' && color.startsWith('rgb')
  let hasColor = color > '' && color !== 'transparent'
  let hasUrl = url > ''
  let background = 'transparent'

  if (hasColor) background = `${hasUrl ? `url(${url}), ` : ''}${color}`

  if (hasUrl && !isRgb) background = `${hasColor && !isRgb ? `${color}, ` : ''}url(${url})`

  return background
}
