/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'

// API
import { TeaserLinkType } from '../../../api'

// Molecules
import { ReactPlayer } from '../embed/ReactPlayer'
import { isOpensea, OpenseaEmbed } from '../../..'

// Styles
import { CloseDarkIcon } from '../../icons/CloseIcon'
import { MediaSmall } from '../../../style/media'

// Common
import { Modal, Container, CloseButton } from './common/Components'

// Utils
import { isSpotify } from '../../../utils/teaserLinks/players/spotify'
import { isDeezer } from '../../../utils/teaserLinks/players/deezer'
import { isApple } from '../../../utils/teaserLinks/players/apple'
import { isMixcloud, isSoundcloud } from '../../../utils/teaserLinks/players/music'

import { isFacebook, isWistia } from '../../../utils/teaserLinks/players/video'

const getMusicHeight = (url, isSmall) => {
  const isSpotifyUrl = isSpotify(url)
  const isDeezerUrl = isDeezer(url)
  const isAppleUrl = isApple(url)
  const isMixcloudUrl = isMixcloud(url)
  const isSoundcloudUrl = isSoundcloud(url)

  let height = '200px'

  if (isSpotifyUrl) height = isSmall ? '400px' : '580px'
  if (isDeezerUrl) height = '62px'
  if (isMixcloudUrl) height = '180px'
  if (isSoundcloudUrl) height = '600px'
  if (isAppleUrl) height = '150px'

  return height
}

const getVideoHeight = (url, isSmall) => {
  const isFacebookUrl = isFacebook(url)

  let height = isSmall ? '400px' : '505px'

  if (isFacebookUrl) height = isSmall ? '400px' : '500px'

  return height
}

const getEmbedSize = ({ url, isSmall, isVideo, isMusic, isNft }) => {
  let height = '300px'
  let width = '700px'

  if (isVideo) {
    width = '900px'
    height = getVideoHeight(url, isSmall)
  }
  if (isMusic) height = getMusicHeight(url, isSmall)
  if (isNft) {
    width = '670px'
    height = '210px'
  }

  return { height, width }
}

const fixModalClose = ({ className }) => {
  setTimeout(() => {
    document
      .getElementsByClassName(className)?.[0]
      ?.addEventListener('click', (e) => e.stopPropagation())
  }, 100)
}

export const EmbedModal = ({ isSidePreview, isPreviewMobile, onClose, show, modalEmbed = {} }) => {
  const [ssrDone, setSsrDone] = useState(false)

  const isVideo = modalEmbed.type === TeaserLinkType.LINK_VIDEO
  const isMusic = modalEmbed.type === TeaserLinkType.LINK_MUSIC
  const isNft = modalEmbed.type === TeaserLinkType.LINK_OPENSEA

  // Media Query
  const isSmall = useMediaQuery({ query: MediaSmall })

  const { height: embedHeight, width: embedWidth } = getEmbedSize({
    url: modalEmbed.url,
    isSmall,
    isVideo,
    isMusic,
    isNft,
  })

  useEffect(() => {
    setSsrDone(true)
  }, [])

  /*
   * !HACKS: wistia is not embed hence trying to click Play causes <Modal>'s onClose to be fired
   */

  useEffect(() => {
    if (isWistia(modalEmbed.url)) {
      // wistia_embed_initialized
      fixModalClose({ className: 'wistia_embed_initialized' })
    }

    if (isOpensea(modalEmbed.url)) {
      // nft-card
      fixModalClose({ className: 'nft-card' })
    }
  }, [modalEmbed.url])

  return (
    <Modal
      width="50%"
      height="100%"
      width="100%"
      maxHeight={embedHeight}
      maxWidth={embedWidth}
      isPreviewMobile={isPreviewMobile}
      show={ssrDone && show}
      isSidePreview={isSidePreview}
      onClose={onClose}
    >
      <Container
        colorBackground={isMusic ? '' : 'rgba(0,0,0,1)'}
        isSidePreview={isSidePreview}
        className={classNames({
          ['height-100']: !isVideo,
          ['ratio']: isVideo,
          ['wrapper-16x9']: isVideo,
        })}
      >
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>

        {isNft ? (
          <OpenseaEmbed url={modalEmbed.url} />
        ) : (
          <ReactPlayer
            width="100%"
            height="100%"
            className={classNames({
              ['ratio']: isVideo,
              ['inner-16x9']: isVideo,
            })}
            url={modalEmbed.url}
            playing={!!modalEmbed.autoplay}
            muted={!!modalEmbed.autoplay || !!modalEmbed.mute}
            controls={true}
            config={{
              soundcloud: {
                playerVars: {},
              },
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  rel: 0,
                },
              },
            }}
          />
        )}
      </Container>
    </Modal>
  )
}
