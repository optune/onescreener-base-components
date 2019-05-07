export default {
  facebook: user => `//facebook.com/${user}`,
  instagram: user => `//www.instagram.com/${user}/`,
  spotify: user => `//open.spotify.com/artist/${user}`,
  soundcloud: user => `//soundcloud.com/${user}`,
  twitter: user => `//twitter.com/${user}`,
  youtube: user => `//youtube.com/user/${user}`,
  mixcloud: user => `//mixcloud.com/${user}`,
  optune: user => `//api.optune.me/v1/artist/${user}`,
  presskit: user => `//www.presskit.to/${user}`,
  bio: user => user,
}
