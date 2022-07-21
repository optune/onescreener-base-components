import styled from 'styled-components'

// Styles
import { BackgroundColor, ForegroundColor } from '../../../style/color'
import { NotMediaSmall } from '../../../style/media'

// Components

export const ButtonHeight = 32

export const IconButton = styled.button`
  width: ${ButtonHeight}px;
  height: ${ButtonHeight}px;
  min-width: ${ButtonHeight}px;
  min-height: ${ButtonHeight}px;
  background-color: rgba(${BackgroundColor.secondaryRGB}, ${({ contrast }) => (contrast ? 1 : 0)});
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0 2px;

  & svg.icon {
    width: 24px;
    height: 24px;

    * {
      fill: none;
      stroke: ${ForegroundColor.secondary};

      &[fill='none'] {
        fill: none;
      }
    }
  }

  @media ${NotMediaSmall} {
    margin: 0 4px;
    &:hover {
      color: ${ForegroundColor.hover};
      font-weight: 600;

      & svg.icon {
        * {
          fill: none;
          stroke: ${ForegroundColor.hover};

          &[fill='none'] {
            fill: none;
          }
        }
      }
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
`
