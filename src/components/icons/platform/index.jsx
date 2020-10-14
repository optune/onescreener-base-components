/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

// Social Icons
import { AboutIcon } from './About.jsx'
import { ArtoIcon } from './Arto.jsx'
import { AwsIcon } from './Aws.jsx'
import { AmazonIcon } from './Amazon.jsx'
import { AppleMusicIcon } from './AppleMusic.jsx'
import { ArtistProfileIcon } from './ArtistProfile.jsx'
import { BandcampIcon } from './Bandcamp.jsx'
import { BaiduIcon } from './Baidu.jsx'
import { BehanceIcon } from './Behance.jsx'
import { BloggerIcon } from './Blogger.jsx'
import { BiographyIcon } from './Biography.jsx'
import { DiggIcon } from './Digg.jsx'
import { DribbbleIcon } from './Dribbble.jsx'
import { EtsyIcon } from './Etsy.jsx'
import { FacebookIcon } from './Facebook.jsx'
import { FlickrIcon } from './Flickr.jsx'
import { GigsIcon } from './Gigs.jsx'
import { GithubIcon } from './Github.jsx'
import { InstagramIcon } from './Instagram.jsx'
import { ITunesIcon } from './ITunes.jsx'
import { KikIcon } from './Kik.jsx'
import { LastFMIcon } from './LastFM.jsx'
import { LinkedinIcon } from './Linkedin.jsx'
import { MailIcon } from './Mail.jsx'
import { MediumIcon } from './Medium.jsx'
import { MessengerIcon } from './Messenger.jsx'
import { MixcloudIcon } from './Mixcloud.jsx'
import { NewsletterIcon } from './Newsletter.jsx'
import { NewsletterFormIcon } from './NewsletterForm.jsx'
import { OptuneIcon } from './Optune.jsx'
import { PressKitIcon } from './PressKit.jsx'
import { PandoraIcon } from './Pandora.jsx'
import { PicasaIcon } from './Picasa.jsx'
import { PinterestIcon } from './Pinterest.jsx'
import { PodcastIcon } from './Podcast.jsx'
import { PatreonIcon } from './Patreon.jsx'
import { QuoraIcon } from './Quora.jsx'
import { RedditIcon } from './Reddit.jsx'
import { RequestFormIcon } from './RequestForm.jsx'
import { SoundcloudIcon } from './Soundcloud.jsx'
import { SpotifyIcon } from './Spotify.jsx'
import { TechRiderIcon } from './TechRider.jsx'
import { TiktokIcon } from './Tiktok.jsx'
import { TumblrIcon } from './Tumblr.jsx'
import { TwitchIcon } from './Twitch.jsx'
import { TwitterIcon } from './Twitter.jsx'
import { YoutubeIcon } from './Youtube.jsx'
import { VimeoIcon } from './Vimeo.jsx'
import { WhatsappIcon } from './Whatsapp.jsx'
import { WechatIcon } from './Wechat.jsx'

// Miscellaneous Icons
import { MiscStarIcon } from './MiscStar.jsx'
import { MiscHeartIcon } from './MiscHeart.jsx'
import { MiscShoppingIcon } from './MiscShopping.jsx'
import { MiscCallIcon } from './MiscCall.jsx'
import { MiscClockIcon } from './MiscClock.jsx'

// Molecules
import { TextOverlay } from '../../molecules/TextOverlay'

// Media Query
import { MediaMobile, NotMediaSmall } from '../../../style/media.js'

export const PlatformLinkIcon = {
  // Optune Links
  OPTUNEARTISTPROFILE: ArtistProfileIcon,
  OPTUNEBOOKINGS: GigsIcon,
  OPTUNEREQUESTFORM: RequestFormIcon,
  OPTUNENEWSLETTER: NewsletterFormIcon,
  // Platform Links
  ARTO: ArtoIcon,
  AMAZON: AmazonIcon,
  AWS: AwsIcon,
  APPLEMUSIC: AppleMusicIcon,
  BANDCAMP: BandcampIcon,
  BAIDU: BaiduIcon,
  BEHANCE: BehanceIcon,
  BLOGGER: BloggerIcon,
  DIGG: DiggIcon,
  DRIBBBLE: DribbbleIcon,
  FACEBOOK: FacebookIcon,
  FLICKR: FlickrIcon,
  GITHUB: GithubIcon,
  INSTAGRAM: InstagramIcon,
  ITUNES: ITunesIcon,
  KIK: KikIcon,
  LASTFM: LastFMIcon,
  LINKEDIN: LinkedinIcon,
  MIXCLOUD: MixcloudIcon,
  MESSENGER: MessengerIcon,
  FACEBOOKMESSENGER: MessengerIcon,
  MEDIUM: MediumIcon,
  PANDORA: PandoraIcon,
  PATREON: PatreonIcon,
  PICASA: PicasaIcon,
  PINTEREST: PinterestIcon,
  PODCAST: PodcastIcon,
  QUORA: QuoraIcon,
  REDDIT: RedditIcon,
  SOUNDCLOUD: SoundcloudIcon,
  SPOTIFY: SpotifyIcon,
  TIKTOK: TiktokIcon,
  TUMBLR: TumblrIcon,
  TWITCH: TwitchIcon,
  TWITTER: TwitterIcon,
  YOUTUBE: YoutubeIcon,
  VIMEO: VimeoIcon,
  WHATSAPP: WhatsappIcon,
  WECHAT: WechatIcon,
  // Miscellaneous Icons
  HEART: MiscHeartIcon,
  NEWSLETTER: NewsletterIcon,
  STAR: MiscStarIcon,
  SHOPPING: MiscShoppingIcon,
  CALL: MiscCallIcon,
  CLOCK: MiscClockIcon,

  // Content (URL) Links
  ABOUT: AboutIcon,
  BIOGRAPHY: BiographyIcon,
  MAIL: MailIcon,
  PRESSKIT: PressKitIcon,
  TECHRIDER: TechRiderIcon,
}

const ShapeSize = {
  Desktop: {
    S: '51px',
    M: '62px',
    L: '73px',
  },
  Mobile: {
    S: '33px',
    M: '36px',
    L: '40px',
  },
}

const ShapeSizeSidePreview = {
  Desktop: {
    S: '33px',
    M: '36px',
    L: '40px',
  },
  Mobile: {
    S: '29px',
    M: '32px',
    L: '36px',
  },
}

const IconSize = {
  Desktop: {
    S: '26px',
    M: '32px',
    L: '42px',
  },
  Mobile: {
    S: '20px',
    M: '22px',
    L: '26px',
  },
}

const LinkWrapper = styled.a`
  text-decoration: none;
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
`

const LinkWrapperText = styled.div`
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
`

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: ${({ colorBackground }) => colorBackground};
  border-radius: ${({ circle, square }) => (circle && '50%') || (square && 'none') || '0.4rem'};
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => border / 10}rem;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: ${({ noShadow }) =>
    noShadow
      ? 'none'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)'};
  color: ${({ color }) => color};
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out, color 0.25s ease-out;

  width: ${({ isSidePreview, isPreviewMobile, size }) =>
    isPreviewMobile
      ? (isSidePreview && ShapeSizeSidePreview.Mobile[size]) || ShapeSize.Mobile[size]
      : (isSidePreview && ShapeSizeSidePreview.Desktop[size]) || ShapeSize.Desktop[size]};

  height: ${({ isSidePreview, isPreviewMobile, size }) =>
    isPreviewMobile
      ? (isSidePreview && ShapeSizeSidePreview.Mobile[size]) || ShapeSize.Mobile[size]
      : (isSidePreview && ShapeSizeSidePreview.Desktop[size]) || ShapeSize.Desktop[size]};

  margin: ${({ isSidePreview, isPreviewMobile, size, margin }) =>
    (isPreviewMobile &&
      ((size === 'L' && (isSidePreview ? '0.5rem 0rem' : '2px')) || '0.5rem 0.1rem')) ||
    margin ||
    '0.5rem 0.35rem'};

  ${({ isPreview }) =>
    isPreview &&
    css`
      @media (min-width: 737px) and (max-width: 991px) {
        max-width: ${({ size }) => `calc(${ShapeSize.Mobile[size]} + 8px)`};
        max-height: ${({ size }) => `calc(${ShapeSize.Mobile[size]} + 8px)`};
        margin: ${({ size }) => (size === 'L' && '0.5rem 0.2rem') || '0.5rem'};
      }
    `}

  @media ${MediaMobile} {
    pointer-events:none;
    width: ${({ size }) => ShapeSize.Mobile[size]};
    height: ${({ size }) => ShapeSize.Mobile[size]};
    margin: ${({ size, margin }) => margin || (size === 'L' && '2px') || '5px'};
  }

  @media ${NotMediaSmall} {
  &:hover(:focus) {
    ${({ notInteractive }) =>
      !notInteractive &&
      css`
        background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent};
        border-color: ${({ colorAccent }) => colorAccent};
        color: ${({ colorAccent }) => colorAccent};

        & .icon g {
          & path,
          line,
          circle,
          polygon,
          polyline,
          rect,
          ellipse {
            fill: ${({ colorAccent }) => colorAccent};
            stroke: ${({ colorAccent }) => colorAccent};

            &[fill='none'] {
              fill: none;
            }

            &[stroke='none'] {
              stroke: none;
            }
          }
        }
      `}
    }
  }
`
const LinkIconMapper = ({ platform, size = 'M' }) => styled(PlatformLinkIcon[platform])`
  width: ${({ isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? IconSize.Mobile[size] : IconSize.Desktop[size]};
  height: ${({ isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? IconSize.Mobile[size] : IconSize.Desktop[size]};

  ${({ isPreview }) =>
    isPreview &&
    css`
      @media (min-width: 737px) and (max-width: 991px) {
        max-width: ${({ size }) => IconSize.Mobile[size]};
        max-height: ${({ size }) => IconSize.Mobile[size]};
      }
    `}

  @media ${MediaMobile} {
    width: ${IconSize.Mobile[size]};
    height: ${IconSize.Mobile[size]};
  }

  &.icon g {
    & path,
    line,
    circle,
    polygon,
    polyline,
    rect,
    ellipse {
      fill: ${({ color }) => color};
      stroke: ${({ color }) => color};
      transition: fill 0.25s ease-out, stroke 0.25 ease-out;

      &[fill='none'] {
        fill: none;
      }

      &[stroke='none'] {
        stroke: none;
      }
    }
  }
`

export const PlatformLink = ({
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  isPreviewMobile,
  isSidePreview,
  label,
  margin,
  modalData,
  name,
  noShadow,
  platform,
  setModalData,
  size,
  square,
  target,
  text,
  url,
}) => {
  const Icon = LinkIconMapper({ platform, size })
  const labelText = (name || label || platform).replace(/\b\w/g, (l) => l.toUpperCase())

  if (url > '') {
    return (
      <LinkWrapper href={url} title={labelText} target={target || '_blank'} rel="noopener noreferrer">
        <Link
          border={border}
          circle={circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          margin={margin}
          noShadow
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          size={size || 'M'}
          square={square}
        >
          <Icon
            color={color}
            size={size}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
          />
        </Link>
      </LinkWrapper>
    )
  } else if (text > '' && setModalData) {
    return (
      <LinkWrapperText
        onClick={() => setModalData({ show: true, content: text, label: labelText })}
      >
        <Link
          border={border}
          circle={circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          margin={margin}
          noShadow
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          size={size || 'M'}
          square={square}
        >
          <Icon
            color={color}
            size={size}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
          />
        </Link>
      </LinkWrapperText>
    )
  } else {
    return (
      <Link
        border={border}
        circle={circle}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        noShadow
        isPreviewMobile={isPreviewMobile}
        isSidePreview={isSidePreview}
        isPreview
        size={size || 'M'}
        square={square}
      >
        <Icon
          color={color}
          size={size}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          isPreview
        />
      </Link>
    )
  }
}

export const PlatformLinks = Object.keys(PlatformLinkIcon).map((platform) => {
  const Icon = LinkIconMapper({ platform })
  const LinkIcon = ({
    border,
    color,
    colorAccent,
    colorBackground,
    colorBackgroundAccent,
    notInteractive,
    onClick,
  }) => (
    <LinkWrapper
      onClick={onClick}
      notInteractive={notInteractive}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Link
        border={border}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        notInteractive={notInteractive}
        size="M"
      >
        <Icon color={color} />
      </Link>
    </LinkWrapper>
  )

  return {
    platform,
    LinkIcon,
  }
})

/* 
 * Map smart links
 */

const SmartLinks = {
  OPTUNEARTISTPROFILE: '/profile',
  OPTUNEBOOKINGS: '/events',
  OPTUNEREQUESTFORM: '/request',
  OPTUNENEWSLETTER: '/newsletter',
}

const mapSmartLinks = pageUrl => link => {
  let mappedLink = link

  if (pageUrl > '' && Object.keys(SmartLinks).includes(link.platform)) {
    const queryParams = link.url?.split('?') || []
    const querySeparator = pageUrl.includes('?') ? '&' : '?'
    const query = queryParams.length > 1 ? `${querySeparator}${queryParams[1]}` : ''
    mappedLink.url = `${pageUrl || ''}${SmartLinks[link.platform]}${query}`
    mappedLink.target = '_self'
  }
  
  return mappedLink
}

/* 
 * Render Link list
 */

export const Links = ({
  content,
  isPreviewMobile,
  isSidePreview,
  links,
  linksColorState,
  modalData,
  pageUrl,
  setModalData,
}) => {
  const color = linksColorState?.colorLinks || links.colorLinks || content.color
  const colorAccent =
    linksColorState?.colorLinksAccent || links.colorLinksAccent || content.colorAccent
  const colorBackground =
    linksColorState?.colorLinksBackground || links.colorLinksBackground || content.colorBackground
  const colorBackgroundAccent =
    linksColorState?.colorLinksBackgroundAccent ||
    links.colorLinksBackgroundAccent ||
    content.colorBackgroundAccent

  return (
    <Fragment>
      {links.list
        .filter(({ platform, url }) => !!PlatformLinkIcon[platform])
        .map(mapSmartLinks(pageUrl))
        .map((link) => (
          <PlatformLink
            key={link.platform}
            border={links.border}
            circle={links.circle}
            square={links.square}
            size={links.size}
            color={color}
            colorAccent={colorAccent}
            colorBackground={colorBackground}
            colorBackgroundAccent={colorBackgroundAccent}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
            text={link.text}
            name={link.name}
            modalData={modalData}
            setModalData={setModalData}
            {...link}
          />
        ))}
    </Fragment>
  )
}
