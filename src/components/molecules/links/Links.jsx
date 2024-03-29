/* eslint-disable react/prop-types */
// React
import React, { Fragment, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

// Molecules
import { PlatformLink } from './PlatformLink'

// Icons
import { PlatformLinkIcon } from '../../icons/platform/index'

// Utils
import { mapSmartLinks } from './utils/mapSmartLinks'
import { filterTime } from '../../../api'
import { getFromDate } from '../../../api'

/*
 * Render Link list
 */

export const Links = ({
  analyticsLivePage,
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
  statisticsPeriod,
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
    let clicks = 0

    const fromDate = getFromDate(statisticsPeriod)

    analyticsLivePage.forEach((session) => {
      filterTime(session.analytics?.category?.links, fromDate)?.forEach((link) => {
        if (link.platform === platform) clicks += 1
      })
    })

    return clicks
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
