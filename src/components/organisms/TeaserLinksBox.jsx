/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { filterTime, getFromDate } from '../../api'

import { MediaSmall } from '../../style/media'
import { RGBToHex } from '../../utils/convertRGBtoHEX'
import { StatisticsOverlay } from '../atoms/StatisticsOverlay'

const LINKS_LIMIT = 7
const STEP = LINKS_LIMIT - 1

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;

  .teaser-link {
    position: relative;
    width: 90%;
    max-width: 640px;
    min-height: ${({ isSidePreview }) => (isSidePreview ? '32px' : '50px')};
    height: auto;
    font-size: ${({ isSidePreview }) => (isSidePreview ? '12px' : '1rem')};
    font-weight: 600;
    color: ${({ color }) => (color ? color : '#0a1c3b')};
    text-shadow: 1px 1px 1px rgba(46, 49, 49, 0.3);

    display: grid;
    grid-template-columns: ${({ image }) => (image ? '90px auto' : 'auto')};
    grid-row-gap: 0;

    align-items: center;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    background: ${({ colorBackground }) =>
      colorBackground ? colorBackground : 'rgba(130, 130, 130, 0.30)'};
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

    &.disabled {
      cursor: auto;
      pointer-events: none;
      opacity: 0.5;

      &::after {
        content: unset;
      }
    }

    .clip {
      justify-self: center;
      align-self: center;
      display: flex;
      position: absolute;
      max-width: 300px;
      padding: 0 20px;
      line-height: ${({ isSidePreview }) => (isSidePreview ? '12px' : '19px')};
      max-height: 100%;
      overflow: hidden;
      overflow-wrap: break-word;
      white-space: normal;
      word-break: break-word;

      @media ${MediaSmall} {
        max-width: 210px;
      }
    }

    .image {
      grid-column: ${({ image }) => (image ? '1/1' : null)};
      flex: 1;

      height: ${({ isSidePreview }) => (isSidePreview ? '26px' : '42px')};
      width: ${({ isSidePreview }) => (isSidePreview ? '26px' : '42px')};
      margin-left: 8px;
      margin-right: 8px;
      border-radius: 4px;
      object-fit: cover;
    }

    .sold-out {
      position: absolute;
      text-transform: uppercase;
      font-size: ${({ isSidePreview }) => (isSidePreview ? '10px' : '12px')};
      color: red;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    @media ${MediaSmall} {
      font-size: ${({ isSidePreview }) => (isSidePreview ? '12px' : '16px')};
    }
  }
`

const TeaserLink = styled.a``

export const TeaserLinksBox = ({
  analyticsLivePage,
  color,
  colorBackground,
  domainName,
  isProPlanRequired,
  isSidePreview,
  modalShop,
  onLoadShopItem,
  setModalShop,
  shopEnabled,
  showStatistics,
  statisticsPeriod,
  teaserLinks,
  trackingVisitorEvents,
  visitorSession,
}) => {
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

  const getLinkClicks = ({ name, url }) => {
    if (isProPlanRequired) return '?'
    let clicks = 0

    const fromDate = getFromDate(statisticsPeriod)

    analyticsLivePage.forEach((session) => {
      filterTime(session.analytics?.category?.teaserLinks, fromDate)?.forEach((link) => {
        if (link.name === name && link.url === url) clicks += 1
      })
    })

    return clicks
  }

  return (
    <Container isSidePreview={isSidePreview} color={color} colorBackground={colorBackground}>
      {previousPageExists && (
        <div className="teaser-link" onClick={paginationBack}>
          Show previous
        </div>
      )}
      {teaserLinks
        .filter(({ isShop }) => (isShop ? shopEnabled : true))
        .map(({ _id, url, name, images = [], isShop, shop }, index) => {
          const isLink = !isShop
          const soldOut = shop?.maxQuantity === -1

          return (
            index >= start &&
            index < end - paginationCorrection && (
              <TeaserLink
                as={isLink ? 'a' : 'div'}
                key={`${name}-${index}`}
                href={url}
                image={images?.[0]}
                className={`teaser-link ${soldOut && 'disabled'}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  trackingVisitorEvents({
                    visitorSession,
                    domainName,
                    category: {
                      teaserLinks: {
                        event: {
                          name,
                          url,
                        },
                      },
                    },
                  }).then((r) => r)

                  if (!isSidePreview && isShop) {
                    onLoadShopItem?.({ itemId: _id }).then((item) => {
                      if (item.shop.maxQuantity > -1) {
                        setModalShop({
                          show: true,
                          item: {
                            _id: item._id,
                            name: item.name,
                            image: item.images?.[0], // TODO: remap in ShopModal after adding multiple images
                            ...item.shop,
                          },
                        })
                      }
                    })
                  }
                }}
              >
                {soldOut && (
                  <div className="sold-out">
                    Sold <br /> out
                  </div>
                )}
                {showStatistics && (
                  <StatisticsOverlay>
                    <div>{getLinkClicks({ name, url })}</div>
                  </StatisticsOverlay>
                )}
                {images?.length > 0 && (
                  <img image={images?.[0]} src={images?.[0]?.url} alt={name} className="image" />
                )}
                <p image={images?.[0]} className="clip">
                  {name}
                </p>
              </TeaserLink>
            )
          )
        })}
      {nextPageExists && (
        <div className="teaser-link" onClick={paginationNext}>
          Show more
        </div>
      )}
    </Container>
  )
}
