import { isApple } from './apple'
import { isDeezer } from './deezer'
import { isSpotify } from './spotify'

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

  */
const supportedPlatforms = ['mixcloud.com', 'soundcloud.com']

export const isMusicSupported = (url = '') =>
  isApple(url) ||
  isSpotify(url) ||
  isDeezer(url) ||
  supportedPlatforms.some((platform) => url.indexOf(platform) !== -1)
