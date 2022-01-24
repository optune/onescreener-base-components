export const isSpotify = (url = '') => {
  let temp

  if (url.indexOf('open.spotify.com') !== -1) {
    temp = url.split('/')
    if (temp.length > 3) {
      return true
    }
  } else if (url.indexOf('spotify:') !== -1) {
    temp = url.split(':')
    if (temp.length > 2) {
      return true
    }
  }

  return false
}

export const getSpotifyUrl = (url = '') => {
  let trueUrl, temp

  if (url.indexOf('open.spotify.com') !== -1) {
    temp = url.split('/')
    if (temp.length > 3) {
      temp[3] = temp[3].replace(temp[3], `embed/${temp[3]}`)
      trueUrl = temp.join('/')
    }
  } else if (url.indexOf('spotify:') !== -1) {
    temp = url.split(':')
    if (temp.length > 2) {
      temp[1] = `embed/${temp[1]}/`
      trueUrl = `https://open.spotify.com/${temp[1]}${temp[2]}`
    }
  }

  return trueUrl
}
