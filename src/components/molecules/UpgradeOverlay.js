import React from 'react'
import styled from 'styled-components'
import { Button } from '../atoms/buttons/Button'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(211, 211, 211, 0.2);
  z-index: 9999;
`

export const UpgradeOverlay = ({ onUpgrade, ProTag }) => {
  return (
    <Container>
      <ProTag> PRO </ProTag>
      <Button onClick={onUpgrade}>Upgrade</Button>
    </Container>
  )
}
