/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MediaSmall } from '../../style/media'
import { RGBToHex } from '../../utils/convertRGBtoHEX'

const LINKS_LIMIT = 7
const STEP = LINKS_LIMIT - 1

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0;

  .teaser-link {
    position: relative;
    width: 100%;
    max-width: 640px;
    min-height: ${({ isSidePreview }) => (isSidePreview ? '32px' : '40px')};

    height: auto;
    font-size: ${({ isSidePreview }) => (isSidePreview ? '12px' : '1rem')};
    font-weight: 600;
    color: ${({ color }) => (color ? color : '#0a1c3b')};
    text-shadow: 1px 1px 1px rgba(46, 49, 49, 0.3);
    /* text-shadow: ${({ colorBackground }) =>
      colorBackground == 'rgba(255,255,255,0)'
        ? `0px 2px 2px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08),
      0px 3px 12px rgba(0, 0, 0, 0.14)`
        : null}; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    background: ${({ colorBackground }) =>
      colorBackground ? colorBackground : 'rgba(255, 255, 255, 0.75)'};
    border: 1px solid ${({ color }) => (color ? color : 'white')};
    box-sizing: border-box;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: all 0.3s ease-out;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08),
        0px 3px 12px rgba(0, 0, 0, 0.14);
      border: 1px solid white;
      border-radius: 4px;
      transition: opacity 0.3s ease-out;
      opacity: 0;
    }

    &:hover,
    &:focus {
      background: ${({ colorBackground, color }) =>
        colorBackground == 'rgba(255,255,255,0)' ? `${RGBToHex(color)}10` : colorBackground};
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    &:focus {
      &::after {
        opacity: 0;
      }
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .clip {
      padding: 0 20px;
      line-height: ${({ isSidePreview }) => (isSidePreview ? '12px' : '19px')};
      max-height: 100%;
      overflow: hidden;
      overflow-wrap: break-word;
      white-space: normal;
      word-break: break-word;
    }

    @media ${MediaSmall} {
      font-size: ${({ isSidePreview }) => (isSidePreview ? '12px' : '16px')};
    }
  }
`

export const TeaserLinksBox = ({ teaserLinks, isSidePreview, colorBackground, color }) => {
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
    <Container isSidePreview={isSidePreview} color={color} colorBackground={colorBackground}>
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
