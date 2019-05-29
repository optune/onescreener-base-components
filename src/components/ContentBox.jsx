/* eslint-disable react/prop-types */
import React from 'react'
import ReactPlayer from 'react-player'

import { renderHtml } from '../utils/renderHtml.js'

import ColoredTextContainer from './ColoredTextContainer.jsx'
import Gigs from './Gigs.jsx'
import { getGigs } from '../api/gigs/index.js'

const ContentBox = ({ content, gigAPI, isEdit }) => {
  const { type, color, text, mediaUrl } = content
  const { api, slug } = gigAPI || { api: '', slug: '' }

  switch (type) {
    case 'GIGS':
      // id="gigs" is required for non-server-side rendered container on export
      return (
        <ColoredTextContainer color={color} id="gigs">
          <Gigs getGigs={getGigs} api={api} slug={slug} />
        </ColoredTextContainer>
      )

    case 'MEDIA':
      return <ReactPlayer url={mediaUrl} playing={!isEdit} />

    default:
      return (
        <ColoredTextContainer color={color}>
          {renderHtml(text)}
        </ColoredTextContainer>
      )
  }
}

export default ContentBox
