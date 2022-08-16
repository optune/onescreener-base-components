import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

import { UserMinusIcon } from '../icons/page/UserMinus'
import { UserPlusIcon } from '../icons/page/UserPlus'
import { CheckIcon } from '../icons/info/Check'

import { Button } from './buttons/Button'

import { BackgroundColor } from '../../style/color'
import { MediaSmall } from '../../style/media'
import { ComponentLoading } from '../molecules/loaders/ComponentLoading'

const Container = styled.div`
  margin-top: 6px;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  min-height: ${({ isSidePreview }) => (isSidePreview ? 11 : 22)}px;
  max-height: 25%;
  pointer-events: ${({ isSidePreview }) => (isSidePreview ? 'none' : 'auto')};
  width: 50%;
  border-radius: 4px;
  background-color: ${({ ssrDone }) => (ssrDone ? 'transparent' : BackgroundColor.loadingUI)};

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
    }

    &.subscription-status {
      background-color: ${BackgroundColor.accent};
      color: white;
      cursor: auto;
      pointer-events: none;
    }

    @media ${MediaSmall} {
      min-height: 23px;
      height: 100%;
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
  isUser,
  onSubscribe,
  onUnsubscribe,
  ssrDone,
  showFollowButton,
}) => {
  const [subscribed, setSubscribed] = useState(isSubscribed)
  const [isSubscribing, setIsSubscribing] = useState(false)

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
    <Container isSidePreview={isSidePreview} ssrDone={ssrDone} hide={!showFollowButton}>
      {ssrDone && (isSubscribing || isSubscriptionLoading) ? (
        <ComponentLoading small />
      ) : (
        <Fragment>
          {subscribed && (
            <Button className="subscription-status" height={isSidePreview ? 20 : 28}>
              {' '}
              {isSubscriptionLoading ? <ComponentLoading small /> : <CheckIcon />}
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
