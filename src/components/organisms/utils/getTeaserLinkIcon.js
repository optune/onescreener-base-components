// API
import { TeaserLinkType } from '../../../api'

// Icons
import { HeadphonesIcon } from '../../icons/teaserLinks/Headphones'
import { LinkIcon } from '../../icons/teaserLinks/Link'
import { MessageFemaleIcon } from '../../icons/teaserLinks/MessageFemale'
import { PlayerIcon } from '../../icons/teaserLinks/Player'
import { ShopBag } from '../../icons/teaserLinks/ShopBag'
import { ShopDigitalBag } from '../../icons/teaserLinks/ShopDigitalBag'

export const getTeaserLinkIcon = (type) => {
  switch (type) {
    case TeaserLinkType.LINK_VIDEO:
      return PlayerIcon
    case TeaserLinkType.LINK_MUSIC:
      return HeadphonesIcon

    case TeaserLinkType.SHOP_DIGITAL:
      return ShopDigitalBag
    case TeaserLinkType.SHOP_PHYSICAL:
      return ShopBag

    case TeaserLinkType.LINK_ONE_TO_ONE:
      return MessageFemaleIcon

    default:
      return LinkIcon
  }
}
