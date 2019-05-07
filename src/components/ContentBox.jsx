/* eslint-disable react/prop-types */
import React from 'react'
import ReactPlayer from 'react-player'
import {
  ColoredTextContainer,
  Gigs,
  getGigs,
} from '@optune/onescreener-base-components'

const ContentBox = ({ content }) => {
  const type = content.__typename || content.activeContent
  return 'Text' === type ? (
    <ColoredTextContainer
      color={content.color}
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  ) : 'Gigs' === type ? (
    // id="gigs" is required for non-server-side rendered container on export
    <ColoredTextContainer color={content.color} id="gigs">
      <Gigs getGigs={getGigs} api={content.api} slug={content.slug} />
    </ColoredTextContainer>
  ) : 'Media' === type ? (
    <ReactPlayer url={content.url} playing={true} />
  ) : (
    <div>
      Content of type {'"'}
      {content.__typename.toString()}
      {'"'} is missing
    </div>
  )
}

export default ContentBox
