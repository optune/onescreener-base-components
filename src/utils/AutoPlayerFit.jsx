/* eslint-disable react/prop-types */
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlayerWrapperInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  opacity: ${({ show }) => (show ? 1 : 0.1)};
`

const DEFAULTS = {
  step: 0.5,

  minPercent: 1,

  maxPercent: 100,
}

const setMargin = (el) => {
  const style = window.getComputedStyle(el)
  const parentStyle = window.getComputedStyle(el.parentElement.parentElement)

  return (el.style.margin = `${(parseInt(parentStyle.height) - parseInt(style.height)) / 2}px ${
    (parseInt(parentStyle.width) - parseInt(style.width)) / 2
  }px`)
}

const updateHeight = (element, { step, minPercent, maxPercent }) => {
  let percentSize = maxPercent - 2
  let percentSizeCandidate = maxPercent

  const parentHeight = element.parentElement.parentElement.clientHeight

  const inBounds = () => parentHeight > element.clientHeight

  const grow = () => {
    percentSize += step

    if (percentSize >= maxPercent || percentSize >= percentSizeCandidate) return

    element.style.width = `${percentSize}%`
    element.style.height = `${percentSize}%`
    setMargin(element, percentSize)

    if (inBounds()) {
      grow()
    } else {
      percentSizeCandidate = percentSize
      shrink()
    }
  }

  const shrink = () => {
    percentSize -= step

    if (percentSize <= minPercent) return

    element.style.width = `${percentSize}%`
    element.style.height = `${percentSize}%`
    setMargin(element, percentSize)

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

export class AutoPlayerFit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ssrDone: false,
      resized: true,
    }

    this.setNewWindowSize = this.setNewWindowSize.bind(this)
    this.PlayerRef = createRef()
    this.resizeObserver = null
  }

  setNewWindowSize() {
    this.setState({ resized: false })
  }

  componentDidMount() {
    window.addEventListener('resize', this.setNewWindowSize)

    // Listen to parent element dimensions' change
    const { minPercent, maxPercent, step } = this.props
    const options = { minPercent, maxPercent, step }
    const element = this.PlayerRef.current

    this.resizeObserver = new ResizeObserver(() => {
      updateHeight(element, options)
    })

    this.resizeObserver.observe(element.parentElement.parentElement)

    this.setState({ ssrDone: true, resized: false })
  }

  componentDidUpdate(prevProps) {
    const { ssrDone, resized } = this.state
    const shouldResize = this.props.isPreviewMobile !== prevProps.isPreviewMobile

    if (resized && shouldResize) {
      this.setState({ resized: false })
    }

    if (ssrDone && !resized) {
      const { minPercent, maxPercent, step } = this.props
      const options = { minPercent, maxPercent, step }
      const element = this.PlayerRef.current

      updateHeight(element, options)

      this.setState({ resized: true })
    }
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  }

  render() {
    const { children } = this.props
    const { ssrDone, resized } = this.state

    return (
      <PlayerWrapper show={ssrDone && resized}>
        <PlayerWrapperInner ref={this.PlayerRef}>{children}</PlayerWrapperInner>
      </PlayerWrapper>
    )
  }
}

AutoPlayerFit.propTypes = {
  children: PropTypes.node,
  isPreviewMobile: PropTypes.bool,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  maxPercent: PropTypes.number,
  minPercent: PropTypes.number,
  onResize: PropTypes.bool,
  step: PropTypes.number,
}

AutoPlayerFit.defaultProps = DEFAULTS
