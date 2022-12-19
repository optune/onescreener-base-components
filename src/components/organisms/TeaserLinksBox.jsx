/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

// API
import { filterTime, getFromDate, CurrencySign, TeaserLinkType, BookingMethod } from '../../api'

// Atoms
import { StatisticsOverlay } from '../atoms/StatisticsOverlay'
import { RoundClockIcon } from '../icons/ClockIcon'

// Molecules
import { TeaserLink } from '../molecules/teaserLinks.js/TeaserLink'

// Styles
import { MediaSmallMobile, MediaSmall, ZIndex1, MediaMobile } from '../../style/media'
import { BackgroundColor, ForegroundColor } from '../../style/color'

// Utils
import { RGBToHex } from '../../utils/convertRGBtoHEX'
import { ArrowLeftIcon, ArrowRightIcon } from '../icons/navigation/Arrow'
import { getTeaserLinkIcon } from './utils/getTeaserLinkIcon'
import {
  getFilteredTeaserLinksList,
  getTeaserLinksValueLength,
  isDoubleSize,
  TL_REGULAR_VALUE,
  TL_SHOP_VALUE,
} from './utils/getTeaserLinksSettings'
import { getValuesRecursively } from '../../utils/getValuesRecursively'

const TEASER_LINKS_HEIGHT = 68
const TEASER_LINKS_HEIGHT_SHOP = 92
const TEASER_LINKS_HEIGHT_SIDE_PREVIEW = 58
const TEASER_LINKS_HEIGHT_SHOP_SIDE_PREVIEW = 62

const TEASER_LINKS_MARGIN = 20
const TEASER_LINKS_SHOP_MARGIN = 32

const MAX_TEASER_LINKS_LOAD_COUNT = 7

const IMAGE_SIZE = 48
const IMAGE_SHOP_SIZE = 72

const MOBILE_DIFF_VALUE = 8 // px smaller on mobile

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

  .long {
    p.clip,
    span.clip {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .teaser-link {
    position: relative;
    width: 100%;
    padding-left: 12px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    max-width: 520px;
    min-height: ${({ isSidePreview }) =>
      isSidePreview ? TEASER_LINKS_HEIGHT_SIDE_PREVIEW : TEASER_LINKS_HEIGHT}px;
    height: auto;
    font-size: ${({ isSidePreview }) => (isSidePreview ? '12px' : '18px')};
    font-weight: 600;
    letter-spacing: 0.05rem;
    color: ${({ color }) => (color ? color : ForegroundColor.secondary)};
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    text-decoration: none;
    cursor: pointer;

    background: ${({ colorBackground }) =>
      colorBackground ? colorBackground : 'rgba(130, 130, 130, 0.30)'};
      
    // border: ${({ colorBorder }) => (colorBorder ? `1px solid ${colorBorder}` : 'none')};

    box-sizing: border-box;

    box-shadow: ${({ ssrDone }) =>
      ssrDone ? '0px 4px 5px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.1)' : 'none'};

    box-shadow: ${({ ssrDone }) =>
      ssrDone ? '0px 2px 2px rgba(0, 0, 0, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.05)' : 'none'};

    border-radius: 6px;
    transition: all 0.3s ease-out, transform 0.2s cubic-bezier(0, 0.25, 0.35, 2.25),
      opacity 0.2s cubic-bezier(0, 0.25, 0.35, 2.25);
    backface-visibility: hidden;

    &:not(.double) {
      .clip {
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
    }

    &.double {
      align-items: flex-start;
      min-height: ${({ isSidePreview }) =>
        isSidePreview ? TEASER_LINKS_HEIGHT_SHOP_SIDE_PREVIEW : TEASER_LINKS_HEIGHT_SHOP}px;

      .name-container {
        height: auto;
        margin-top: auto;
        margin-bottom: auto;
      }

      .image-container {
        width: ${({ isSidePreview }) => (isSidePreview ? IMAGE_SHOP_SIZE - 20 : IMAGE_SHOP_SIZE)}px;
        height: ${({ isSidePreview }) =>
          isSidePreview ? IMAGE_SHOP_SIZE - 20 : IMAGE_SHOP_SIZE}px;
        display: flex;
        justify-content: center;
        align-items: center;

        .image {
          width: 100%;
          height: 100%;
        }
      }
    }

    &.faded {
      opacity: 0.7;
      .tags-container {
        opacity: 0.5;
      }
    }

    .tags-container {
      position: absolute;
      bottom: -16px;
      left: ${({ isSidePreview }) => (isSidePreview ? '5px' : '10px')};
      z-index: ${ZIndex1};

      .tag {
        position: relative;
        height: 100%;
        width: auto;
        padding: 4px 6px;
        color: ${({ colorTag }) => colorTag};
        background-color: ${({ colorTagBackground }) =>
          colorTagBackground ? colorTagBackground : ForegroundColor.secondary};
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.12);

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;

        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 6px;
          transition: opacity 0.3s ease-out;
          opacity: 0;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.14);
        }

        svg.icon {
          * {
            stroke: ${({ colorTag }) => colorTag};
            &[stroke='none'] {
              fill: ${({ colorTag }) => colorTag};
              stroke: none;
            }
          }
        }

        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }

    &.navigation {
      width: auto;
      min-height: ${({ isSidePreview }) => (isSidePreview ? '28px' : '38px')};
      padding: 0 18px;
      border-radius: 50px;
      align-items: center;
      justify-items: center;
      // &::after {
      //   border-radius: 50px;
      // }

      svg.icon {
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
      border-radius: 6px;
      transition: opacity 0.3s ease-out;
      opacity: 0;
      // box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.07), 0px 2px 10px rgba(0, 0, 0, 0.09);
    }

    &:hover,
    &:focus {
      transform: translateZ(0) scale(1.03);
      backdrop-filter: blur(12px);
      background: ${({ colorBackground, color }) =>
        colorBackground == 'rgba(255,255,255,0)' ? `${RGBToHex(color)}10` : colorBackground};
    }

    &:hover {
      // filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.3))
      //   drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.2));

      .tag {
        &::after {
          opacity: 1;
        }
      }

      &::after {
        opacity: 1;
      }
    }

    &:focus {
      .tag {
        &::after {
          opacity: 0;
        }
      }

      &::after {
        opacity: 0;
      }
    }

    &:not(:last-child) {
      margin-bottom: ${TEASER_LINKS_MARGIN}px;

      &.double {
        margin-bottom: ${TEASER_LINKS_SHOP_MARGIN}px;
      }
    }

    &.disabled,
    &.processing {
      cursor: auto;
      pointer-events: none;
      opacity: 0.9;

      &::after {
        content: unset;
      }
    }

    &.processing {
      opacity: 0.2;
    }

    .clip {
      line-height: ${({ isSidePreview }) => (isSidePreview ? '16px' : '25px')};
      padding-right: 10px;
      max-height: 100%;
      overflow: hidden;
      overflow-wrap: break-word;
      white-space: normal;
      word-break: break-word;
    }

    .name-container {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .image-container,
    .icon-container.link-type {
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${({ isSidePreview }) => (isSidePreview ? IMAGE_SIZE - 12 : IMAGE_SIZE)}px;
      width: ${({ isSidePreview }) => (isSidePreview ? IMAGE_SIZE - 12 : IMAGE_SIZE)}px;
    }

    .image-container {
      position: relative;

      .image {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
      }

      .sold-out {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 5px;
        border-radius: 4px;
        text-align: center;
        font-size: ${({ isSidePreview }) => (isSidePreview ? '10px' : '16px')};
        color: ${ForegroundColor.error};
      }
    }

    .icon-container {
      height: ${({ isSidePreview }) => (isSidePreview ? '18px' : '24px')};
      width: ${({ isSidePreview }) => (isSidePreview ? '18px' : '24px')};

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        &.subtitle {
          font-size: ${({ isSidePreview }) => (isSidePreview ? '13px' : '16px')};
          align-items: flex-end;
        }

        &.icon {
          margin-right: ${({ isSidePreview }) => (isSidePreview ? '5px' : '10px')};
          align-items: flex-end;

          &.smaller {
            margin-right: 5px;
          }
        }

        &.session-length {
          display: inline-block;
          max-width: ${({ isSidePreview, isPreviewMobile }) =>
            isSidePreview ? (isPreviewMobile ? '100px' : '150px') : '300px'};

          @media ${MediaSmall} {
            max-width: ${({ isSidePreview, isPreviewMobile }) =>
              isSidePreview ? (isPreviewMobile ? '100px' : '150px') : '142px'};
          }
        }
      }

      &.double {
        height: auto;
        width: auto;
        display: flex;
        align-items: center;

        .icon {
          width: auto;
          height: auto;

          &.digital {
            margin-left: ${({ isSidePreview }) => (isSidePreview ? '-1px' : '-3px')};

            svg {
              height: ${({ isSidePreview }) => (isSidePreview ? '20px' : '24px')};
            }
          }

          &:not(.digital) {
            &.clock {
              svg {
                height: ${({ isSidePreview }) => (isSidePreview ? '15px' : '18px')};
              }
            }

            svg {
              height: ${({ isSidePreview }) => (isSidePreview ? '16px' : '18px')};
              width: ${({ isSidePreview }) => (isSidePreview ? '16px' : '18px')};
            }
          }
        }
      }

      svg {
        height: ${({ isSidePreview }) => (isSidePreview ? '21px' : '28px')};
        width: ${({ isSidePreview }) => (isSidePreview ? '21px' : '28px')};
      }

      svg.icon {
        * {
          stroke: ${({ color }) => (color ? color : ForegroundColor.secondary)};

          &[stroke='none'] {
            fill: ${({ color }) => (color ? color : '#0a1c3b')};
            stroke: none;
          }
        }
      }
    }

    @media ${MediaSmall} {
      max-width: 480px;
      min-height: ${({ isSidePreview }) =>
        (isSidePreview ? TEASER_LINKS_HEIGHT_SIDE_PREVIEW : TEASER_LINKS_HEIGHT) -
        MOBILE_DIFF_VALUE}px;
      font-size: ${({ isSidePreview }) => (isSidePreview ? '10px' : '16px')};

      .image-container,
      .icon-container.link-type {
        height: ${({ isSidePreview }) =>
          (isSidePreview ? IMAGE_SIZE - 12 : IMAGE_SIZE) - MOBILE_DIFF_VALUE}px;
        width: ${({ isSidePreview }) =>
          (isSidePreview ? IMAGE_SIZE - 12 : IMAGE_SIZE) - MOBILE_DIFF_VALUE}px;
      }

      .icon-container {
        height: ${({ isSidePreview }) => (isSidePreview ? '16px' : '20px')};
        width: ${({ isSidePreview }) => (isSidePreview ? '16px' : '20px')};

        span.subtitle {
          font-size: ${({ isSidePreview }) => (isSidePreview ? '10px' : '14px')};
        }
      }

      &.double {
        min-height: ${({ isSidePreview }) =>
          (isSidePreview ? TEASER_LINKS_HEIGHT_SHOP_SIDE_PREVIEW : TEASER_LINKS_HEIGHT_SHOP) -
          MOBILE_DIFF_VALUE}px;

        .image-container {
          height: ${({ isSidePreview }) =>
            (isSidePreview ? IMAGE_SHOP_SIZE - 12 : IMAGE_SHOP_SIZE) - MOBILE_DIFF_VALUE}px;
          width: ${({ isSidePreview }) =>
            (isSidePreview ? IMAGE_SHOP_SIZE - 12 : IMAGE_SHOP_SIZE) - MOBILE_DIFF_VALUE}px;
        }
      }
    }

    @media ${MediaMobile} {
      max-width: 361px;
    }

    @media ${MediaSmallMobile} {
      font-size: ${({ isSidePreview }) => (isSidePreview ? '9px' : '13px')};

      .icon-container {
        span.subtitle {
          font-size: ${({ isSidePreview }) => (isSidePreview ? '9px' : '12px')};
        }
      }
    }
  }
`

export const TeaserLinksBox = ({
  analyticsLivePage,
  autoOpenId,
  color,
  colorBackground,
  colorBorder,
  colorTag,
  colorTagBackground,
  domainName,
  font,
  getImageUrl,
  isInstagramBrowser,
  isLegacyMobile,
  isPreviewMobile,
  isPreviewMobileReady,
  isProPlanRequired,
  isSidePreview,
  onLoadShopItem,
  onOpenModal,
  setModalEmbed,
  setModalShop,
  shopEnabled,
  showStatistics,
  statisticsPeriod,
  teaserLinks = [],
  trackingVisitorEvents,
  visitorSession,
}) => {
  const [ssrDone, setSsrDone] = useState(false)

  const [list, setList] = useState(null)
  const [pagination, setPagination] = useState(0)

  /*
   * IMAGE ALGO EXAMPLE
   *
   * Max value per page: Depends on the window height
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
    setSsrDone(true)
  }, [])

  useEffect(() => {
    let teaserLinksFiltered = getFilteredTeaserLinksList({ list: teaserLinks, shopEnabled })
    let value = getTeaserLinksValueLength({ list: teaserLinks, shopEnabled })
    let actualList = [teaserLinksFiltered]

    let windowHeight = window.innerHeight
    if (isSidePreview) windowHeight = document.getElementById('page-container').scrollHeight

    const logoHeight = parseInt(windowHeight * (isPreviewMobile && isSidePreview ? 0.24 : 0.17))
    const linksHeight = isSidePreview ? 45 : isSmall || isPreviewMobile ? 60 : 110
    const legacyCorrection = isSmall && isLegacyMobile ? 20 : 0
    const allowedHeight = windowHeight - logoHeight - linksHeight - legacyCorrection
    let linksLimit = isInstagramBrowser
      ? 6
      : parseInt(
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

      for (let i = 0; i < teaserLinksFiltered?.length; i++) {
        /* Calculate values */

        let tl = teaserLinksFiltered[i]
        let tlValue = isDoubleSize(tl) ? TL_SHOP_VALUE : TL_REGULAR_VALUE
        pageValue += tlValue
        let nextLinkValue =
          (isDoubleSize(teaserLinksFiltered?.[i + 1]) ? TL_SHOP_VALUE : TL_REGULAR_VALUE) || 0
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
  }, [teaserLinks?.length, isPreviewMobileReady, ...getValuesRecursively({ list: teaserLinks })])

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
    <Container
      isSidePreview={isSidePreview}
      isPreviewMobile={isPreviewMobile}
      color={color}
      colorBackground={ssrDone ? colorBackground : BackgroundColor.loadingUI}
      colorBorder={colorBorder}
      colorTag={colorTag}
      colorTagBackground={colorTagBackground}
      font={font}
      ssrDone={ssrDone}
    >
      {ssrDone
        ? list?.[pagination].map(
            (
              {
                _id,
                type,
                url,
                name,
                images = [],
                isShop,
                isSession,
                session,
                shop,
                playerSettings,
                processing,
                isBack,
                isForward,
              },
              index
            ) => {
              if (isBack)
                return (
                  <div
                    key="back-button"
                    className="teaser-link navigation"
                    onClick={paginationBack}
                  >
                    <ArrowLeftIcon />
                  </div>
                )
              if (isForward)
                return (
                  <div
                    key="forward-button"
                    className="teaser-link navigation"
                    onClick={paginationNext}
                  >
                    <ArrowRightIcon />
                  </div>
                )

              const isLegacy = typeof type === 'undefined'
              const isRegular = type === TeaserLinkType.LINK
              const isMusic = type === TeaserLinkType.LINK_MUSIC
              const isVideo = type === TeaserLinkType.LINK_VIDEO
              const isNft = type === TeaserLinkType.LINK_OPENSEA
              const isEmbed = isMusic || isVideo || isNft
              const isLink = !isSession && !isShop && !isEmbed
              const isPhysical = !!isShop && !!shop?.isPhysical
              const isDigital = !!isShop && !shop?.isPhysical
              const isCalendly = !!isSession && session?.bookingMethod === BookingMethod.CALENDLY
              const isDouble = isDoubleSize({ isShop, isSession })

              let duration = session?.length
              if (!duration && isCalendly && !!session) duration = `${session.duration} minutes`

              const soldOut = isShop && shop?.maxQuantity === -1
              const hasImage = !!images?.[0]

              const linkType = isLegacy
                ? isDigital
                  ? TeaserLinkType.SHOP_DIGITAL
                  : TeaserLinkType.SHOP_PHYSICAL
                : type

              const stayOnPage = [TeaserLinkType.OPTUNE_BOOK, TeaserLinkType.OPTUNE_GIGS].includes(
                linkType
              )

              let Icon = (isLegacy && !isShop) || isRegular ? null : getTeaserLinkIcon(linkType)

              return (
                <TeaserLink
                  as={isLink ? 'a' : 'div'}
                  autoOpenId={autoOpenId}
                  className={classNames('teaser-link', 'tl-apply-font', {
                    disabled: soldOut,
                    processing,
                    long: name.length >= 38,
                    double: isDouble,
                    faded: showStatistics,
                  })}
                  href={url}
                  image={images?.[0]}
                  key={`${name}-${index}`}
                  rel={stayOnPage ? undefined : 'noreferrer'}
                  target={stayOnPage ? undefined : '_blank'}
                  teaserLinkId={_id}
                  ssrDone={ssrDone}
                  onOpen={(isClick) => {
                    if (!isClick && !isSidePreview) {
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
                    }
                    if (!isClick && !isSidePreview && (isShop || isSession)) {
                      onLoadShopItem?.({ itemId: _id }).then((item) => {
                        if (item.shop.maxQuantity > -1 || item.isSession) {
                          setModalShop({
                            show: true,
                            item: {
                              _id: item._id,
                              name: item.name,
                              images: item.images,
                              isShop,
                              isSession,
                              ...item.session,
                              ...item.shop,
                              isPhysical: isSession ? false : item.shop.isPhysical,
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

                    onOpenModal(_id)
                  }}
                >
                  <div className="name-container">
                    <p
                      image={hasImage ? 1 : undefined}
                      className={`clip ${hasImage && 'has-image'}`}
                    >
                      {name}
                    </p>
                  </div>
                  {isDouble && (
                    <div
                      className={classNames('tags-container', 'icon-container', {
                        double: isDouble,
                        smaller: true,
                        long: true,
                      })}
                    >
                      <div className="tag">
                        <span
                          className={classNames('icon', {
                            digital: isShop && !isPhysical,
                            smaller: true,
                          })}
                        >
                          {!!Icon && <Icon />}
                        </span>
                        <span className={classNames('price', 'subtitle', { subtitle: isSession })}>
                          {Number(shop.price).toFixed(2)} {CurrencySign[shop.currency] || 'USD'}
                        </span>
                      </div>

                      {isSession && duration > '' && (
                        <div className="tag">
                          <Fragment>
                            <span
                              className={classNames('icon', {
                                digital: isShop && !isPhysical,
                                smaller: true,
                                clock: true,
                              })}
                            >
                              <RoundClockIcon />
                            </span>
                            <span
                              className={classNames('subtitle', 'text-ellipsis', 'session-length')}
                            >
                              {duration}
                            </span>
                          </Fragment>
                        </div>
                      )}
                    </div>
                  )}
                  {!hasImage && !!Icon && (
                    <div className={classNames('icon-container', 'link-type')}>
                      <Icon />
                    </div>
                  )}
                  {hasImage && (
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
                  )}
                  {showStatistics && (
                    <StatisticsOverlay>
                      <div>{getLinkClicks({ name, url })}</div>
                    </StatisticsOverlay>
                  )}
                </TeaserLink>
              )
            }
          )
        : [
            ...Array(
              teaserLinks?.length > MAX_TEASER_LINKS_LOAD_COUNT
                ? MAX_TEASER_LINKS_LOAD_COUNT
                : teaserLinks?.length
            ).keys(),
          ].map((index) => {
            return <TeaserLink key={index} className="teaser-link" />
          })}
    </Container>
  )
}
