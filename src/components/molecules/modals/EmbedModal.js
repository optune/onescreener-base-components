/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

// API
import { TeaserLinkType } from '../../../api'

// Molecules
import { ReactPlayer } from '../embed/ReactPlayer'

// Styles
import { CloseDarkIcon } from '../../icons/CloseIcon'
import { MediaSmall } from '../../../style/media'

// Common
import { Modal, Container, CloseButton } from './common/Components'

// Utils
import { isSpotify } from '../../../utils/player/spotify'
import { isDeezer } from '../../../utils/player/deezer'
import { isApple } from '../../../utils/player/apple'
import { isMixcloud, isSoundcloud } from '../../../utils/player/music'

import { isFacebook, isWistia } from '../../../utils/player/video'

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

  let height = isSmall ? '300px' : '600px'

  if (isFacebookUrl) height = isSmall ? '300px' : '500px'

  return height
}

export const EmbedModal = ({ isSidePreview, isPreviewMobile, onClose, show, modalEmbed = {} }) => {
  const [ssrDone, setSsrDone] = useState(false)

  const isMusic = modalEmbed.type === TeaserLinkType.LINK_MUSIC

  // Media Query
  const isSmall = useMediaQuery({ query: MediaSmall })

  const musicHeight = getMusicHeight(modalEmbed.url, isSmall)
  const videoHeight = getVideoHeight(modalEmbed.url, isSmall)

  useEffect(() => {
    setSsrDone(true)
  }, [])

  /*
   * !HACKS: wistia is not embed hence trying to click Play causes onCloseOverlay to be fired
   */

  useEffect(() => {
    if (isWistia(modalEmbed.url)) {
      setTimeout(() => {
        document
          .getElementsByClassName('wistia_embed_initialized')?.[0]
          ?.addEventListener('click', (e) => e.stopPropagation())
      }, 100)
    }
  }, [modalEmbed.url])

  return (
    <Modal
      width="50%"
      height="100%"
      width="100%"
      maxHeight={isMusic ? musicHeight : videoHeight}
      maxWidth={isMusic ? '700px' : '900px'}
      isPreviewMobile={isPreviewMobile}
      show={ssrDone && show}
      isSidePreview={isSidePreview}
      onClose={onClose}
    >
      <Container
        colorBackground={isMusic ? '' : 'rgba(0,0,0,1)'}
        isSidePreview={isSidePreview}
        className="height-100"
      >
        <CloseButton onClick={onClose}>
          <CloseDarkIcon className="close-icon" />
        </CloseButton>

        <ReactPlayer
          width="100%"
          height="100%"
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
      </Container>
    </Modal>
  )
}
