/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { customHtml } from '../molecules/customHtml/index.jsx'

// Atoms
import { BackLink } from '../atoms/BackLink'

// Molecules
import { Links } from '../molecules/links/Links.jsx'
import { TextModal } from '../molecules/modals/TextModal'
import { MonetizationModal } from '../molecules/modals/MonetizationModal.js'
import { MonetizationFinishedModal } from '../molecules/modals/MonetizationFinishedModal.js'
import { EmbedModal } from '../molecules/modals/EmbedModal.js'
import { BannerReferral } from '../molecules/banners/BannerReferral.js'

// Background
import { Background } from '../atoms/Background.jsx'

// Boxes
import { LogoBox } from '../organisms/LogoBox.jsx'
import { ContentBox } from '../organisms/ContentBox.jsx'
import { LinksBox } from '../organisms/LinksBox.jsx'

// Utils
import { getBackground } from '../../utils/getBackground.js'
import { getImageUrl } from '../../utils/getImageUrl.js'

// Global Styles
import GlobalStyle from '../../style/global.js'
import { UpgradeOverlay } from '../molecules/UpgradeOverlay.js'
import { MediaMobile, ZIndex1, ZIndex2 } from '../../style/media'
import { CookieButton } from '../atoms/buttons/CookieButton.js'

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  transition: top 0.3s ease-out;

  background: ${({ color = '#000000', ssrDone, designColor, preloadImage }) =>
    getBackground({
      url: preloadImage,
      color: ssrDone && preloadImage ? null : designColor || color, // To avoid double layer of color in Theme
    })};

  background-color: ${({ preloadImage, color }) => (preloadImage ? color : !preloadImage && '')};

  ${({ preloadImage, focusPoint, fullscreen }) =>
    preloadImage &&
    css`
      background-repeat: no-repeat;
      background-position: ${focusPoint};
      background-size: ${fullscreen ? 'cover' : 'contain'};
    `}

  display: flex;
  overflow: hidden;

  .page-container-edit-mode {
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-color: gray;
    // opacity: 0.5;
    z-index: ${ZIndex2};
  }

  ${({ isSidePreview }) =>
    isSidePreview &&
    css`
      /* Old wider shadow */
      // box-shadow: -16px 3px 25px -22px rgba(255, 255, 255, 0.7),
      //   16px 3px 25px -22px rgba(255, 255, 255, 0.7), 0 5px 8px 7px rgba(0, 0, 0, 0.68),
      //   0 0 0 10px black;

      box-shadow: -16px 3px 25px -22px rgb(255 255 255 / 70%),
        16px 3px 25px -22px rgb(255 255 255 / 70%), 0 5px 7px 2px rgb(0 0 0 / 68%), 0 0 0 6px black;
      border-radius: ${({ isPreviewMobile }) => (isPreviewMobile ? '16px' : '6px')};
      transition: border-radius 0.3s ease-out;
    `}


    // @media ${MediaMobile} {
    //   &.cookie-banner-on {
    //     top: 40px;

    //     /* TODO: maybe use height for pretty transition */
    //     .common-modal {
    //       position: absolute;
    //     }
    //   }
    // }
`

const ForegroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: ${ZIndex1};
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BlockedCoverContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${ZIndex1};

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.5);

  ${({ isSidePreview }) =>
    isSidePreview &&
    css`
      box-shadow: -16px 3px 25px -22px rgba(255, 255, 255, 0.7),
        16px 3px 25px -22px rgba(255, 255, 255, 0.7), 0 5px 8px 7px rgba(0, 0, 0, 0.68),
        0 0 0 10px black;
      border-radius: ${({ isPreviewMobile }) => (isPreviewMobile ? '16px' : '6px')};
      transition: border-radius 0.3s ease-out;
    `}
`

const BlockedOverlay = styled.p`
  padding: 3rem 4rem;
  font-size: 36px;
  color: red;
  background-color: rgba(255, 255, 255, 0.8);
  transform: rotate(-22.2deg);
`

export const Page = ({
  analyticsLivePage,
  artistSlug,
  domainName,
  hasPro,
  isEditMode,
  isLoggedIn,
  isOrderSuccess,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  isSmall,
  isSubscribed,
  isSubscriptionLoading,
  isUser,
  Modal,
  noBacklink,
  onBuyItem,
  onContentSectionClick,
  onEditModeClick,
  onLinksSectionClick,
  onLoadOrder,
  onLoadShopItem,
  onLogoSectionClick,
  onReferralOpen,
  onSubscribe,
  onUnsubscribe,
  onUpgrade,
  page,
  pageUrl,
  ProTag,
  showStatistics,
  showUpgradeOverlay,
  statisticsPeriod,
  t,
  trackingVisitorEvents,
  userName,
  visitorSession,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  const [isInstagramBrowser, setIsInstagramBrowser] = useState(false)
  const [showCookieButton, setShowCookieButton] = useState(false)
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(false)

  /*
   * Handle open modal id
   */

  const initialAutoModalOpen = {
    teaserLinkId: null,
    iconId: null,
  }
  const [autoModalOpen, setAutoModalOpen] = useState(initialAutoModalOpen)

  useEffect(() => {
    setSsrDone(true)

    if (!isSidePreview) {
      const urlParams = new URLSearchParams(window.location.search)
      const teaserLinkId = urlParams.get('teaserLinkId')
      const iconId = urlParams.get('iconId')

      /*
       * Handle auto modal open
       */

      if (teaserLinkId || iconId) {
        setAutoModalOpen({
          teaserLinkId,
          iconId,
        })
      }
    }
  }, [])

  useEffect(() => {
    if (!isSidePreview && ssrDone) {
      const urlParams = new URLSearchParams(window.location.search)

      Object.keys(autoModalOpen).forEach((key) => {
        if (!autoModalOpen[key]) {
          urlParams.delete(key)
        } else {
          urlParams.set(key, autoModalOpen[key])
        }
      })

      window.history.replaceState(null, null, `?${urlParams.toString()}`)
    }
  }, [Object.values(autoModalOpen)])

  const handleOpenOpenModal = (type) => (id) => {
    switch (type) {
      case 'icon':
        setAutoModalOpen({
          ...autoModalOpen,
          iconId: id,
        })
        break
      case 'teaserLink':
        setAutoModalOpen({
          ...autoModalOpen,
          teaserLinkId: id,
        })
        break
      default:
        break
    }
  }

  /*
   * Handle pretty cookie banner
   */

  useEffect(() => {
    if (ssrDone && !isSidePreview) {
      window?.addEventListener('load', () => {
        /*
         * Check if user is using Instagram browser
         */

        const UA = window.navigator.userAgent || navigator.vendor || window.opera
        const isInstagram = UA.indexOf('Instagram') > -1
        setIsInstagramBrowser(isInstagram)

        /*
         * Handle Cookie button
         */
        const cookieButtonOn =
          window.cookieconsent?.utils?.getCookie?.('cookieconsent_status') === undefined

        setShowCookieButton(cookieButtonOn)

        if (!cookieButtonOn) return
      })
    }
  }, [ssrDone])

  const getUrl = getImageUrl(ssrDone)

  const isProPlanRequired = showUpgradeOverlay

  const [modalData, setModalData] = useState({
    show: false,
    paypalLink: '',
    title: '',
    content: '',
    label: '',
    hasActionFinished: false,
    onAction: null,
  })

  const [modalShop, setModalShop] = useState({
    show: false,
    isOrderSuccess,
  })

  const [modalEmbed, setModalEmbed] = useState({
    show: false,
    url: '',
    autoplay: false,
    mute: false,
    type: 'link',
  })

  // const isModalOpen = !isSidePreview && !!(modalData.show || modalShop.show || modalEmbed.show)

  const handleOpenCookie = () => {
    setIsCookieBannerOpen(true)
    const banner = document.getElementsByClassName('cc-window')[0]
    banner.classList.add('cookie-banner-on')

    const cookieAccept = document.getElementsByClassName('cc-compliance')[0]
    if (!!cookieAccept) {
      cookieAccept.addEventListener('click', () => {
        banner.classList.remove('cookie-banner-on')
        setShowCookieButton(false)
      })
    }
  }

  const handleCloseCookie = (e) => {
    e.stopPropagation()
    setIsCookieBannerOpen(false)
    const banner = document.getElementsByClassName('cc-window')[0]
    banner.classList.remove('cookie-banner-on')
  }

  let PageComponent = null

  if (page) {
    const { background, logo, content, design, selectedThemeId, stripe } = page || {}
    const { links } = page || { links: { list: [] } }
    const CustomHtml = content?.customHTML > '' ? customHtml[content.customHTML] : null

    const isBackgroundSelected =
      background?.selectedBackgroundId > '' && background?.selectedBackgroundId !== 'custom'
    const isThemeSelected = selectedThemeId > '' && selectedThemeId !== 'custom'

    const showRedirectOverlay = (isEditMode || !isSmall) && isSidePreview && !showStatistics

    const showBanner =
      !isUser &&
      !isSidePreview &&
      (!page.hasProPlan || page.referral?.isOn) &&
      !isSubscriptionLoading

    const showBackLink =
      !isSubscriptionLoading && !noBacklink && !isSidePreview && !!hasPro && !showBanner

    const artistName = userName || page.userName

    PageComponent = (
      <Fragment>
        <GlobalStyle />
        <PageContainer
          id="page-container"
          className="page-container"
          preloadImage={getImageUrl(false)({
            ...background,
            isBackgroundSelected,
            selectedBackgroundUrl: design?.background?.url || background?.url,
          })}
          ssrDone={ssrDone}
          focusPoint={background?.focusPoint}
          fullscreen={background?.fullscreen}
          color={background?.color}
          designColor={isBackgroundSelected && (design?.background?.color || background?.color)}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
        >
          {!showRedirectOverlay && isSidePreview && (
            <div className="page-container-edit-mode" onClick={onEditModeClick} />
          )}
          {showUpgradeOverlay && <UpgradeOverlay onUpgrade={onUpgrade} ProTag={ProTag} />}
          {/* // TODO: Try to move SectionOverlay for all components here --> sectionOverlays.map(s => <SectionOverlay {...s} />) (To avoid unnecessary prop drilling) */}

          <ForegroundContainer>
            {/* Back Link to onescreener.com */}
            {showBackLink && (
              <BackLink artistSlug={artistSlug} isPreviewMobile={isPreviewMobile} isPro={hasPro} />
            )}
            {showBanner && <BannerReferral onReferralOpen={onReferralOpen} hideBehind={false} />}

            {showCookieButton && (
              <CookieButton
                onOpen={handleOpenCookie}
                onClose={handleCloseCookie}
                isOpen={isCookieBannerOpen}
              />
            )}

            {/* Logo */}
            {logo && (
              <LogoBox
                artistName={artistName}
                artistProfilePicture={page.artistProfilePicture}
                content={content}
                design={isThemeSelected && design}
                getImageUrl={getUrl}
                isEditMode={showRedirectOverlay}
                isPreviewMobile={isPreviewMobile}
                isPreviewMobileReady={isPreviewMobileReady}
                isProPlanRequired={isProPlanRequired}
                isSidePreview={isSidePreview}
                isSubscribed={isSubscribed}
                isSubscriptionLoading={isSubscriptionLoading}
                isTeaserLinks={content.type === 'TEASER_LINKS'}
                isUser={isUser}
                links={links}
                logo={logo}
                onLogoSectionClick={onLogoSectionClick}
                onSubscribe={onSubscribe}
                onUnsubscribe={onUnsubscribe}
                showBanner={showBanner}
                showRedirectOverlay={showRedirectOverlay}
                t={t}
                userProfilePicture={page.userProfilePicture}
                zIndex={100}
              />
            )}

            {/* Content */}
            <ContentBox
              analyticsLivePage={analyticsLivePage}
              autoOpenId={autoModalOpen.teaserLinkId}
              content={content}
              design={isThemeSelected && design}
              domainName={domainName}
              getImageUrl={getUrl}
              isEditMode={showRedirectOverlay}
              isInstagramBrowser={isInstagramBrowser}
              isPreviewMobile={isPreviewMobile}
              isPreviewMobileReady={isPreviewMobileReady}
              isProPlanRequired={isProPlanRequired}
              isSidePreview={isSidePreview}
              links={links}
              logo={logo}
              modalShop={modalShop}
              onContentSectionClick={onContentSectionClick}
              onLoadShopItem={onLoadShopItem}
              onOpenModal={handleOpenOpenModal}
              pageUrl={pageUrl}
              setModalEmbed={setModalEmbed}
              setModalShop={setModalShop}
              showBanner={showBanner}
              shopEnabled={stripe?.shopEnabled}
              showRedirectOverlay={showRedirectOverlay}
              showStatistics={showStatistics}
              statisticsPeriod={statisticsPeriod}
              t={t}
              trackingVisitorEvents={trackingVisitorEvents}
              visitorSession={visitorSession}
            />

            {!isSidePreview && (
              <Fragment>
                <MonetizationModal
                  getImageUrl={getUrl}
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  onClose={() => {
                    setAutoModalOpen(initialAutoModalOpen)
                    setModalShop({ ...modalShop, isOrderSuccess: false, show: false })
                  }}
                  isOrderSuccess={isOrderSuccess}
                  show={modalShop.show}
                  onBuyItem={onBuyItem}
                  onLoadOrder={onLoadOrder}
                  shopItem={modalShop.item}
                  t={t}
                />

                <MonetizationFinishedModal
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  onClose={() => {
                    setAutoModalOpen(initialAutoModalOpen)
                    setModalShop({ ...modalShop, isOrderSuccess: false, show: false })
                  }}
                  isOrderSuccess={isOrderSuccess}
                  show={modalShop.isOrderSuccess}
                  onLoadOrder={onLoadOrder}
                  shopItem={modalShop.item}
                  t={t}
                />

                <EmbedModal
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  onClose={() => {
                    setModalEmbed({ ...modalEmbed, show: false })
                    setAutoModalOpen(initialAutoModalOpen)
                    /* To turn off the player after animation */
                    setTimeout(() => {
                      setModalEmbed({ show: false, url: '' })
                    }, 350)
                  }}
                  show={modalEmbed.show}
                  modalEmbed={modalEmbed}
                />
              </Fragment>
            )}

            {/* Links // TODO: add check for Text or Donation icon to show TextModal */}
            {links.list.length > 0 && (
              <TextModal
                border={links.border}
                circle={links.circle}
                color={
                  (isThemeSelected && design?.theme?.links?.colorLinks) ||
                  links.colorLinks ||
                  content.color
                }
                colorAccent={
                  (isThemeSelected && design?.theme?.links?.colorLinksAccent) ||
                  links.colorLinksAccent ||
                  content.colorAccent
                }
                colorBackground={
                  (isThemeSelected && design?.theme?.links?.colorLinksBackground) ||
                  links.colorLinksBackground ||
                  content.colorBackground
                }
                colorBackgroundAccent={
                  (isThemeSelected && design?.theme?.links?.colorLinksBackgroundAccent) ||
                  links.colorLinksBackgroundAccent ||
                  content.colorBackgroundAccent
                }
                title={modalData.title}
                content={modalData.content}
                paypalLink={modalData.paypalLink}
                artistName={artistName}
                isPreviewMobile={isPreviewMobile}
                isSidePreview={isSidePreview}
                label={modalData.label}
                onAction={modalData.onAction}
                hasActionFinished={modalData.hasActionFinished}
                onClose={() => {
                  setAutoModalOpen(initialAutoModalOpen)
                  setModalData({ ...modalData, show: false })
                }}
                show={modalData.show}
                square={links.square}
              />
            )}

            <LinksBox
              hasPro={hasPro}
              showBanner={showBanner}
              isEditMode={showRedirectOverlay}
              isPreviewMobile={isPreviewMobile}
              isSidePreview={isSidePreview}
              links={links}
              onLinksSectionClick={onLinksSectionClick}
              position={links.position}
              showRedirectOverlay={showRedirectOverlay}
              t={t}
              zIndex={99}
            >
              {Links({
                analyticsLivePage,
                autoOpenId: autoModalOpen.iconId,
                content,
                design,
                domainName,
                isPreviewMobile,
                isProPlanRequired,
                isSidePreview,
                isThemeSelected,
                links,
                Modal,
                modalData,
                onOpenModal: handleOpenOpenModal('icon'),
                pageUrl,
                setModalData,
                showStatistics,
                statisticsPeriod,
                trackingVisitorEvents,
              })}
            </LinksBox>
          </ForegroundContainer>
          {CustomHtml && <CustomHtml isPreviewMobile={isPreviewMobile} />}
          {ssrDone && (
            <Background
              background={{
                ...background,
                isBackgroundSelected,
                selectedBackgroundUrl: design?.background?.url,
              }}
              color={background?.color}
              designColor={isBackgroundSelected && design?.background?.color}
              getImageUrl={getUrl}
            />
          )}
        </PageContainer>

        {page.isBlocked && (
          <BlockedCoverContainer>
            <BlockedOverlay>Page temporarily unavailable</BlockedOverlay>
          </BlockedCoverContainer>
        )}
      </Fragment>
    )
  }

  return PageComponent
}
