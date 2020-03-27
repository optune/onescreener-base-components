import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

// Styles
const SponsorsHolder = styled.div`
  position: absolute;
  display: block;
  opacity: ${({ open }) => open ? 1 : 0.3};
  bottom: 2em;
  right: ${({ open }) => open ? 0 : '-100px'};
  width: 80px;
  cursor: pointer;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: center;
  z-index: 5;
  transition: right 0.25s, opacity 0.3s;

  &.open {
    opacity: 1;
    right: 0px;
  }
`

const SponsorsHolderOpener = styled.div`
  font-size: 0.7em;
  position: absolute;
  bottom: 15em;
  right: -2px;
  background-color: #808080;
  color: #FFFFFF;
  border: none;
  opacity: 0.6;
  padding: 0.1em 0.5em 5px 0.5em;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  transition: opacity 0.3s;
  z-index: 3;

  &:hover {
    opacity: 1;
  }
`

export const Sponsors = () => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <SponsorsHolderOpener
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen(true)}
      >
        supported by
      </SponsorsHolderOpener>
      <SponsorsHolder
        open={open}
        onMouseLeave={() => setOpen(false)}
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
