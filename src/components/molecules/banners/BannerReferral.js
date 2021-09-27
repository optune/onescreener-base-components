import React from 'react'
import styled from 'styled-components'
import { BackgroundColor } from '../../../style/color'
import { MediaMobile, MediaSmallMobile } from '../../../style/media'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  border-radius: 4px 4px 0 0;

  width: 100%;
  height: 36px;
  max-width: 480px;

  background-color: ${BackgroundColor.special};
  color: ${BackgroundColor.base};
  letter-spacing: 0.01em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .brand {
    font-size: 13px;
    color: #fafafa;
    margin-left: 16px;
  }

  .referral {
    letter-spacing: 0.04em;
    color: #55fa4b;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-right: 16px;

    h1 {
      cursor: pointer;
    }
  }

  @media ${MediaMobile} {
    border-radius: 0;
  }

  @media ${MediaSmallMobile} {
    .brand {
      font-size: 10px;
      margin-left: 10px;
    }

    .referral {
      font-size: 11px;
      margin-right: 10px;
    }
  }
`

export const BannerReferral = ({ onReferralOpen }) => {
  return (
    <Container>
      <div className="brand">
        <h1>
          Made with{' '}
          <a href="https://www.onescreener.com/" rel="noopener noreferrer" target="_blank">
            {' '}
            Onescreener
          </a>
        </h1>
      </div>
      <div className="referral">
        <h1 onClick={onReferralOpen}>Sign up and get 20% off</h1>
      </div>
    </Container>
  )
}
