import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BackgroundColor, ForegroundColor } from '../../../style/color'
import { MediaMobile, MediaSmallMobile, ZIndex1 } from '../../../style/media'

const slideUp = keyframes`
  from {
      opacity: 0;
      transform: translate(-50%, 100%);
  } 
  to {
      opacity: 1;
      transform: translate(-50%, 0);
  }
`

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: ${ZIndex1};
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  animation: ${slideUp} 0.2s ease-out;

  width: 100%;
  height: 36px;
  max-width: 480px;

  background-color: ${BackgroundColor.special};
  color: ${ForegroundColor.subsecondary};
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
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.33), rgba(255, 255, 255, 0.33)),
        linear-gradient(103.91deg, #ff0f00 -8.61%, #cc00ff 109.27%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media ${MediaMobile} {
    border-radius: 0;

    .brand {
      font-size: 12px;
      margin-left: 12px;
    }

    .referral {
      font-size: 12px;
      line-height: 12px;
      margin-right: 12px;
    }
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

export const BannerReferral = ({ t, onReferralOpen, ...other }) => {
  return (
    <Container onClick={onReferralOpen} {...other}>
      <div className="brand">
        <h1>
          <span>{t('referral.create')} </span>
          {/* <a
            onClick={(e) => e.stopPropagation()}
            href={`https://www.onescreener.com/sign-up?utm_source=livepage&utm_medium=banner&utm_campaign=${
              artistSlug || 'unknown'
            }`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            Onescreener
          </a> */}
        </h1>
      </div>
      <div className="referral">
        <h1>{t('referral.signup', { percent: 25 })}</h1>
      </div>
    </Container>
  )
}
