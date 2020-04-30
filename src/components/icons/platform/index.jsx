/* eslint-disable react/prop-types */
import React, { useState, Fragment } from 'react'
import styled, { css } from 'styled-components'

// Social Icons
import { AboutIcon } from './About.jsx'
import { AmazonIcon } from './Amazon.jsx'
import { AppleMusicIcon } from './AppleMusic.jsx'
import { ArtistProfileIcon } from './ArtistProfile.jsx'
import { RequestFormIcon } from './RequestForm.jsx'
import { PressKitIcon } from './PressKit.jsx'
import { GigsIcon } from './Gigs.jsx'
import { BandcampIcon } from './Bandcamp.jsx'
import { BiographyIcon } from './Biography.jsx'
import { FacebookIcon } from './Facebook.jsx'
import { InstagramIcon } from './Instagram.jsx'
import { ITunesIcon } from './ITunes.jsx'
import { LastFMIcon } from './LastFM.jsx'
import { MailIcon } from './Mail.jsx'
import { MixcloudIcon } from './Mixcloud.jsx'
import { NewsletterIcon } from './Newsletter.jsx'
import { OptuneIcon } from './Optune.jsx'
import { SoundcloudIcon } from './Soundcloud.jsx'
import { SpotifyIcon } from './Spotify.jsx'
import { TechRiderIcon } from './TechRider.jsx'
import { TumblrIcon } from './Tumblr.jsx'
import { TwitchIcon } from './Twitch.jsx'
import { TwitterIcon } from './Twitter.jsx'
import { YoutubeIcon } from './Youtube.jsx'
import { VimeoIcon } from './Vimeo.jsx'

// Miscellaneous Icons
import { MiscStarIcon } from './MiscStar.jsx'
import { MiscHeartIcon } from './MiscHeart.jsx'
import { MiscShoppingIcon } from './MiscShopping.jsx'

// Molecules
import { TextOverlay } from '../../molecules/TextOverlay'

// Media Query
import { MediaMobile, NotMediaSmall } from '../../../style/media.js'

export const PlatformLinkIcon = {
  // Optune Links
  OPTUNEARTISTPROFILE: ArtistProfileIcon,
  OPTUNEBOOKINGS: GigsIcon,
  OPTUNEREQUESTFORM: RequestFormIcon,
  // Platform Links
  AMAZON: AmazonIcon,
  APPLEMUSIC: AppleMusicIcon,
  BANDCAMP: BandcampIcon,
  FACEBOOK: FacebookIcon,
  INSTAGRAM: InstagramIcon,
  ITUNES: ITunesIcon,
  LASTFM: LastFMIcon,
  MIXCLOUD: MixcloudIcon,
  SOUNDCLOUD: SoundcloudIcon,
  SPOTIFY: SpotifyIcon,
  TUMBLR: TumblrIcon,
  TWITCH: TwitchIcon,
  TWITTER: TwitterIcon,
  YOUTUBE: YoutubeIcon,
  VIMEO: VimeoIcon,
  // Miscellaneous Icons
  HEART: MiscHeartIcon,
  NEWSLETTER: NewsletterIcon,
  STAR: MiscStarIcon,
  SHOPPING: MiscShoppingIcon,

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
    S: '36px',
    M: '36px',
    L: '40px',
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

  width: ${({ isPreviewMobile, size }) =>
    isPreviewMobile ? ShapeSize.Mobile[size] : ShapeSize.Desktop[size]};
  height: ${({ isPreviewMobile, size }) =>
    isPreviewMobile ? ShapeSize.Mobile[size] : ShapeSize.Desktop[size]};
  margin: ${({ isPreviewMobile, size, margin }) =>
    (isPreviewMobile && ((size === 'L' && '2px') || '5px')) || margin || '1rem'};

  @media ${MediaMobile} {
    width: ${({ size }) => ShapeSize.Mobile[size]};
    height: ${({ size }) => ShapeSize.Mobile[size]};
    margin: ${({ size, margin }) => margin || (size === 'L' && '2px') || '5px'};
  }

  &:hover:not(:focus) {
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
`
const LinkIconMapper = ({ platform, size = 'M' }) => styled(PlatformLinkIcon[platform])`
  width: ${({ isPreviewMobile }) =>
    isPreviewMobile ? IconSize.Mobile[size] : IconSize.Desktop[size]};
  height: ${({ isPreviewMobile }) =>
    isPreviewMobile ? IconSize.Mobile[size] : IconSize.Desktop[size]};

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
  label,
  margin,
  modalData,
  setModalData,
  noShadow,
  platform,
  isPreviewMobile,
  size,
  square,
  text,
  url,
}) => {
  const Icon = LinkIconMapper({ platform, size })
  const labelText = (label || platform).replace(/\b\w/g, l => l.toUpperCase())

  if (url > '') {
    return (
      <LinkWrapper href={url} title={labelText} target="_blank" rel="noopener noreferrer">
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
          size={size || 'M'}
          square={square}
        >
          <Icon color={color} size={size} isPreviewMobile={isPreviewMobile} />
        </Link>
      </LinkWrapper>
    )
  } else if (text > '') {
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
          size={size || 'M'}
          square={square}
        >
          <Icon color={color} size={size} isPreviewMobile={isPreviewMobile} />
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
        margin={margin}
        noShadow
        isPreviewMobile={isPreviewMobile}
        size={size || 'M'}
        square={square}
      >
        <Icon color={color} size={size} isPreviewMobile={isPreviewMobile} />
      </Link>
    )
  }
}

export const PlatformLinks = Object.keys(PlatformLinkIcon).map(platform => {
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

export const Links = ({ links, linksColorState, content, isPreviewMobile }) => {
  const [modalData, setModalData] = useState({
    show: false,
    content: '',
    label: '',
  })

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
      <TextOverlay
        border={links.border}
        circle={links.circle}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        content={modalData.content}
        isPreviewMobile={isPreviewMobile}
        label={modalData.label}
        onClose={() => setModalData({ ...modalData, show: false })}
        show={modalData.show}
        square={links.square}
      />

      {links.list
        .filter(({ platform, url }) => !!PlatformLinkIcon[platform])
        .map(link => (
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
            text={link.text}
            modalData={modalData}
            setModalData={setModalData}
            {...link}
          />
        ))}
    </Fragment>
  )
}
