/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ComponentLoading } from '../../components/molecules/loaders/ComponentLoading'

// Utils
import { getOpenseaUrl } from '../../utils/teaserLinks/integrations/opensea'

const Player = styled.div`
  width: 100%;
  height: 100%;
`

export const OpenseaEmbed = ({ url = '' }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { tokenAddress, tokenId } = getOpenseaUrl(url)

  useEffect(() => {
    setIsLoading(true)

    // !HACKS: required because <nft-card> is broken and is not updated after url has changed
    if (tokenAddress > '' && tokenId > '') {
      setTimeout(() => {
        setIsLoading(false)
      }, 100)
    }
  }, [tokenAddress, tokenId])

  if (!tokenAddress || !tokenId) {
    return null
  }

  if (isLoading) return <ComponentLoading />

  return (
    <Player>
      <nft-card
        class="nft-card nft-card-opensea"
        tokenAddress={tokenAddress}
        tokenId={tokenId}
        width="100%"
      />
    </Player>
  )
}
