// Styles
export { default as GlobalStyle } from './style/global.js' // global styles

// Atoms
export { Logo } from './components/atoms/Logo.jsx'
export { SpotifyPlayer } from './components/atoms/SpotifyPlayer.jsx'
export { ApplePlayer } from './components/atoms/ApplePlayer.jsx'
export { DeezerPlayer } from './components/atoms/DeezerPlayer.jsx'

// Templates
export { Page } from './components/templates/Page.jsx'
// export { PageSidePreview } from './components/templates/PageSidePreview'

// Platform Icons
export { PlatformLink, PlatformLinks, Links } from './components/icons/platform/index.jsx'

export { MediaSmall, MediaMobile, NotMediaSmall } from './style/media.js'

export { getGigs } from './api/gigs/index.js'

export { renderHtml } from './utils/renderHtml.js'
export { getImageUrl } from './utils/getImageUrl.js'
export { getFavionUrl } from './utils/getFaviconUrl.js'
