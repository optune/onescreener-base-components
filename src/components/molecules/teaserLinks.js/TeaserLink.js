import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.a``

export const TeaserLink = ({ autoOpenId, children, teaserLinkId, onOpen, ...other }) => {
  useEffect(() => {
    if (teaserLinkId === autoOpenId) onOpen?.()
  }, [autoOpenId])

  return (
    <Container onClick={() => onOpen(true)} {...other}>
      {children}
    </Container>
  )
}
