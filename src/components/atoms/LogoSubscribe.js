import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

import { Button } from './buttons/Button'

const Container = styled.div`
  margin-top: 6px;
  display: flex;
  min-height: ${({ isSidePreview }) => (isSidePreview ? 22 : 30)}px;
  pointer-events: ${({ isSidePreview }) => (isSidePreview ? 'none' : 'auto')};

  button {
    &:first-child {
      margin-right: 5px;
    }

    &.subscription-status {
      cursor: auto;
      pointer-events: none;
    }
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
              {isSubscriptionLoading ? 'Loading...' : 'V'}
            </Button>
          )}
          {!isSubscriptionLoading && (
            <Button
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
              {subscribed ? 'UN' : 'SUB'}
            </Button>
          )}
        </Fragment>
      )}
    </Container>
  )
}
