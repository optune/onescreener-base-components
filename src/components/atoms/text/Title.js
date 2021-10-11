import styled from 'styled-components'

import { ForegroundColor } from '../../../style/color'
import { MediaMobile } from '../../../style/media'

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 105%;
  color: ${ForegroundColor.secondary};

  @media ${MediaMobile} {
    font-size: 24px;
  }
`
