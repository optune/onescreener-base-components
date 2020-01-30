/* global window */

const CLOUDINARY_URL = 'https://res.cloudinary.com/optune-me/image/upload'

const transformation = {
  ssr: ({ fullscreen = false }) => `q_auto:eco,f_auto,c_fit,w_1000,h_1000,e_pixelate:3`,

  client: ({ width = 1000, height = 1000, fullscreen = false }) =>
    `q_auto:best,f_auto,${fullscreen ? `c_mfit` : 'c_fit'},w_${width},h_${height}`,
}

export const getImageUrl = isClient => ({ image, fullscreen, maxWidth = 100, maxHeight = 100 }) => {
  let imageUrl

  if (image && image.url > '') {
    const imageParts = image.url.split('/')
    const imageSeparatorIndex = imageParts.findIndex(part => part === 'upload') + 1
    const imagePath = imageParts.slice(imageSeparatorIndex)

    let imageTransformation = ''
    if (isClient) {
      const width = Math.round((window.innerWidth * maxWidth) / 100)
      const height = Math.round((window.innerHeight * maxHeight) / 100)

      imageTransformation = transformation.client({ width, height, fullscreen })
    } else {
      imageTransformation = transformation.ssr({ fullscreen })
    }

    imageUrl = `${CLOUDINARY_URL}/${imageTransformation}/${imagePath.join('/')}`
  }

  return imageUrl
}
