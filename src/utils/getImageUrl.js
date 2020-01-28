/* global window */

const CLOUDINARY_URL = 'https://res.cloudinary.com/optune-me/image/upload'

const transformation = {
  ssr: ({ fullscreen = false }) =>
    `q_auto:low,f_auto,${fullscreen ? `c_mfit,w_800,h_800` : 'c_fit'}`,

  client: ({ width = 1000, height = 1000, fullscreen = false }) =>
    `q_auto:best,f_auto,${fullscreen ? `c_mfit,w_${width},h_${height}` : 'c_fit'}`,
}

export const getImageUrl = isClient => ({ image, fullscreen }) => {
  let imageUrl

  if (image && image.url > '') {
    let imageTransformation = ''

    if (isClient) {
      const width = window.innerWidth
      const height = window.innerHeight

      imageTransformation = transformation.client({ width, height, fullscreen })
    } else {
      imageTransformation = transformation.ssr({ fullscreen })
    }

    let imageVersion = image.version
    if (!imageVersion) {
      imageVersion = image.url.split('/').slice(-5)[0]
    }

    imageUrl = `${CLOUDINARY_URL}/${imageTransformation}/${imageVersion}/${image.public_id}`
  }

  return imageUrl
}
