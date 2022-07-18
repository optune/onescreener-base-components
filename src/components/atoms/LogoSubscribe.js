import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

import { UserMinusIcon } from '../icons/page/UserMinus'
import { UserPlusIcon } from '../icons/page/UserPlus'
import { CheckIcon } from '../icons/info/Check'

import { Button } from './buttons/Button'

import { BackgroundColor } from '../../style/color'
import { MediaSmall } from '../../style/media'

const Container = styled.div`
  margin-top: 6px;
  display: flex;
  min-height: ${({ isSidePreview }) => (isSidePreview ? 11 : 22)}px;
  pointer-events: ${({ isSidePreview }) => (isSidePreview ? 'none' : 'auto')};

  button {
    border-radius: 4px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    &:not(:first-child) {
      margin-left: 5px;
    }

    svg.icon {
      width: 18px;
      height: 18px;
    }

    &.subscribe-button {
      border: 1px solid ${BackgroundColor.accent};

      svg.icon {
        * {
          stroke: ${BackgroundColor.accent};
        }
      }

      @media ${MediaSmall} {
        min-height: 23px;
        height: 100%;
      }
    }

    &.subscription-status {
      background-color: ${BackgroundColor.accent};
      color: white;
      cursor: auto;
      pointer-events: none;
    }
  }

  @media ${MediaSmall} {
    min-height: 25%;
  }
`

export const LogoSubscribe = ({
  isSidePreview,
  isSubscribed,
  isSubscriptionLoading,
  onSubscribe,
  onUnsubscribe,
  isUser,
}) => {
  const [subscribed, setSubscribed] = useState(isSubscribed)
  const [isSubscribing, setIsSubscribing] = useState(false)

  console.log({ isSubscribed, subscribed, isSubscriptionLoading, isSubscribing })
  const handleOnSubscribe = () => {
    onSubscribe({ setLoading: setIsSubscribing, setSubscribed })
  }

  const handleOnUnsubscribe = () => {
    onUnsubscribe({ setLoading: setIsSubscribing, setSubscribed })
  }

  const SubscribeIcon = !subscribed ? UserPlusIcon : UserMinusIcon

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

  return (
    <Container isSidePreview={isSidePreview}>
      {isSubscribing ? (
        <span>Loading...</span>
      ) : (
        <Fragment>
          {subscribed && (
            <Button className="subscription-status" height={isSidePreview ? 20 : 28}>
              {' '}
              {isSubscriptionLoading ? 'Loading...' : <CheckIcon />}
            </Button>
          )}
          {!isSubscriptionLoading && (
            <Button
              className="subscribe-button"
              secondary
              height={isSidePreview ? 20 : 28}
              contrast
              onClick={
                isSubscriptionLoading
                  ? undefined
                  : subscribed
                  ? handleOnUnsubscribe
                  : handleOnSubscribe
              }
            >
              <SubscribeIcon />
            </Button>
          )}
        </Fragment>
      )}
    </Container>
  )
}
