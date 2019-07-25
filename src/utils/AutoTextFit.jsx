import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: ${({ show }) => (show ? 1 : 0.1)};
  transition: opacity 0.3s;
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

export class AutoTextFit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ssrDone: false,
      resized: true,
    }

    this.setNewWindowSize = this.setNewWindowSize.bind(this)
    this.TextRef = createRef()
  }

  setNewWindowSize() {
    this.setState({ resized: false })
  }

  componentDidMount() {
    // Add window resize listener
    window.addEventListener('resize', this.setNewWindowSize)

    this.setState({ ssrDone: true, resized: false })
  }

  componentDidUpdate() {
    const { ssrDone, resized } = this.state

    if (ssrDone && !resized) {
      // Resize text if window size is set or changes
      const { maxFontSize, minFontSize, step, includeWidth } = this.props
      const options = { maxFontSize, minFontSize, step, includeWidth }
      const element = this.TextRef.current

      updateFontSize(element, options)

      this.setState({ resized: true })
    }
  }

  render() {
    const { children, padding } = this.props
    const { ssrDone, resized } = this.state

    return (
      <TextContainer show={ssrDone && resized}>
        <TextContent ref={this.TextRef}>{children}</TextContent>
      </TextContainer>
    )
  }
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
