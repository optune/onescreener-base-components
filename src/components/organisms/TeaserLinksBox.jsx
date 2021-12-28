/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

// API
import { filterTime, getFromDate, TeaserLinkType } from '../../api'

// Atoms
import { StatisticsOverlay } from '../atoms/StatisticsOverlay'
import { CartIcon } from '../icons/shop/CartIcon'

// Icons
import { PlayCircleFill, PlayCircleFillDimensions } from '@styled-icons/bootstrap/PlayCircleFill'

// Styles
import { MediaSmall } from '../../style/media'
import { ForegroundColor } from '../../style/color'

// Utils
import { RGBToHex } from '../../utils/convertRGBtoHEX'
import { getImageUrl } from '../../utils/getImageUrl'
import { ArrowLeftIcon, ArrowRightIcon } from '../icons/navigation/Arrow'

const LINKS_LIMIT = 7

const TEASER_LINKS_HEIGHT = 50
const TEASER_LINKS_MARGIN = 10
const TEASER_LINKS_HEIGHT_SIDE_PREVIEW = 32

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
    width: 100%;
    padding: 0 5px 0 10px;
    max-width: 640px;
    min-height: ${({ isSidePreview }) =>
      isSidePreview ? TEASER_LINKS_HEIGHT_SIDE_PREVIEW : TEASER_LINKS_HEIGHT}px;
    height: auto;
    font-size: ${({ isSidePreview }) => (isSidePreview ? '12px' : '16px')};
    font-weight: 600;
    color: ${({ color }) => (color ? color : '#0a1c3b')};
    text-shadow: 1px 1px 1px rgba(46, 49, 49, 0.3);

    display: flex;
    justify-content: flex-start;
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

    &.shop {
      min-height: ${({ isSidePreview }) => (isSidePreview ? '60px' : '100px')};
      font-size: ${({ isSidePreview }) => (isSidePreview ? '16px' : '19px')};

      .image-container {
        height: ${({ isSidePreview }) => (isSidePreview ? '42px' : '85px')};
        width: ${({ isSidePreview }) => (isSidePreview ? '42px' : '85px')};
      }
    }

    &.navigation {
      width: auto;
      min-height: ${({ isSidePreview }) => (isSidePreview ? '19px' : '38px')};
      padding: 0 18px;
      border-radius: 50px;
      align-items: center;
      justify-items: center;
      &::after {
        border-radius: 50px;
      }

      svg {
        width: ${({ isSidePreview }) => (isSidePreview ? '18px' : '30px')};

        * {
          fill: ${({ color }) => (color ? color : '#0a1c3b')};
          stroke: none;
        }
      }
    }

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
      margin-bottom: ${TEASER_LINKS_MARGIN}px;
    }

    &.disabled {
      cursor: auto;
      pointer-events: none;
      opacity: 0.75;

      &::after {
        content: unset;
      }
    }

    &.long {
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .clip {
      line-height: ${({ isSidePreview }) => (isSidePreview ? '12px' : '19px')};
      max-width: ${({ isSidePreview }) => isSidePreview && '240px'};
      max-height: 100%;
      overflow: hidden;
      overflow-wrap: break-word;
      white-space: normal;
      word-break: break-word;

      @media ${MediaSmall} {
        max-width: 240px;
        align-self: center;
        justify-self: center;
      }
    }

    .name-container {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .image-container {
      // position: absolute;
      // top: 50%;
      // left: 5px;
      // transform: translateY(-50%);
      height: ${({ isSidePreview }) => (isSidePreview ? '26px' : '42px')};
      width: ${({ isSidePreview }) => (isSidePreview ? '26px' : '42px')};

      .image {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }

      .sold-out {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        font-size: ${({ isSidePreview }) => (isSidePreview ? '10px' : '16px')};
        color: ${ForegroundColor.error};
      }
    }

    .icon-container {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      height: ${({ isSidePreview }) => (isSidePreview ? '21px' : '28px')};
      width: ${({ isSidePreview }) => (isSidePreview ? '21px' : '28px')};

      svg {
        height: ${({ isSidePreview }) => (isSidePreview ? '21px' : '28px')};
        width: ${({ isSidePreview }) => (isSidePreview ? '21px' : '28px')};
      }

      &.embed {
        svg {
          * {
            fill: white;
          }
        }
      }

      svg.icon {
        rect {
          fill: white;
          stroke: none;
        }
        path {
          fill: none;
        }
      }
    }
  }
`

const TeaserLink = styled.a``

export const TeaserLinksBox = ({
  analyticsLivePage,
  color,
  colorBackground,
  domainName,
  getImageUrl,
  isProPlanRequired,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  isLegacyMobile,
  onLoadShopItem,
  setModalShop,
  setModalEmbed,
  shopEnabled,
  showStatistics,
  statisticsPeriod,
  teaserLinks,
  trackingVisitorEvents,
  visitorSession,
}) => {
  const [list, setList] = useState(null)
  const [pagination, setPagination] = useState(0)

  /*
   * IMAGE ALGO EXAMPLE
   *
   * Max value per page: 7
   *
   * - => Regular link, value: 1
   * = => Shop link, value: 2
   * < => Back button, value: 1
   * > => Forward button, value: 1
   * ------ => Page break
   *
   *
   * Example case: 15 value, 10 Teaser links
   *
   * 1. = 2
   * 2. = 2
   * 3. - 1
   * > - 1
   * ------
   * < - 1
   * 4. = 2
   * 5. = 2
   * 6. - 1
   * > - 1
   * ------
   * < - 1
   * 7. - 1
   * 8. - 1
   * 9. - 1
   * 10. = 2
   *
   * [ [1,2,3,>], [<,4,5,6,>], [<,7,8,9,10] ] => Teaser links list structure
   *
   */

  // Media Query
  const isSmall = useMediaQuery({ query: MediaSmall })

  useEffect(() => {
    let teaserLinksFiltered = teaserLinks
      .filter(({ visible }) => !!visible)
      .filter(({ isShop }) => (isShop ? shopEnabled : true))
    let value = teaserLinksFiltered.reduce((acc, curr) => acc + (curr.isShop ? 2 : 1), 0)
    let actualList = [teaserLinksFiltered]

    let windowHeight = window.innerHeight
    if (isSidePreview) windowHeight = document.getElementById('page-container').scrollHeight

    const logoHeight = parseInt(windowHeight * (isPreviewMobile && isSidePreview ? 0.33 : 0.17))
    const linksHeight = isSidePreview ? 45 : isSmall || isPreviewMobile ? 60 : 110
    const legacyCorrection = isSmall && isLegacyMobile ? 20 : 0
    const allowedHeight = windowHeight - logoHeight - linksHeight - legacyCorrection
    let linksLimit = parseInt(
      allowedHeight /
        ((isSidePreview ? TEASER_LINKS_HEIGHT_SIDE_PREVIEW : TEASER_LINKS_HEIGHT) +
          TEASER_LINKS_MARGIN)
    )
    // To avoid loophole
    if (linksLimit <= 2) linksLimit = 4

    if (value > linksLimit) {
      let pageValue = 0
      let pageIndex = 0

      actualList = [[]]

      for (let i = 0; i < teaserLinksFiltered.length; i++) {
        /* Calculate values */

        let tl = teaserLinksFiltered[i]
        let tlValue = tl.isShop ? 2 : 1
        pageValue += tlValue
        let nextLinkValue = (teaserLinksFiltered?.[i + 1]?.isShop ? 2 : 1) || 0
        let nextValue = pageValue + nextLinkValue

        /* Check if there is space for one more link */

        if (pageValue >= linksLimit && nextValue > linksLimit) {
          actualList[pageIndex].push({ isForward: true })
          actualList.push([])
          pageIndex += 1
          actualList[pageIndex].push({ isBack: true })
          pageValue = 1
          i--
          continue
        }

        actualList[pageIndex].push(tl)
      }
    }

    setPagination(0)
    setList(actualList)
  }, [teaserLinks, isPreviewMobileReady])

  const paginationBack = () => setPagination(pagination - 1 < 0 ? 0 : pagination - 1)

  const paginationNext = () => setPagination(pagination + 1)

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
      {list?.[pagination].map(
        (
          { _id, type, url, name, images = [], isShop, shop, playerSettings, isBack, isForward },
          index
        ) => {
          if (isBack)
            return (
              <div key="back-button" className="teaser-link navigation" onClick={paginationBack}>
                <ArrowLeftIcon />
              </div>
            )
          if (isForward)
            return (
              <div key="forward-button" className="teaser-link navigation" onClick={paginationNext}>
                <ArrowRightIcon />
              </div>
            )

          const isMusic = type === TeaserLinkType.LINK_MUSIC
          const isVideo = type === TeaserLinkType.LINK_VIDEO
          const isLink = !isShop && !isMusic && !isVideo
          const isEmbed = isMusic || isVideo
          const isPhysical = !!isShop && !!shop?.isPhysical

          const soldOut = shop?.maxQuantity === -1
          const hasImage = !!images?.[0]

          let Icon = PlayCircleFill
          // if (isVideo) Icon = PlayCircleFillDimensions
          if (isShop) Icon = CartIcon

          return (
            <TeaserLink
              as={isLink ? 'a' : 'div'}
              key={`${name}-${index}`}
              href={url}
              image={images?.[0]}
              className={classNames('teaser-link', {
                disabled: soldOut,
                long: name.length > 45,
                shop: isShop,
              })}
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
                          images: item.images,
                          ...item.shop,
                        },
                      })
                    }
                  })
                }

                if (!isSidePreview && isEmbed) {
                  setModalEmbed({
                    show: true,
                    url,
                    autoplay: playerSettings?.autoplay,
                    mute: playerSettings?.mute,
                    type,
                  })
                }
              }}
            >
              <div className="name-container">
                <p image={hasImage ? 1 : undefined} className={`clip ${hasImage && 'has-image'}`}>
                  {name}
                </p>
                {isShop && (
                  <span>
                    {isPhysical ? 'P' : 'D'} {shop.price} - {shop.currency}{' '}
                  </span>
                )}
              </div>
              {!hasImage && (
                <div className={`icon-container ${isEmbed ? 'embed' : ''}`}>
                  {/* <Icon /> */}
                  {isMusic && 'M'}
                  {isVideo && 'V'}
                </div>
              )}
              <div className="image-container">
                {soldOut && (
                  <div className="sold-out">
                    Sold <br /> out
                  </div>
                )}

                {images.filter((i) => !!i?.url > '')?.length > 0 && (
                  <img
                    image={hasImage ? 1 : undefined}
                    src={getImageUrl({
                      image: images?.[0],
                      maxWidth: 40,
                      maxHeight: 40,
                    })}
                    alt={`link-${index}`}
                    className="image"
                  />
                )}
              </div>
              {showStatistics && (
                <StatisticsOverlay>
                  <div>{getLinkClicks({ name, url })}</div>
                </StatisticsOverlay>
              )}
            </TeaserLink>
          )
        }
      )}
    </Container>
  )
}
