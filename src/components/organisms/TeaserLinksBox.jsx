/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const LINKS_LIMIT = 7
const STEP = LINKS_LIMIT - 1

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  margin: 0;

  .teaser-link {
    width: 100%;
    height: ${({ isSidePreview }) => (isSidePreview ? '32px' : '100%')};
    max-height: ${({ isSidePreview }) => (isSidePreview ? 'unset' : '64px')};
    font-size: ${({ isSidePreview }) => (isSidePreview ? '12px' : '1rem')};
    font-weight: 600;
    color: #0a1c3b;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: ${({ isSidePreview }) => (isSidePreview ? 'none' : '1')};

    text-decoration: none;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.75);
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .clip {
      padding: 0 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`

export const TeaserLinksBox = ({ teaserLinks, isSidePreview }) => {
  const [pagination, setPagination] = useState({ start: 0, end: 8 })
  const { start, end } = pagination

  useEffect(() => {
    if (start === 0 && teaserLinks.length > LINKS_LIMIT) {
      setPagination({ start: 0, end: 6 })
    } else if (teaserLinks.length <= LINKS_LIMIT) {
      setPagination({ start: 0, end: 8 })
    }
  }, [teaserLinks])

  const paginationBack = () => setPagination({ start: start - STEP, end: end - STEP })
  const paginationNext = () => setPagination({ start: start + STEP, end: end + STEP })

  const previousPageExists = start !== 0
  const nextPageExists = teaserLinks.length - end > 0
  const paginationCorrection = previousPageExists && nextPageExists ? 1 : 0

  return (
    <Container isSidePreview={isSidePreview}>
      {previousPageExists && (
        <div className="teaser-link" onClick={paginationBack}>
          Show previous
        </div>
      )}
      {teaserLinks.map(
        ({ url, name }, index) =>
          index >= start &&
          index < end - paginationCorrection && (
            <a key={`${name}-${index}`} href={url} target="_blank" className="teaser-link">
              <p className="clip">{name}</p>
            </a>
          )
      )}
      {nextPageExists && (
        <div className="teaser-link" onClick={paginationNext}>
          Show more
        </div>
      )}
    </Container>
  )
}
