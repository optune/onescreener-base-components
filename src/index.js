// SCSS
import './style/scss/app.scss'

// Atoms
export { Logo } from './components/atoms/Logo.jsx'
export { SpotifyPlayer } from './components/atoms/SpotifyPlayer.jsx'
export { ApplePlayer } from './components/atoms/ApplePlayer.jsx'
export { DeezerPlayer } from './components/atoms/DeezerPlayer.jsx'
export { OpenseaEmbed } from './components/atoms/OpenseaEmbed'
export { BackLink } from './components/atoms/BackLink.jsx'
export { Title } from './components/atoms/text/Title.js'
export { Subtitle } from './components/atoms/text/Subtitle.js'
export { Row } from './components/atoms/layout/Row'
export { Column } from './components/atoms/layout/Column'

// Molecules
export { UpgradeOverlay } from './components/molecules/UpgradeOverlay'
export { PageLoading } from './components/molecules/loaders/PageLoading'
export { ComponentLoading } from './components/molecules/loaders/ComponentLoading'
export { ReactPlayer } from './components/molecules/embed/ReactPlayer'

// Templates
export { Page } from './components/templates/Page.jsx'

// Platform Icons
export { PlatformLink } from './components/molecules/links/PlatformLink'
export { PlatformLinks } from './components/molecules/links/PlatformLinks'
export { Links } from './components/molecules/links/Links'

// Icons
export { ArrowUpDownIcon } from './components/icons/navigation/Arrow'
export { CloseDarkIcon } from './components/icons/CloseIcon.js'
export { ImageFileIcon } from './components/icons/content/ImageFile'
export { ListIcon } from './components/icons/content/List'
export { MovieIcon } from './components/icons/content/Movie'
export { GigsIcon } from './components/icons/platform/Gigs'
// export { ErrorIcon } from './components/icons/ErrorIcon'
export { ErrorOutline as ErrorIcon } from '@styled-icons/material/ErrorOutline'
export { UserPlusIcon } from './components/icons/page/UserPlus'
export { UserMinusIcon } from './components/icons/page/UserMinus'
export { PeopleIcon } from './components/icons/info/People'
export { CheckIcon } from './components/icons/info/Check'

// API
export { getGigs } from './api/gigs/index.js'

// Utils
export { renderHtml } from './utils/renderHtml.js'
export { getBackground } from './utils/getBackground.js'
export { getImageUrl } from './utils/getImageUrl.js'
export { getFavionUrl } from './utils/getFaviconUrl.js'
export { getTeaserLinkIcon } from './components/organisms/utils/getTeaserLinkIcon'
export { useAuthLock } from './utils/useAuthLock'
export { MediaQueryProps } from './utils/MediaQueryProps'
export { isSpotify } from './utils/teaserLinks/players/spotify'
export { isApple } from './utils/teaserLinks/players/apple'
export { isBandsintown } from './utils/teaserLinks/integrations/bandsintown'
export { isDeezer } from './utils/teaserLinks/players/deezer'
export { isVideoSupported } from './utils/teaserLinks/players/video'
export { isMusicSupported } from './utils/teaserLinks/players/music'
export { isOpensea, getOpenseaUrl } from './utils/teaserLinks/integrations/opensea'
export { getTeaserLinkTagColors } from './components/organisms/utils/getTeaserLinksSettings'
export { debounce } from './utils/debounce'

// Styles
export { default as GlobalStyle, globalStyles } from './style/global.js' // global styles
export { auth0Styles } from './style/modals/auth0.js'

export {
  FontSizeXLarge,
  FontSizeBig,
  FontSizeLarge,
  FontSizeMedium,
  FontSizeMicro,
  FontSizeMin,
  FontSizeNano,
  FontSizeSmall,
  FontSizeTiny,
  DEFAULT_LOGO_FONT,
  DEFAULT_TEASER_LINKS_FONT,
} from './style/font'

export {
  MediaDesktop,
  MediaSmallDesktop,
  MediaSmall,
  MediaTinyMobile,
  MediaSmallMobile,
  MediaMobile,
  NotMediaSmall,
  ZIndex1,
  ZIndex2,
  ZIndex3,
  ZIndex4,
} from './style/media'

export {
  ForegroundColor,
  BackgroundColor,
  ColorPampas,
  ColorHaitiRGB,
  ColorHarlequinRGB,
  ColorWaterloo,
  ColorHavelockBlue,
  ColorHawkesBlue,
  ColorDarkestGrey,
  ColorDarkGrey,
  ColorSoftGrey,
  ColorSofterGrey,
  ColorDustyGray,
  ColorGold,
  ColorSilver,
  ColorShipCove,
  ColorBackdrop,
  ColorBackdropDark,
} from './style/color.js'

export {
  ShadowNormal,
  ShadowSoft,
  ShadowUltraSoft,
  ShadowButton,
  ShadowButtonLight,
  ShadowButtonSharp,
  ShadowButtonSharpHover,
} from './style/shadow'

export {
  SizeNano,
  SizeMicro,
  SizeMini,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  SizeMediumLarge,
  SizeXLarge,
  SizeXXLarge,
} from './style/size'
