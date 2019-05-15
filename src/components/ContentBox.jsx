/* eslint-disable react/prop-types */
import React from 'react'
import ReactPlayer from 'react-player'

import ColoredTextContainer from './ColoredTextContainer.jsx'
import Gigs from './Gigs.jsx'
import { getGigs } from '../api/gigs/index.js'

const ContentBox = ({ content, gigAPI, text, media }) => {
  const { type, color } = content || { type: '', color: '' }
  const { url } = media || { url: '' }
  const { api, slug } = gigAPI || { api: '', slug: '' }
  const { html } = text || { html: '' }
  return 'Text' === type ? (
    <ColoredTextContainer
      color={color}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : 'Gigs' === type ? (
    // id="gigs" is required for non-server-side rendered container on export
    <ColoredTextContainer color={color} id="gigs">
      <Gigs getGigs={getGigs} api={api} slug={slug} />
    </ColoredTextContainer>
  ) : 'Media' === type ? (
    <ReactPlayer url={url} playing={true} />
  ) : (
    <div>
      Content of type {'"'}
      {type}
      {'"'} is missing
    </div>
  )
}

export default ContentBox
