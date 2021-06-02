// React
import React from 'react'
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
  showStatistics,
  linkClicks,
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
        onClick={() =>
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
        }
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
