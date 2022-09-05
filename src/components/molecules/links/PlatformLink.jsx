// React
import React, { useEffect } from 'react'
import styled from 'styled-components'

// Atoms
import { Link } from '../../atoms/links/Link'
import { LinkIconMapper } from '../../atoms/links/LinkIconMapper'
import { StatisticsOverlay } from '../../atoms/StatisticsOverlay'

const LinkWrapper = styled.a`
position: relative;
text-decoration: none;
  /* margin: ${({ isPreviewMobile }) => isPreviewMobile && '0 4px'}; */
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
  pointer-events: ${({ notInteractive }) => (notInteractive ? 'none' : 'auto')};
`

const LinkWrapperText = styled.div`
  position: relative;
  cursor: ${({ notInteractive }) => (notInteractive ? 'default' : 'pointer')};
  pointer-events: ${({ notInteractive }) => (notInteractive ? 'none' : 'auto')};
`

export const PlatformLink = ({
  actionText,
  autoOpenId,
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  domainName,
  email,
  isHighlighted,
  isPreviewMobile,
  isSidePreview,
  isWithoutIcon,
  label,
  linkClicks,
  margin,
  modalData,
  name,
  noShadow,
  notInteractive,
  onOpenModal,
  platform,
  position,
  setModalData,
  showStatistics,
  size,
  square,
  target,
  text,
  trackingVisitorEvents,
  url,
}) => {
  const Icon = LinkIconMapper({ platform, size })
  const labelText = (
    name ||
    label ||
    platform
  ).replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, (l) => l.toUpperCase())

  const handleDonationModalOpen = () => {
    if (platform !== 'DONATION' || !setModalData) return

    trackingVisitorEvents({
      domainName,
      category: {
        links: {
          event: {
            name: labelText,
            platform: platform,
          },
        },
      },
    }).then((r) => r)
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
    onOpenModal('donation')
  }

  const handleTextModalOpen = () => {
    if (!text || !setModalData) return

    trackingVisitorEvents({
      domainName,
      category: {
        links: {
          event: {
            name: labelText,
            platform: platform,
            url: text,
          },
        },
      },
    }).then((r) => r)
    setModalData({ show: true, content: text, label: labelText })
    onOpenModal(platform)
  }

  console.log({ platform, text })
  useEffect(() => {
    switch (autoOpenId) {
      case 'donation':
        handleDonationModalOpen()
        break
      case platform:
        handleTextModalOpen()
      default:
        break
    }
  }, [autoOpenId])

  if (platform === 'DONATION') {
    return (
      <LinkWrapperText notInteractive={notInteractive} onClick={handleDonationModalOpen}>
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
          {showStatistics && (
            <StatisticsOverlay>
              <div> {linkClicks()}</div>
            </StatisticsOverlay>
          )}
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
            domainName,
            category: {
              links: {
                event: {
                  name: labelText,
                  platform: platform,
                  url: url,
                },
              },
            },
          }).then((r) => r)
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
          {showStatistics && (
            <StatisticsOverlay>
              <div> {linkClicks()}</div>
            </StatisticsOverlay>
          )}
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
      <LinkWrapperText notInteractive={notInteractive} onClick={handleTextModalOpen}>
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
          {showStatistics && (
            <StatisticsOverlay>
              <div> {linkClicks()}</div>
            </StatisticsOverlay>
          )}
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
        onClick={() =>
          trackingVisitorEvents({
            domainName,
            category: {
              links: {
                event: {
                  name: labelText,
                  platform: platform,
                },
              },
            },
          }).then((r) => r)
        }
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
        {showStatistics && (
          <StatisticsOverlay>
            <div> {linkClicks()}</div>
          </StatisticsOverlay>
        )}
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
