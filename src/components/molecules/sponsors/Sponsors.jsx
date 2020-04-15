import React, { Fragment, useRef } from 'react'
import styled from 'styled-components'

// Styles
const SponsorsHolder = styled.div`
  position: absolute;
  transition: all 0.3s;
  opacity: 0.3;
  bottom: 2em;
  right: -100px;
  width: 80px;
  cursor: pointer;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: center;
  z-index: 5;

  &.open {
    opacity: 1;
    right: 0px;
    display: block;
  }
`

const SponsorsHolderOpener = styled.div`
  border: none;
  font-size: 0.7em;
  position: absolute;
  bottom: 15em;
  right: -2px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  background-color: #808080;
  color: white;
  padding: 0.1em 0.5em 5px 0.5em;
  transition: all 0.3s;
  z-index: 3;
  background-color: #808080;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

export const Sponsors = () => {
  const refHolder = useRef(null)
  const refHolderOpener = useRef(null)

  function showSponsors() {
    window.setTimeout(function() {
      refHolder.current.classList.add('open')
      refHolderOpener.current.style.display = 'none'
    }, 10)
  }

  function hideSponsors(e) {
    window.setTimeout(function() {
      if (e.type === 'click') if (e.target === refHolderOpener.current) return
      refHolder.current.classList.remove('open')
      refHolderOpener.current.style.display = 'block'
    }, 300)
  }

  // const style = document.createElement('style')
  // style.setAttribute()
  // style.innerText = 'body {overflow-x: hidden;}'
  // document.head.appendChild(style)
  // document.onclick = hideSponsors

  return (
    <Fragment>
      <SponsorsHolderOpener
        ref={refHolderOpener}
        className="sponsors-holder-opener"
        onMouseEnter={e => showSponsors()}
        onClick={e => showSponsors()}
      >
        supported by
      </SponsorsHolderOpener>
      <SponsorsHolder
        ref={refHolder}
        className="sponsors-holder"
        onMouseLeave={e => hideSponsors(e)}
      >
        <div className="sponsors-inner">
          <a
            title="Audi"
            href="https://www.audi.com/"
            target="_blank"
            style={{
              display: 'inline-block',
              marginBottom: '2em',
              marginTop: '1.5em',
            }}
          >
            <img
              alt="Audi"
              width="100%"
              src="https://daks2k3a4ib2z.cloudfront.net/58907b372ec3cb834efe0854/594cd98a8372272ab27971b5_Rings_1C_Solid-bl_Audi.png"
            ></img>
          </a>
          <a
            title="Monster Energy"
            href="https://www.monsterenergy.com/"
            target="_blank"
            style={{ display: 'inline-block', marginBottom: '2em' }}
          >
            <img
              alt="Monster Energy"
              width="100%"
              src="http://res.cloudinary.com/optune-me/image/upload/c_scale,e_grayscale,w_180/v1464265981/custom/iouripodladtchikov.ch/MonsterLogo2-icon.png"
            ></img>
          </a>
          <a
            title="Moncler"
            href="http://www.moncler.com/"
            target="_blank"
            style={{ display: 'inline-block', marginBottom: '3em' }}
          >
            <img
              alt="Moncler"
              width="100%"
              src="http://res.cloudinary.com/optune-me/image/upload/e_grayscale/v1464265981/custom/iouripodladtchikov.ch/moncler-logo-icon.png"
            ></img>
          </a>
          <a
            title="TSG"
            href="http://www.tsg.ch/"
            target="_blank"
            style={{ display: 'inline-block', marginBottom: '3em' }}
          >
            <img
              title="TSG"
              width="60%"
              src="http://res.cloudinary.com/optune-me/image/upload/c_scale,e_grayscale,w_180/v1464266024/custom/iouripodladtchikov.ch/TSG-Logo-icon.png"
            ></img>
          </a>
        </div>
      </SponsorsHolder>
    </Fragment>
  )
}
