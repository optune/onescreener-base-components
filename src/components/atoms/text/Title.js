import styled from 'styled-components'

import { ForegroundColor } from '../../../style/color'
import { MediaMobile } from '../../../style/media'

export const Title = styled.h2`
  font-size: ${({ bold }) => (bold ? '28px' : '32px')};
  font-weight: ${({ bold }) => (bold ? '600' : '500')};
  line-height: 105%;
  color: ${ForegroundColor.secondary};

  @media ${MediaMobile} {
    font-size: ${({ bold }) => (bold ? '20px' : '24px')};
  }
`
