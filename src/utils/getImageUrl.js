/* global window */

const CLOUDINARY_URL = 'https://res.cloudinary.com/optune-me/image/upload'

const transformation = {
  client: ({ width, height, fullscreen = false, blur }) =>
    `q_auto:best,f_auto,c_fit${width ? `,w_${width}` : ''}${height ? `,h_${height}` : ''}${
      blur ? `,e_blur:${blur}` : ''
    }`,
  ssr: ({ isBackgroundSelected = false, fullscreen = false, blur }) =>
    `q_auto:eco,f_auto,c_fit,w_${isBackgroundSelected ? 100 : 1000},h_${
      isBackgroundSelected ? 200 : 1000
    },e_pixelate:${isBackgroundSelected ? 1 : 3}${blur ? `,e_blur:${blur}` : ''}`,
  ssrSocial: ({ blur }) => `q_auto:best,f_auto,c_fit,w_300,h_300${blur ? `,e_blur:${blur}` : ''}`,
}

const getImagePath = (image) => {
  const imageParts = image.url.split('/')
  const imageSeparatorIndex = imageParts.findIndex((part) => part === 'upload') + 1
  const imagePath = imageParts.slice(imageSeparatorIndex)

  return imagePath
}

export const getImageUrl = (isClient, isSocial) => ({
  fullscreen,
  image,
  maxHeight = 100,
  maxWidth = 100,
  blur,
  isBackgroundSelected,
  selectedBackgroundUrl,
  isSidePreview,
  detached,
}) => {
  let imageUrl

  // if (isSidePreview && !detached) console.log({ isBackgroundSelected, selectedBackgroundUrl })
  // if (isSidePreview && detached)
  //   console.log({ isBackgroundSelected, selectedBackgroundUrl, separate: true })

  if (isBackgroundSelected && !selectedBackgroundUrl) return ''

  if (isBackgroundSelected && selectedBackgroundUrl > '') {
    image = {}
    image.url = selectedBackgroundUrl
  }
  // if (isSidePreview && !detached) console.log('hasImage here background')
  // if (isSidePreview && detached) console.log('hasImage here SEPAREATE')

  if (image?.url > '') {
    const imagePath = getImagePath(image)

    let imageTransformation = ''
    if (isClient) {
      const windowWith = window?.innerWidth || 1000
      const windowHeight = window?.innerHeight || 1000
      const imageWidth = Math.round((windowWith * maxWidth) / 100)
      const imageHeight = Math.round((windowHeight * maxHeight) / 100)
      const width = imageWidth > imageHeight ? imageWidth : undefined
      const height = imageWidth < imageHeight ? imageHeight : undefined

      imageTransformation = transformation.client({ width, height, fullscreen, blur })
    } else if (isSocial) {
      imageTransformation = transformation.ssrSocial({ blur })
    } else {
      imageTransformation = transformation.ssr({
        isBackgroundSelected,
        fullscreen,
        width: 800,
        height: 800,
        blur,
      })
    }

    imageUrl = `${CLOUDINARY_URL}/${imageTransformation}/${imagePath.join('/')}`
  }

  return imageUrl
}
