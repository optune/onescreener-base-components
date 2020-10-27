// React
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

// Molecules
import { PlatformLink } from './PlatformLink'

// Icons
import { PlatformLinkIcon } from '../../icons/platform/index'

// Utils
import { mapSmartLinks } from './utils/mapSmartLinks'

/* 
 * Render Link list
 */

export const Links = ({
  content,
  isPreviewMobile,
  isSidePreview,
  links,
  linksColorState,
  modalData,
  pageUrl,
  setModalData,
}) => {
  const color = linksColorState?.colorLinks || links.colorLinks || content.color
  const colorAccent =
    linksColorState?.colorLinksAccent || links.colorLinksAccent || content.colorAccent
  const colorBackground =
    linksColorState?.colorLinksBackground || links.colorLinksBackground || content.colorBackground
  const colorBackgroundAccent =
    linksColorState?.colorLinksBackgroundAccent ||
    links.colorLinksBackgroundAccent ||
    content.colorBackgroundAccent

  return (
    <Fragment>
      {links.list
        .filter(({ platform, url }) => !!PlatformLinkIcon[platform])
        .map(mapSmartLinks(pageUrl))
        .map((link) => (
          <PlatformLink
            key={link.platform}
            border={links.border}
            circle={links.circle}
            square={links.square}
            size={links.size}
            color={color}
            colorAccent={colorAccent}
            colorBackground={colorBackground}
            colorBackgroundAccent={colorBackgroundAccent}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
            text={link.text}
            name={link.name}
            modalData={modalData}
            setModalData={setModalData}
            {...link}
          />
        ))}
    </Fragment>
  )
}