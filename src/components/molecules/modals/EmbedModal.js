/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

// API
import { TeaserLinkType } from '../../../api'

// Molecules
import { ReactPlayer } from '../embed/ReactPlayer'

// Styles
import { CloseDarkIcon } from '../../icons/CloseIcon'

// Common
import {
  Modal,
  Container,
  CloseButton,
  TextContainer,
  StyledButton,
  StyledButtonContainer,
  StyledTextContainer,
  StyledTitle,
} from './common/Components'

export const EmbedModal = ({ isSidePreview, isPreviewMobile, onClose, show, modalEmbed = {} }) => {
  const [ssrDone, setSsrDone] = useState(false)

  const isMusic = modalEmbed.type === TeaserLinkType.LINK_MUSIC

  useEffect(() => {
    setSsrDone(true)
  }, [])

  return (
    <Modal
      width="50%"
      height={isMusic ? '20%' : '50%'}
      maxHeight={isMusic ? '150px' : ''}
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
