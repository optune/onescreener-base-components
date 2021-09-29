// Styles
export { default as GlobalStyle } from './style/global.js' // global styles

// Atoms
export { Logo } from './components/atoms/Logo.jsx'
export { SpotifyPlayer } from './components/atoms/SpotifyPlayer.jsx'
export { ApplePlayer } from './components/atoms/ApplePlayer.jsx'
export { DeezerPlayer } from './components/atoms/DeezerPlayer.jsx'
export { BackLink } from './components/atoms/BackLink.jsx'

// Molecules

export { UpgradeOverlay } from './components/molecules/UpgradeOverlay'

// Templates
export { Page } from './components/templates/Page.jsx'

// Platform Icons
export { PlatformLink } from './components/molecules/links/PlatformLink'
export { PlatformLinks } from './components/molecules/links/PlatformLinks'
export { Links } from './components/molecules/links/Links'

// Icons
export { CloseDarkIcon } from './components/icons/CloseIcon.js'

export {
  MediaDesktop,
  MediaSmallDesktop,
  MediaSmall,
  MediaTinyMobile,
  MediaSmallMobile,
  MediaMobile,
  NotMediaSmall,
} from './style/media.js'

export { ForegroundColor, BackgroundColor } from './style/color.js'

export { getGigs } from './api/gigs/index.js'

export { renderHtml } from './utils/renderHtml.js'
export { getBackground } from './utils/getBackground.js'
export { getImageUrl } from './utils/getImageUrl.js'
export { getFavionUrl } from './utils/getFaviconUrl.js'
