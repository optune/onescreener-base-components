/* eslint-disable react/prop-types */
// React
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

// Molecules
import { PlatformLink } from './PlatformLink'

// Icons
import { PlatformLinkIcon } from '../../icons/platform/index'

// Utils
import { mapSmartLinks } from './utils/mapSmartLinks'

/*
 * Render Link list
 */

export const Links = ({
  analyticsLinkClicks,
  content,
  design,
  domainName,
  isPreviewMobile,
  isProPlanRequired,
  isSidePreview,
  isThemeSelected,
  links,
  linksColorState,
  modalData,
  pageUrl,
  setModalData,
  showStatistics,
  trackingVisitorEvents,
  ...other
}) => {
  const color =
    linksColorState?.colorLinks ||
    (isThemeSelected && design?.theme?.links?.colorLinks) ||
    links.colorLinks ||
    content.color
  const colorAccent =
    linksColorState?.colorLinksAccent ||
    (isThemeSelected && design?.theme?.links?.colorLinksAccent) ||
    links.colorLinksAccent ||
    content.colorAccent
  const colorBackground =
    linksColorState?.colorLinksBackground ||
    (isThemeSelected && design?.theme?.links?.colorLinksBackground) ||
    links.colorLinksBackground ||
    content.colorBackground
  const colorBackgroundAccent =
    linksColorState?.colorLinksBackgroundAccent ||
    (isThemeSelected && design?.theme?.links?.colorLinksBackgroundAccent) ||
    links.colorLinksBackgroundAccent ||
    content.colorBackgroundAccent

  const mappedLinks = links.list
    .filter(({ platform, url }) => !!PlatformLinkIcon[platform])
    .map(mapSmartLinks(pageUrl))

  const getLinkClicks = (platform) => () => {
    if (isProPlanRequired) return '?'
    const match = analyticsLinkClicks?.find((entry) => entry?.platform === platform)
    return match?.count || 0
  }

  return (
    <Fragment>
      {mappedLinks.map((link) => (
        <PlatformLink
          trackingVisitorEvents={trackingVisitorEvents}
          domainName={domainName}
          border={links.border}
          circle={links.circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          isHighlighted={link.isHighlighted}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          showStatistics={showStatistics}
          linkClicks={getLinkClicks(link.platform)}
          email={link.email}
          actionText={link.actionText}
          isWithoutIcon={link.platform === 'DONATION'}
          position={links.position}
          key={link.platform}
          label={link.label}
          modalData={modalData}
          name={link.name}
          platform={link.platform}
          setModalData={setModalData}
          size={links.size}
          square={links.square}
          target={link.target}
          text={link.text}
          url={
            // TODO: refactor, use real email field maybe
            link.platform === 'MAIL' ? `mailto:${link.url}` : link.url
          }
          {...other}
        />
      ))}
    </Fragment>
  )
}
