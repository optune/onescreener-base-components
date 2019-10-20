import React, { Component, createRef } from 'react'
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
  opacity: ${({ show }) => (show ? 1 : 0.1)};
  transition: opacity 0.3s;

  display: flex;
  justify-content: ${({ alignHorizontal = 'CENTER_LEFT' }) => HorizontalAlignment[alignHorizontal]};
`

const TextContent = styled.div`
  padding: 1em 2em;
  background-color: ${({ colorBackground }) => colorBackground || 'transparent'};

  ${({ adjustWidth }) =>
    adjustWidth
      ? css`
          max-width: 100%;
        `
      : css`
          width: 100%;
        `}

  @media ${MediaMobile} {
    padding: 1em 1em;
  }
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

const updateFontSize = (element, { maxFontSize, minFontSize, step, includeWidth }) => {
  const style = window.getComputedStyle(element)
  let fontSize = parseInt(style.fontSize)
  let fontSizeCandidate = maxFontSize

  const parentWidth = element.parentElement.clientWidth
  const parentHeight = element.parentElement.clientHeight

  const inBounds = () => {
    return (
      parentHeight >= element.scrollHeight && (!includeWidth || parentWidth > element.scrollWidth)
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
    const { alignHorizontal, adjustWidth, children, colorBackground, padding } = this.props
    const { ssrDone, resized } = this.state

    return (
      <TextContainer show={ssrDone && resized} alignHorizontal={alignHorizontal}>
        <TextContent ref={this.TextRef} colorBackground={colorBackground} adjustWidth={adjustWidth}>
          {children}
          {/* Give some space at the end */}
          <p>
            <br />
          </p>
        </TextContent>
      </TextContainer>
    )
  }
}

AutoTextFit.propTypes = {
  alignHorizontal: PropTypes.oneOf(Object.keys(HorizontalAlignment)),
  adjustWidth: PropTypes.bool,
  children: PropTypes.node,
  colorBackground: PropTypes.string,
  includeWidth: PropTypes.bool,
  maxFontSize: PropTypes.number,
  minFontSize: PropTypes.number,
  onResize: PropTypes.bool,
  padding: PropTypes.string,
  step: PropTypes.number,
}

AutoTextFit.defaultProps = DEFAULTS
