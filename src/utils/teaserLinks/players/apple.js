export const isApple = (url = '') => url.indexOf('music.apple.com') !== -1

export const getAppleUrl = (url = '') => {
  let trueUrl, temp

  if (url.indexOf('music.apple.com') !== -1) {
    temp = url.split('/')
    temp[2] = temp[2].replace(temp[2], 'embed.' + temp[2])
    if (temp.indexOf('?app=music') === -1) {
      temp.push('?app=music')
    }
    trueUrl = temp.join('/')
  }

  return trueUrl
}
