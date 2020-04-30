import React from 'react'
import styled, { css } from 'styled-components'

import { MediaMobile } from '../../../style/media'

// Styles
const ReferenceWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  text-align: right;
  max-width: 6rem;
  z-index: 9999;

  h2,
  a {
    &.transparent {
      opacity: 0.3;
      color: white;
    }
  }

  img {
    margin-bottom: 1rem;

    @media ${MediaMobile} {
      margin-bottom: 0.5rem;
    }
    ${({ isPreviewMobile }) =>
      isPreviewMobile &&
      css`
        margin-bottom: 0.5rem;
      `}
  }

  media ${MediaMobile} {
    max-width: 5rem;
    top: 1rem;
  }

  ${({ isPreviewMobile }) =>
    isPreviewMobile &&
    css`
      max-width: 5rem;
      top: 1rem;
    `}
`

const ReferenceTitle = styled.h2`
  margin-top: ${({ isFirst }) => (!isFirst ? '1rem' : '')};
  margin-bottom: 1rem;
  border-bottom: 1px solid #fff;
  display: block;
  text-align: right;
  border-bottom: 1px solid #fff;
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;

  @media ${MediaMobile} {
    font-size: 0.8rem;
  }

  ${({ isPreviewMobile }) =>
    isPreviewMobile &&
    css`
      font-size: 0.8rem;
    `}
`

const ReferenceLink = styled.a`
  display: block;
  text-align: right;
  width: 100%;

  &.transparent {
    transition: opacity 0.3s, transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`

const ReferenceImage = styled.img`
  margin-bottom: 1rem;
  width: 100%;
`

const residenciesLogos = [
  {
    href: '',
    src:
      'https://res.cloudinary.com/optune-me/image/upload/v1588226253/onescreener-v2/prod/ray-douglas/custom/exil_logo.jpg',
    alt: '',
  },
  {
    href: 'https://www.mascotte.ch/',
    src:
      'https://res.cloudinary.com/optune-me/image/upload/c_scale,f_auto,h_53,q_auto:best/v1588226156/onescreener-v2/prod/ray-douglas/custom/Mascotte.png',
    alt: '',
  },
  {
    href: 'http://www.nachtseminar.ch/',
    src:
      'https://res.cloudinary.com/optune-me/image/upload/v1588226155/onescreener-v2/prod/ray-douglas/custom/NachtSeminarLogo.svg',
    alt: '',
  },
  {
    href: '',
    src:
      'https://res.cloudinary.com/optune-me/image/upload/v1588226253/onescreener-v2/prod/ray-douglas/custom/Plaza_Schwarz_ZH.png',
    alt: '',
  },
  {
    href: 'http://www.trischli.ch/',
    src:
      'https://res.cloudinary.com/optune-me/image/upload/c_scale,f_auto,q_auto:best,w_100/v1588226166/onescreener-v2/prod/ray-douglas/custom/trischli_white.png',
    alt: '',
  },
  {
    href: 'http://www.useit-party.ch/',
    src:
      'https://res.cloudinary.com/optune-me/image/upload/c_scale,f_auto,q_auto:best,w_100/v1588226157/onescreener-v2/prod/ray-douglas/custom/use_it.png',
    alt: '',
  },
]

export const References = ({ isPreviewMobile }) => {
  return (
    <ReferenceWrapper isPreviewMobile={isPreviewMobile}>
      <ReferenceTitle className="transparent" isFirst isPreviewMobile={isPreviewMobile}>
        Residencies
      </ReferenceTitle>

      {residenciesLogos.map(({ href, src, alt }) => (
        <ReferenceLink
          className="transparent"
          href={href || '#'}
          target={href && href !== '#' ? '__blank' : ''}
        >
          <ReferenceImage src={src} alt={alt} />
        </ReferenceLink>
      ))}
    </ReferenceWrapper>
  )
}