/*
 * Constants
 */

const PlatformUrl = {
  FACEBOOK: 'facebook.com',
  WISTIA: 'wistia.com',
}

// TODO: finish refactor

const supportedPlatforms = [
  'youtube.com',
  'youtu.be',
  'twitch.tv',
  'vimeo.com',
  PlatformUrl.FACEBOOK,
  'streamable.com',
  PlatformUrl.WISTIA,
  'dailymotion.com',
  'vidyard.com',
]

/* 
  examples:

  Video:
  https://www.youtube.com/watch?v=o3Cy-DAOexE
  https://www.twitch.tv/videos/1224403195
  https://www.facebook.com/facebook/videos/10153231379946729
  https://streamable.com/moo
  https://vimeo.com/588496072
  https://home.wistia.com/medias/e4a27b971d
  https://www.dailymotion.com/video/x5e9eog
  https://video.vidyard.com/watch/YBvcF2BEfvKdowmfrRwk57

  Music:
  https://www.mixcloud.com/djjonezy/dj-jonezy-eminem-tribute-mix-charlie-sloth-rap-show-x-apple-music-1/
  https://soundcloud.com/miami-nights-1984/accelerated
  https://open.spotify.com/track/67WTwafOMgegV6ABnBQxcE?si=7d1a79b3860c4b6a
  https://www.deezer.com/ru/track/916424?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=desktop&utm_content=track-916424&deferredFl=1
  https://music.apple.com/us/album/forever/1443089524?i=1443089662
  */

export const isVideoSupported = (url = '') =>
  supportedPlatforms.some((platform) => url.indexOf(platform) !== -1)

/*
 * Platform type check
 */

export const isFacebook = (url = '') => url.indexOf(PlatformUrl.FACEBOOK) !== -1
export const isWistia = (url = '') => url.indexOf(PlatformUrl.WISTIA) !== -1
