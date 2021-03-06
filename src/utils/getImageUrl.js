/* global window */

const CLOUDINARY_URL = 'https://res.cloudinary.com/optune-me/image/upload'

const transformation = {
  client: ({ width, height, fullscreen = false }) =>
    `q_auto:best,f_auto,c_fit${width ? `,w_${width}` : ''}${height ? `,h_${height}` : ''}`,
  ssr: ({ isBackgroundSelected = false, fullscreen = false }) =>
    `q_auto:eco,f_auto,c_fit,w_1000,h_1000,e_pixelate:${isBackgroundSelected ? 1 : 3}`,
  ssrSocial: () => `q_auto:best,f_auto,c_fit,w_300,h_300`,
}

export const getImageUrl = (isClient, isSocial) => ({
  fullscreen,
  image,
  maxHeight = 100,
  maxWidth = 100,
  isBackgroundSelected,
  selectedBackgroundUrl,
}) => {
  let imageUrl

  if (isBackgroundSelected && !selectedBackgroundUrl) return ''

  if (isBackgroundSelected && selectedBackgroundUrl > '') {
    image = {}
    image.url = selectedBackgroundUrl
  }

  if (image?.url > '') {
    const imageParts = image.url.split('/')
    const imageSeparatorIndex = imageParts.findIndex((part) => part === 'upload') + 1
    const imagePath = imageParts.slice(imageSeparatorIndex)

    let imageTransformation = ''
    if (isClient) {
      const windowWith = window?.innerWidth || 1000
      const windowHeight = window?.innerHeight || 1000
      const imageWidth = Math.round((windowWith * maxWidth) / 100)
      const imageHeight = Math.round((windowHeight * maxHeight) / 100)
      const width = imageWidth > imageHeight ? imageWidth : undefined
      const height = imageWidth < imageHeight ? imageHeight : undefined

      imageTransformation = transformation.client({ width, height, fullscreen })
    } else if (isSocial) {
      imageTransformation = transformation.ssrSocial()
    } else {
      imageTransformation = transformation.ssr({
        isBackgroundSelected,
        fullscreen,
        width: 800,
        height: 800,
      })
    }

    imageUrl = `${CLOUDINARY_URL}/${imageTransformation}/${imagePath.join('/')}`
  }

  return imageUrl
}
