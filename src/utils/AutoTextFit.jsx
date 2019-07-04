import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: ${({ padding }) => padding};
`

const TextContent = styled.div`
  width: 100%;
`

const DEFAULTS = {
  // amount of increasing or decreasing the fontsize
  step: 0.5,

  // the maximum font size in pixel.
  maxFontSize: 100,

  // the maximum font size in pixel.
  minFontSize: 1,

  // avoid line breaks
  includeWidth: false,
}

const updateFontSize = (
  element,
  { maxFontSize, minFontSize, step, includeWidth }
) => {
  const style = window.getComputedStyle(element)
  let fontSize = parseInt(style.fontSize)
  let fontSizeCandidate = maxFontSize

  const parentWidth = element.parentElement.clientWidth
  const parentHeight = element.parentElement.clientHeight

  const inBounds = () => {
    return (
      parentHeight >= element.scrollHeight &&
      (!includeWidth || parentWidth >= element.scrollWidth)
    )
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

export const AutoTextFit = ({ children, padding, ...options }) => {
  let TextRef = React.createRef()
  const [initialized, setInitialized] = useState(false)
  const [resizing, setResizing] = useState(false)
  const [windowSize, setWindowSize] = useState(
    `${window.innerWidth}/${window.innerHeight}`
  )

  useEffect(() => {
    if (!resizing) {
      setResizing(true)
      const element = TextRef.current
      updateFontSize(element, options)
      return () => setResizing(false)
    }
  }, [windowSize])

  // Add window resize listener
  useEffect(() => {
    const setNewWindowSize = () =>
      setWindowSize(`${window.innerWidth}/${window.innerHeight}`)
    window.addEventListener('resize', setNewWindowSize)
    setInitialized(true)
    return () => window.removeEventListener('resize', setNewWindowSize)
  }, [initialized])

  return (
    <TextContainer padding={padding}>
      <TextContent ref={TextRef}>
        {children}
      </TextContent>
    </TextContainer>
  )
}

AutoTextFit.propTypes = {
  padding: PropTypes.string,
  step: PropTypes.number,
  maxFontSize: PropTypes.number,
  minFontSize: PropTypes.number,
  onResize: PropTypes.bool,
  includeWidth: PropTypes.bool,
  children: PropTypes.node,
}

AutoTextFit.defaultProps = DEFAULTS
