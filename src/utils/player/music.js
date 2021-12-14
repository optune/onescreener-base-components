import { isApple } from './apple'
import { isDeezer } from './deezer'
import { isSpotify } from './spotify'

/*
 * Constants
 */

const PlatformUrl = {
  MIXCLOUD: 'mixcloud.com',
  SOUNCLOUD: 'soundcloud.com',
}

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

  Playlists:
  https://music.apple.com/ru/album/the-marshall-mathers-lp/1453737727
  https://music.apple.com/us/album/forever/1443089524?i=1443089662


  */
const supportedPlatforms = [PlatformUrl.MIXCLOUD, PlatformUrl.SOUNCLOUD]

export const isMusicSupported = (url = '') =>
  isApple(url) ||
  isSpotify(url) ||
  isDeezer(url) ||
  supportedPlatforms.some((platform) => url.indexOf(platform) !== -1)

/*
 * Platform type check
 */

export const isMixcloud = (url = '') => url.indexOf(PlatformUrl.MIXCLOUD) !== -1
export const isSoundcloud = (url = '') => url.indexOf(PlatformUrl.SOUNCLOUD) !== -1
