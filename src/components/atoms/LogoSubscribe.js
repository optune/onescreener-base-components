import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

import { CheckIcon } from '../icons/info/Check'
import { CloseDarkIcon } from '../icons/CloseIcon'

import { Button } from './buttons/Button'

import { BackgroundColor } from '../../style/color'
import { MediaSmall } from '../../style/media'
import { ComponentLoading } from '../molecules/loaders/ComponentLoading'

const Container = styled.div`
  position: absolute;
  bottom: -11px;
  left: 0;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  height: auto;
  pointer-events: ${({ isSidePreview }) => (isSidePreview ? 'none' : 'auto')};
  width: 100%;
  border-radius: 50px;
  background-color: ${({ ssrDone }) => (ssrDone ? 'transparent' : BackgroundColor.loadingUI)};

  button {
    border-radius: 50px;
    padding: ${({ isSidePreview }) => (isSidePreview ? '2px 4px' : '4px 8px')};
    font-size: ${({ isSidePreview }) => (isSidePreview ? '7px' : '12px')};
    line-height: 1;
    height: ${({ isSidePreview }) => (isSidePreview ? '14px' : '22px')};
    min-height: ${({ isSidePreview }) => (isSidePreview ? '14px' : '22px')};
    font-family: ${({ font }) => font || 'Open Sans'};
    background-color: ${({ colorBackground }) => colorBackground};
    color: ${({ color }) => color};
    white-space: nowrap;

    &:not(:first-child) {
      margin-left: 5px;
    }

    svg.icon {
      width: 12px;
      height: 12px;
    }

    &.subscription-status {
      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      svg.icon {
        * {
          stroke-width: 4px;
          stroke: ${({ color }) => color};
        }
      }

      .hover {
        width: 9px;
        height: 9px;
        svg.icon {
          width: 9px;
          height: 9px;
          * {
            fill: ${({ color }) => color};
            stroke: none;
          }
        }
      }
    }

    &.subscription-status {
      padding: 0;
      border-radius: 50%;
      height: 22px;
      width: 22px;
      cursor: pointer;

      &:hover {
        .normal {
          display: none;
        }
        .hover {
          display: block;
        }
      }

      .hover {
        display: none;
      }
    }
  }
`

export const LogoSubscribe = ({
  t,
  color,
  colorBackground,
  font,
  isSidePreview,
  isSubscribed,
  isSubscriptionLoading,
  isUser,
  onSubscribe,
  onUnsubscribe,
  showFollowButton,
  ssrDone,
}) => {
  const [subscribed, setSubscribed] = useState(isSubscribed)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleOnSubscribe = () => {
    onSubscribe({ setLoading: setIsSubscribing, setSubscribed })
  }

  const handleOnUnsubscribe = () => {
    onUnsubscribe({ setLoading: setIsSubscribing, setSubscribed })
  }

  useEffect(() => {
    if (isUser) {
      /*
       * Subscribe to page after login
       */

      const search = window.location.search
      const urlParams = new URLSearchParams(search)

      if (urlParams.has('followCurrentArtist')) {
        const subscribe = urlParams.get('followCurrentArtist')
        if (subscribe === 'true') {
          handleOnSubscribe()
          urlParams.delete('followCurrentArtist')
          window.history.pushState({}, '', `${window.location.pathname}?${urlParams.toString()}`)
        }
      }
    }
  }, [isUser])

  useEffect(() => {
    setSubscribed(isSubscribed)
  }, [isSubscribed])

  /* 
   TODO: change icon to cross
  */

  return (
    <Container
      isSidePreview={isSidePreview}
      ssrDone={ssrDone}
      hide={!showFollowButton}
      color={color}
      colorBackground={colorBackground}
      font={font}
    >
      {ssrDone && (isSubscribing || isSubscriptionLoading) ? (
        <ComponentLoading small />
      ) : (
        <Fragment>
          {subscribed && (
            <Button
              className="subscription-status logo-follow-apply-font"
              onClick={handleOnUnsubscribe}
            >
              {' '}
              {isSubscriptionLoading ? (
                <ComponentLoading small />
              ) : (
                <Fragment>
                  <span className="normal">
                    {' '}
                    <CheckIcon />
                  </span>
                  <span className="hover">
                    {' '}
                    <CloseDarkIcon />
                  </span>{' '}
                </Fragment>
              )}
            </Button>
          )}
          {!subscribed && !isSubscriptionLoading && (
            <Button
              className="subscribe-button logo-follow-apply-font"
              secondary
              contrast
              onClick={isSubscriptionLoading ? undefined : handleOnSubscribe}
            >
              {t('follow.button')}
            </Button>
          )}
        </Fragment>
      )}
    </Container>
  )
}
