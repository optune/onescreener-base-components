// React
import React from 'react'
import styled from 'styled-components'

// Atoms
import { Link } from '../../atoms/links/Link'
import { LinkIconMapper } from '../../atoms/links/LinkIconMapper'

const LinkWrapper = styled.a`
  text-decoration: none;
  /* margin: ${({ isPreviewMobile }) => isPreviewMobile && '0 4px'}; */
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
  pointer-events: ${({ notInteractive }) => (notInteractive ? 'none' : 'auto')};
`

const LinkWrapperText = styled.div`
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
  pointer-events: ${({ notInteractive }) => (notInteractive ? 'none' : 'auto')};
`

export const PlatformLink = ({
  trackingVisitorEvents,
  visitorSession,
  domainName,
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  email,
  actionText,
  isHighlighted,
  isPreviewMobile,
  isSidePreview,
  isWithoutIcon,
  label,
  margin,
  modalData,
  name,
  notInteractive,
  noShadow,
  platform,
  position,
  setModalData,
  size,
  square,
  target,
  text,
  url,
}) => {
  console.log({ PlatformLink: domainName })
  const Icon = LinkIconMapper({ platform, size })
  const labelText = (
    name ||
    label ||
    platform
  ).replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, (l) => l.toUpperCase())

  if (platform === 'DONATION') {
    return (
      <LinkWrapperText
        notInteractive={notInteractive}
        onClick={() => {
          setModalData({
            show: true,
            title: name,
            content: text,
            paypalLink: `https://www.paypal.com/donate?business=${email}&currency_code=USD`,
            label: labelText,
            onAction:
              actionText > ''
                ? () => {
                    setModalData({
                      ...modalData,
                      show: true,
                      label: labelText,
                      paypalLink: `https://www.paypal.com/donate?business=${email}&currency_code=USD`,
                      title: name,
                      content: actionText,

                      hasActionFinished: true,
                    })
                  }
                : null,
          })
        }}
      >
        <Link
          border={border}
          circle={circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          margin={margin}
          position={position}
          notInteractive={notInteractive}
          noShadow
          isHighlighted
          isSpecial={isWithoutIcon}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          size={size || 'M'}
          square={square}
        >
          {isWithoutIcon ? (
            'DONATE'
          ) : (
            <Icon
              color={color}
              size={size}
              isPreviewMobile={isPreviewMobile}
              isSidePreview={isSidePreview}
            />
          )}
        </Link>
      </LinkWrapperText>
    )
  } else if (url > '') {
    return (
      <LinkWrapper
        href={url}
        title={labelText}
        target={target || '_blank'}
        rel="noopener noreferrer"
        notInteractive={notInteractive}
        onClick={() => {
          trackingVisitorEvents({
            visitorSession,
            domainName: 'bbb.onescreener.show',
            category: {
              links: {
                event: {
                  name: labelText,
                  url: url,
                },
              },
            },
          })
        }}
      >
        <Link
          border={border}
          circle={circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          margin={margin}
          notInteractive={notInteractive}
          position={position}
          noShadow
          isHighlighted={isHighlighted}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          size={size || 'M'}
          square={square}
        >
          <Icon
            color={color}
            size={size}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
          />
        </Link>
      </LinkWrapper>
    )
  } else if (text > '' && setModalData) {
    return (
      <LinkWrapperText
        notInteractive={notInteractive}
        onClick={() => setModalData({ show: true, content: text, label: labelText })}
      >
        <Link
          border={border}
          circle={circle}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          margin={margin}
          notInteractive={notInteractive}
          noShadow
          isHighlighted={isHighlighted}
          isPreviewMobile={isPreviewMobile}
          position={position}
          isSidePreview={isSidePreview}
          size={size || 'M'}
          square={square}
        >
          <Icon
            color={color}
            size={size}
            isPreviewMobile={isPreviewMobile}
            isSidePreview={isSidePreview}
          />
        </Link>
      </LinkWrapperText>
    )
  } else {
    return (
      <Link
        onClick={() => trackingVisitorStats()}
        border={border}
        circle={circle}
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
        notInteractive={notInteractive}
        noShadow
        position={position}
        isHighlighted={isHighlighted}
        isPreviewMobile={isPreviewMobile}
        isSidePreview={isSidePreview}
        isPreview
        size={size || 'M'}
        square={square}
      >
        <Icon
          color={color}
          size={size}
          isPreviewMobile={isPreviewMobile}
          isSidePreview={isSidePreview}
          isPreview
        />
      </Link>
    )
  }
}
