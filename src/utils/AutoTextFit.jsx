/* eslint-disable react/prop-types */
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

  overflow-y: scroll;

  /* @media ${MediaMobile} {
    overflow-y: scroll;
  } */
`

const TextContent = styled.div`
  padding: ${({ padding, isMobileView, isSidePreview }) =>
    padding || ((isMobileView || isSidePreview) && '1em 1em') || '1em 1em'};
  background-color: ${({ colorBackground }) => colorBackground || 'transparent'};

  ${({ includeWidth }) =>
    includeWidth &&
    css`
      & > * {
        display: table-row;
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

const DEFAULTS = {
  // amount of increasing or decreasing the fontsize
  step: 0.5,

  // the maximum font size in pixel.
  maxFontSize: 100,

  // the maximum font size in pixel.
  minFontSize: 8,

  // avoid line breaks
  includeWidth: false,
}

const childrenFit = ({ element }) =>
  ![...element.children].some((ch) => {
    let pPadding = parseInt(window.getComputedStyle(element).padding)
    let pWidth = element.scrollWidth
    let cWidth = parseInt(ch.scrollWidth)

    return pWidth - pPadding * 2 < cWidth
  })

const updateFontSize = (element, { maxFontSize, minFontSize, step, includeWidth, isLogo }) => {
  const style = window.getComputedStyle(element)
  let fontSize = parseInt(style.fontSize)
  let fontSizeCandidate = maxFontSize

  const parentWidth = element.parentElement.clientWidth
  const parentHeight = element.parentElement.clientHeight

  const inBounds = () => {
    return (
      parentHeight >= element.scrollHeight &&
      (!includeWidth || parentWidth >= element.scrollWidth) &&
      (isLogo || childrenFit({ element }))
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
    this.resizeObserver = null
  }

  setNewWindowSize() {
    this.setState({ resized: false })
  }

  componentDidMount() {
    // Add window resize listener
    window.addEventListener('resize', this.setNewWindowSize)

    // Listen to parent element dimensions' change
    const { maxFontSize, minFontSize, step, includeWidth, isLogo } = this.props
    const options = { maxFontSize, minFontSize, step, includeWidth, isLogo }
    const element = this.TextRef.current

    this.resizeObserver = new ResizeObserver(() => {
      updateFontSize(element, options)
    })

    this.resizeObserver.observe(element.parentElement)

    this.setState({ ssrDone: true, resized: false })
  }

  componentDidUpdate(prevProps) {
    const { ssrDone, resized } = this.state
    const shouldResize =
      this.props.isMobileView !== prevProps.isMobileView ||
      this.props.textValue !== prevProps.textValue ||
      this.props.includeWidth !== prevProps.includeWidth

    if (resized && shouldResize) {
      this.setState({ resized: false })
    }

    if (ssrDone && !resized) {
      // Resize text if window size is set or changes
      const { maxFontSize, minFontSize, step, includeWidth } = this.props
      const options = { maxFontSize, minFontSize, step, includeWidth }
      const element = this.TextRef.current

      updateFontSize(element, options)

      this.setState({ resized: true })
    }
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  }

  render() {
    const {
      alignHorizontal,
      adjustWidth,
      children,
      colorBackground,
      padding,
      includeWidth,
      isMobileView,
      isSidePreview,
      isLogo,
    } = this.props
    const { ssrDone, resized } = this.state

    return (
      <TextContainer
        id="auto-text-fit-container"
        show={ssrDone && resized}
        alignHorizontal={alignHorizontal}
      >
        <TextContent
          adjustWidth={adjustWidth}
          colorBackground={colorBackground}
          padding={padding}
          ref={this.TextRef}
          includeWidth={includeWidth}
          isMobileView={isMobileView}
          isSidePreview={isSidePreview}
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
}

AutoTextFit.propTypes = {
  alignHorizontal: PropTypes.oneOf(Object.keys(HorizontalAlignment)),
  adjustWidth: PropTypes.bool,
  children: PropTypes.node,
  colorBackground: PropTypes.string,
  includeWidth: PropTypes.bool,
  isMobileView: PropTypes.bool,
  isLogo: PropTypes.bool,
  isSidePreview: PropTypes.bool,
  maxFontSize: PropTypes.number,
  minFontSize: PropTypes.number,
  onResize: PropTypes.bool,
  padding: PropTypes.string,
  step: PropTypes.number,
  textValue: PropTypes.string, // Triggers resizing on text changed
}

AutoTextFit.defaultProps = DEFAULTS
