// API
import { TeaserLinkType } from '../../../api'

// Icons
import { HeadphonesIcon } from '../../icons/teaserLinks/Headphones'
import { LinkIcon } from '../../icons/teaserLinks/Link'
import { MessageFemaleIcon } from '../../icons/teaserLinks/MessageFemale'
import { OpenseaIcon } from '../../icons/teaserLinks/Opensea'
import { PlayerIcon } from '../../icons/teaserLinks/Player'
import { ShopBag } from '../../icons/teaserLinks/ShopBag'
import { ShopDigitalBag } from '../../icons/teaserLinks/ShopDigitalBag'
import { RequestFormIcon } from '../../icons/platform/RequestForm'

export const getTeaserLinkIcon = (type) => {
  switch (type) {
    // Players
    case TeaserLinkType.LINK_VIDEO:
      return PlayerIcon
    case TeaserLinkType.LINK_MUSIC:
      return HeadphonesIcon

    // Monetization
    case TeaserLinkType.SHOP_DIGITAL:
      return ShopDigitalBag
    case TeaserLinkType.SHOP_PHYSICAL:
      return ShopBag
    case TeaserLinkType.MONETIZATION_ONE_TO_ONE:
      return MessageFemaleIcon

    // Optune

    case TeaserLinkType.OPTUNE_BOOK:
      return RequestFormIcon

    // Integrations
    case TeaserLinkType.LINK_OPENSEA:
      return OpenseaIcon

    // Basic
    default:
      return LinkIcon
  }
}
