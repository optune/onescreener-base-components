/* global window */

const CLOUDINARY_URL = 'https://res.cloudinary.com/optune-me/image/upload'

const DEFAULT_FAVICON = 'https://d2cu5zba7j2d0m.cloudfront.net/favicon/favicon.ico'

const transformation = {
  web: (size = 32) => `q_auto:eco,f_auto,c_fit,w_${size},h_${size}/`,
}

export const getFavionUrl = ({ image }) => {
  let imageUrl = DEFAULT_FAVICON

  if (image?.url > '') {
    const imageParts = image.url.split('/')
    const imageSeparatorIndex = imageParts.findIndex((part) => part === 'upload') + 1
    const imagePath = imageParts.slice(imageSeparatorIndex)

    let imageTransformation = image.format === 'ico' ? '' : transformation.web()

    imageUrl = `${CLOUDINARY_URL}/${imageTransformation}${imagePath.join('/')}`
  }
  return imageUrl
}
