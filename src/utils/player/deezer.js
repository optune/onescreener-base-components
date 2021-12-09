export const isDeezer = (url = '') => url.indexOf('deezer.com/') !== -1

export const isValidDeezerUrl = (url) => {
  let tempArr = url.split('/')
  let emptySlash = []

  tempArr.forEach((el, index) => el === '' && emptySlash.push(index))

  if (emptySlash.length === 2) {
    if (emptySlash[emptySlash.length - 1] !== tempArr.length - 1) {
      return false
    }
  }
  if (emptySlash.length > 2) {
    return false
  }
  return true
}

export const getDeezerUrl = (url = '', ...params) => {
  let trueUrl, temp, type, typeIndex, id

  const typeAllow = ['artist', 'playlist', 'track', 'album', 'podcast']
  const typeExist = (type) => typeAllow.some((el) => el === type)

  if (!isValidDeezerUrl(url)) {
    return null
  }

  const [format, autoplay, color, theme] = params

  if (url.indexOf('deezer.com/') !== -1) {
    try {
      temp = url.split('/')
      typeIndex = temp.findIndex((type) => typeExist(type))
      type = temp[typeIndex]

      if (!type) {
        return null
      }

      if (url.indexOf('?utm_') !== -1) {
        id = temp[typeIndex + 1].slice(0, temp[typeIndex + 1].indexOf('?'))
      } else {
        id = temp[typeIndex + 1]
      }

      if (type === 'track') {
        type = 'tracks'
      }

      if (type === 'artist') {
        type = 'radio'
        id = 'artist-' + id
      }

      trueUrl = `https://www.deezer.com/plugins/player?format=${format.toLowerCase()}&playlist=true&autoplay=${autoplay}&color=${color}&width=100%&height=100%&layout=${theme.toLowerCase()}&type=${type}&id=${id}&app_id=1`
    } catch (err) {
      return null
    }
  }
  return trueUrl
}
