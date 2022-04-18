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

/* 
  Podcast links for testing:

  https://open.spotify.com/episode/4ktnKuP66TGPi1BQiSZdWZ?si=9608f1be13a544ff

  https://open.spotify.com/episode/7E0ozwnfSdJzF4dQzqhz3y?si=6OBNJLtaTQybkfmHbuk9FA

  https://open.spotify.com/episode/3U4wMKyvMUhB83qf8FaA3I?si=cebd9fab0b5c4609

  https://open.spotify.com/episode/1k7ofXS8KOle5Gj1Ov40Cj?si=XjfVcFEkTUadfViioVaEeg

*/

export const isSpotifyPodcast = (url = '') => {
  if (!isSpotify(url)) return false
  if (url.indexOf('/episode/') !== -1) return true

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
