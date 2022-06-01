/* eslint-disable react/prop-types */
import React, { Component, createRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { MediaMobile } from '../style/media.js'

const HorizontalAlignment = {
  CENTER_LEFT: 'flex-start',
  CENTER_CENTER: 'center',
  CENTER_RIGHT: 'flex-end',
}

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s;

  display: flex;
  justify-content: ${({ alignHorizontal = 'CENTER_LEFT' }) => HorizontalAlignment[alignHorizontal]};
`

const TextContent = styled.div`
  padding: ${({ padding, isMobileView, isSidePreview }) =>
    padding || ((isMobileView || isSidePreview) && '1em 1em') || '1em 2em'};
  background-color: ${({ colorBackground }) => colorBackground || 'transparent'};

  ${({ isLogo }) =>
    isLogo &&
    css`
      display: flex;
      justify-content: center;
    `}

  ${({ includeWidth }) =>
    includeWidth &&
    css`
      & > * {
        display: table-row;
        text-align: center;
      }
    `}
  ${({ adjustWidth }) =>
    adjustWidth
      ? css`
          max-width: 100%;
        `
      : css`
          width: 100%;
        `}

  @media ${MediaMobile} {
    padding: ${({ padding }) => padding || '1em'};
  }
`

const childrenFit = ({ element }) =>
  ![...element.children].some((ch) => {
    let pPadding = parseInt(window.getComputedStyle(element).padding)
    let pWidth = element.scrollWidth
    let cWidth = parseInt(ch.scrollWidth)

    const isInBound = pWidth - pPadding * 2 < cWidth
    return isInBound
  })
const updateFontSize = (element, { maxFontSize, minFontSize, step, includeWidth, isLogo }) => {
  if (!element) return
  const style = window.getComputedStyle(element)
  let fontSize = parseInt(style.fontSize)
  let fontSizeCandidate = maxFontSize

  const parentWidth = element.parentElement.clientWidth
  const parentHeight = element.parentElement.clientHeight

  const firstChild = element.children[0]

  const inBounds = () => {
    const isInBound =
      parentHeight >= element.scrollHeight &&
      (!includeWidth || !isLogo || parentWidth >= firstChild.scrollWidth) &&
      (!includeWidth || parentWidth >= element.scrollWidth) &&
      (isLogo || childrenFit({ element }))

    return isInBound
  }

  const grow = () => {
    fontSize += step

    // Match criteria for currentFontSize
    if (fontSize >= fontSizeCandidate || fontSize >= maxFontSize) return

    // Set new style
    element.style.fontSize = `${fontSize}px`

    // Recursive shrink or grow
    if (inBounds()) {
      grow()
    } else {
      fontSizeCandidate = fontSize
      shrink()
    }
  }

  const shrink = () => {
    fontSize -= step

    // Match criteria for fontSizeCandidate
    if (fontSize <= minFontSize) return

    // Set new style
    element.style.fontSize = `${fontSize}px`

    // Recursive shrink or grow
    if (inBounds()) {
      grow()
    } else {
      shrink()
    }
  }

  // Kick off resizing
  if (inBounds()) {
    grow()
  } else {
    shrink()
  }

  return
}

export const AutoTextFit = ({
  // amount of increasing or decreasing the fontsize
  step = 0.5,

  // the maximum font size in pixel.
  maxFontSize = 100,

  // the minimum font size in pixel.
  minFontSize = 1,

  // avoid line breaks
  includeWidth = false,
  isLogo,
  isMobileView,
  textValue,
  alignHorizontal,
  adjustWidth,
  children,
  colorBackground,
  padding,
  isSidePreview,
}) => {
  const [ssrDone, setSsrDone] = useState(false)
  const [resized, setResized] = useState(false)

  const TextRef = useRef(null)
  let resizeObserver = null

  const options = {
    maxFontSize,
    minFontSize,
    step,
    includeWidth,
    isLogo,
  }

  const setNewWindowSize = () => setResized(false)

  useEffect(() => {
    // Add window resize listener
    window.addEventListener('resize', setNewWindowSize)

    // Listen to parent element dimensions' change
    resizeObserver = new ResizeObserver(() => {
      const element = TextRef?.current
      updateFontSize(element, options)
    })

    const element = TextRef?.current
    resizeObserver.observe(element?.parentElement)

    if (isSidePreview) {
      setTimeout(() => {
        if (!ssrDone) {
          // !HACKS: virtual replacement for 'load' - sometimes on migrating/building 'load' event listener doesn't fire off
          setSsrDone(true)
        }
      }, 1500)
    }

    // window.addEventListener('load', () => {
    //   setTimeout(() => {
    //     // Update size only once DOM is loaded and take the calculated Ref
    //     console.log('autoteif load')
    // TODO: read about multiple loads on the dom elements
    setSsrDone(true)
    updateFontSize(element, options)
    //   }, 0)
    // })
    return () => {
      if (!!resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (resized) {
      setResized(false)
    }
  }, [isMobileView, textValue, includeWidth, isSidePreview])

  useEffect(() => {
    if (ssrDone && !resized) {
      // Resize text if window size or props are changed
      const element = TextRef?.current
      updateFontSize(element, options)
      setResized(true)
    }
  }, [isMobileView, textValue, includeWidth, ssrDone, resized])

  return (
    <TextContainer
      id="auto-text-fit-container"
      show={ssrDone && resized}
      alignHorizontal={alignHorizontal}
      isLogo={isLogo}
    >
      <TextContent
        adjustWidth={adjustWidth}
        colorBackground={colorBackground}
        padding={padding}
        ref={TextRef}
        includeWidth={includeWidth}
        isMobileView={isMobileView}
        isSidePreview={isSidePreview}
        isLogo={isLogo}
      >
        {children}
        {
          /* Give some space at the end */
          !isLogo && (
            <p>
              <br />
            </p>
          )
        }
      </TextContent>
    </TextContainer>
  )
}
