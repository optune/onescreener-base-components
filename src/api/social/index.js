// IMPORTANT: Keep in sync with onescreene API constant Platform

export default {
  BANDCAMP: user => user, // TODO: Missing url mapper
  // BIOGRAPHY: user => user,
  FACEBOOK: user => `//facebook.com/${user}`,
  INSTAGRAM: user => `//www.instagram.com/${user}/`,
  LASTFM: user => user, // TODO: Missing url mapper
  MIXCLOUD: user => `//mixcloud.com/${user}`,
  OPTUNE: user => `//api.optune.me/v1/artist/${user}`,
  PRESSKIT: user => `//www.presskit.to/${user}`,
  SOUNDCLOUD: user => `//soundcloud.com/${user}`,
  SPOTIFY: user => `//open.spotify.com/artist/${user}`,
  TUMBLR: user => user, // TODO: Missing url mapper
  TWITTER: user => `//twitter.com/${user}`,
  YOUTUBE: user => `//youtube.com/user/${user}`,
}
