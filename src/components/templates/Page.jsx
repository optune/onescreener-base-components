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
import { MediaMobile, ZIndex2 } from '../../style/media'

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


    @media ${MediaMobile} {
      &.cookie-banner-on {
        top: 40px;

        /* TODO: maybe use height for pretty transition */
        .common-modal {
          position: absolute;
        }
      }
    }
`

const ForegroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 2;
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
  z-index: 2;

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
  isInstagramBrowser,
  isOrderSuccess,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  isSmall,
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
  onUpgrade,
  page,
  pageUrl,
  ProTag,
  showStatistics,
  showUpgradeOverlay,
  statisticsPeriod,
  trackingVisitorEvents,
  userName,
  visitorSession,
}) => {
  const [ssrDone, setSsrDone] = useState(false)

  useEffect(() => {
    setSsrDone(true)

    // if (!isSidePreview) {
    //   let link = document.createElement('link')

    //   // Google API
    //   link.rel = 'preconnect'
    //   link.href = 'https://fonts.googleapis.com'
    //   document.head.appendChild(link)

    //   // Gstatic
    //   link.href = 'https://fonts.gstatic.com'
    //   link.crossOrigin = true
    //   document.head.appendChild(link)

    //   // Font Bangers
    //   link.rel = 'stylesheet'
    //   link.href = 'https://fonts.googleapis.com/css2?family=Bangers&display=swap'
    //   link.crossOrigin = false
    //   document.head.appendChild(link)
    // }
  }, [])

  /*
   * Handle pretty cookie banner
   */

  useEffect(() => {
    if (ssrDone && !isSidePreview) {
      window?.addEventListener('load', () => {
        const cookieBannerOn =
          window.cookieconsent?.utils?.getCookie?.('cookieconsent_status') === undefined

        if (!cookieBannerOn) return

        const pageContainer = document.getElementsByClassName('page-container')[0]
        const banner = document.getElementsByClassName('cc-window')[0]

        if (cookieBannerOn) {
          pageContainer.classList.add('cookie-banner-on')
          banner.classList.add('cookie-banner-on')
        }

        const cookieAccept = document.getElementsByClassName('cc-compliance')[0]
        if (!!cookieAccept) {
          cookieAccept.addEventListener('click', () => {
            pageContainer.classList.remove('cookie-banner-on')
            banner.classList.remove('cookie-banner-on')
          })
        }
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

  let PageComponent = null

  if (page) {
    const { background, logo, content, design, selectedThemeId, stripe } = page || {}
    const { links } = page || { links: { list: [] } }
    const CustomHtml = content?.customHTML > '' ? customHtml[content.customHTML] : null

    const isBackgroundSelected =
      background?.selectedBackgroundId > '' && background?.selectedBackgroundId !== 'custom'
    const isThemeSelected = selectedThemeId > '' && selectedThemeId !== 'custom'

    const showRedirectOverlay = (isEditMode || !isSmall) && isSidePreview && !showStatistics

    console.log({ pageBASE: page })
    const showBanner = !page.hasProPlan || page.referral?.isOn
    console.log({ showBanner })

    PageComponent = (
      <Fragment>
        <GlobalStyle />
        <PageContainer
          id="page-container"
          className="page-container"
          preloadImage={getImageUrl(false)({
            ...background,
            isBackgroundSelected,
            selectedBackgroundUrl: design?.background?.url,
          })}
          ssrDone={ssrDone}
          focusPoint={background.focusPoint}
          fullscreen={background.fullscreen}
          color={background.color}
          designColor={isBackgroundSelected && design?.background?.color}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
        >
          {!showRedirectOverlay && isSidePreview && (
            <div className="page-container-edit-mode" onClick={onEditModeClick} />
          )}
          {showUpgradeOverlay && <UpgradeOverlay onUpgrade={onUpgrade} ProTag={ProTag} />}
          {/* // TODO: Try to move SectionOverlay for all components here --> sectionOverlays.map(s => <SectionOverlay {...s} />) (To avoid unnecessary prop drilling) */}
          {ssrDone && (
            <Background
              background={{
                ...background,
                isBackgroundSelected,
                selectedBackgroundUrl: design?.background?.url,
              }}
              color={background.color}
              designColor={isBackgroundSelected && design?.background?.color}
              getImageUrl={getUrl}
            />
          )}
          <ForegroundContainer>
            {/* Back Link to onescreener.com */}
            {!noBacklink && !isSidePreview && !!hasPro && (
              <BackLink artistSlug={artistSlug} isPreviewMobile={isPreviewMobile} isPro={hasPro} />
            )}

            {/* Logo */}
            {logo && (
              <LogoBox
                content={content}
                design={isThemeSelected && design}
                getImageUrl={getUrl}
                isEditMode={showRedirectOverlay}
                isPreviewMobile={isPreviewMobile}
                isPreviewMobileReady={isPreviewMobileReady}
                isProPlanRequired={isProPlanRequired}
                isSidePreview={isSidePreview}
                isTeaserLinks={content.type === 'TEASER_LINKS'}
                links={links}
                logo={logo}
                onLogoSectionClick={onLogoSectionClick}
                showRedirectOverlay={showRedirectOverlay}
                zIndex={10}
              />
            )}

            {/* Content */}
            <ContentBox
              analyticsLivePage={analyticsLivePage}
              content={content}
              design={isThemeSelected && design}
              domainName={domainName}
              getImageUrl={getUrl}
              isEditMode={showRedirectOverlay}
              isPreviewMobile={isPreviewMobile}
              isPreviewMobileReady={isPreviewMobileReady}
              isProPlanRequired={isProPlanRequired}
              isSidePreview={isSidePreview}
              links={links}
              logo={logo}
              modalShop={modalShop}
              onContentSectionClick={onContentSectionClick}
              onLoadShopItem={onLoadShopItem}
              pageUrl={pageUrl}
              setModalEmbed={setModalEmbed}
              setModalShop={setModalShop}
              shopEnabled={stripe?.shopEnabled}
              showRedirectOverlay={showRedirectOverlay}
              showStatistics={showStatistics}
              statisticsPeriod={statisticsPeriod}
              trackingVisitorEvents={trackingVisitorEvents}
              visitorSession={visitorSession}
            />

            {!isSidePreview && (
              <Fragment>
                <MonetizationModal
                  getImageUrl={getUrl}
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  onClose={() => setModalShop({ ...modalShop, isOrderSuccess: false, show: false })}
                  isOrderSuccess={isOrderSuccess}
                  show={modalShop.show}
                  onBuyItem={onBuyItem}
                  onLoadOrder={onLoadOrder}
                  shopItem={modalShop.item}
                />

                <MonetizationFinishedModal
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  onClose={() => setModalShop({ ...modalShop, isOrderSuccess: false, show: false })}
                  isOrderSuccess={isOrderSuccess}
                  show={modalShop.isOrderSuccess}
                  onLoadOrder={onLoadOrder}
                  shopItem={modalShop.item}
                />

                <EmbedModal
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  onClose={() => {
                    setModalEmbed({ ...modalEmbed, show: false })

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
                userName={userName || page.userName}
                isPreviewMobile={isPreviewMobile}
                isSidePreview={isSidePreview}
                label={modalData.label}
                onAction={modalData.onAction}
                hasActionFinished={modalData.hasActionFinished}
                onClose={() => setModalData({ ...modalData, show: false })}
                show={modalData.show}
                square={links.square}
              />
            )}

            <LinksBox
              hasPro={hasPro}
              isEditMode={showRedirectOverlay}
              isInstagramBrowser={isInstagramBrowser}
              isPreviewMobile={isPreviewMobile}
              isSidePreview={isSidePreview}
              links={links}
              onLinksSectionClick={onLinksSectionClick}
              position={links.position}
              showRedirectOverlay={showRedirectOverlay}
              zIndex={99}
            >
              {Links({
                content,
                design,
                isThemeSelected,
                isPreviewMobile,
                isSidePreview,
                analyticsLivePage,
                isProPlanRequired,
                statisticsPeriod,
                showStatistics,
                links,
                Modal,
                modalData,
                pageUrl,
                setModalData,
                trackingVisitorEvents,
                domainName,
              })}
            </LinksBox>
          </ForegroundContainer>
          {CustomHtml && <CustomHtml isPreviewMobile={isPreviewMobile} />}
          {showBanner && !isSidePreview && (
            <BannerReferral artistSlug={artistSlug} onReferralOpen={onReferralOpen} />
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
