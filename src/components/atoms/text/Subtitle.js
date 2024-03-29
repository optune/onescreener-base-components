import styled from 'styled-components'

import { ForegroundColor } from '../../../style/color'
import { MediaMobile } from '../../../style/media'

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 125%;
  color: ${({ dark }) => (dark ? ForegroundColor.secondary : ForegroundColor.subsecondary)};

  @media ${MediaMobile} {
    font-size: 14px;
    line-height: 115%;
  }

  &.center {
    text-align: center;
  }
`
