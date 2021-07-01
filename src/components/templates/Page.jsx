/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { customHtml } from '../molecules/customHtml/index.jsx'

// Atoms
import { BackLink } from '../atoms/BackLink'

// Molecules
import { Links } from '../molecules/links/Links.jsx'
import { TextModal } from '../molecules/modals/TextModal'
import { ShopModal } from '../molecules/modals/ShopModal.js'

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
import { ShopFinishedModal } from '../molecules/modals/ShopFinishedModal.js'

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

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
  domainName,
  hasPro,
  isInstagramBrowser,
  isOrderSuccess,
  isPreviewMobile,
  isPreviewMobileReady,
  isSidePreview,
  Modal,
  noBacklink,
  onBuyItem,
  onContentSectionClick,
  onLinksSectionClick,
  onLoadOrder,
  onLogoSectionClick,
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
  }, [])
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

  let PageComponent = null

  if (page) {
    const { background, logo, content, design, selectedThemeId } = page
    const { links } = page || { links: { list: [] } }
    // const domainName = page.domainName
    const CustomHtml = content?.customHTML > '' ? customHtml[content.customHTML] : null

    const isBackgroundSelected =
      background.selectedBackgroundId > '' && background.selectedBackgroundId !== 'custom'
    const isThemeSelected = selectedThemeId > '' && selectedThemeId !== 'custom'

    const showRedirectOverlay = isSidePreview && !showStatistics

    PageComponent = (
      <Fragment>
        <GlobalStyle />
        <PageContainer
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
            {!noBacklink && !isSidePreview && (
              <BackLink isPreviewMobile={isPreviewMobile} isPro={hasPro} />
            )}

            {/* Logo */}
            {logo && (
              <LogoBox
                design={isThemeSelected && design}
                logo={logo}
                links={links}
                getImageUrl={getUrl}
                isPreviewMobile={isPreviewMobile}
                isPreviewMobileReady={isPreviewMobileReady}
                isSidePreview={isSidePreview}
                isTeaserLinks={content.type === 'TEASER_LINKS'}
                isProPlanRequired={isProPlanRequired}
                showRedirectOverlay={showRedirectOverlay}
                zIndex={10}
                onLogoSectionClick={onLogoSectionClick}
              />
            )}

            {/* Content */}
            <ContentBox
              analyticsLivePage={analyticsLivePage}
              content={content}
              design={isThemeSelected && design}
              domainName={domainName}
              isPreviewMobile={isPreviewMobile}
              isPreviewMobileReady={isPreviewMobileReady}
              isProPlanRequired={isProPlanRequired}
              isSidePreview={isSidePreview}
              links={links}
              modalShop={modalShop}
              onContentSectionClick={onContentSectionClick}
              pageUrl={pageUrl}
              setModalShop={setModalShop}
              showRedirectOverlay={showRedirectOverlay}
              showStatistics={showStatistics}
              statisticsPeriod={statisticsPeriod}
              trackingVisitorEvents={trackingVisitorEvents}
              visitorSession={visitorSession}
            />

            <ShopModal
              isSidePreview={isSidePreview}
              isPreviewMobile={isPreviewMobile}
              onClose={() => setModalShop({ ...modalShop, isOrderSuccess: false, show: false })}
              isOrderSuccess={isOrderSuccess}
              show={modalShop.show}
              onBuyItem={onBuyItem}
              onLoadOrder={onLoadOrder}
              shopItem={modalShop.item}
            />

            <ShopFinishedModal
              isSidePreview={isSidePreview}
              isPreviewMobile={isPreviewMobile}
              onClose={() => setModalShop({ ...modalShop, isOrderSuccess: false, show: false })}
              isOrderSuccess={isOrderSuccess}
              show={modalShop.isOrderSuccess}
              onLoadOrder={onLoadOrder}
              shopItem={modalShop.item}
            />

            {/* Links */}
            {links.list.length > 0 && (
              <Fragment>
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

                <LinksBox
                  position={links.position}
                  zIndex={99}
                  isSidePreview={isSidePreview}
                  isPreviewMobile={isPreviewMobile}
                  isInstagramBrowser={isInstagramBrowser}
                  showRedirectOverlay={showRedirectOverlay}
                  onLinksSectionClick={onLinksSectionClick}
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
                    visitorSession,
                    domainName,
                  })}
                </LinksBox>
              </Fragment>
            )}
          </ForegroundContainer>
          {CustomHtml && <CustomHtml isPreviewMobile={isPreviewMobile} />}
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
