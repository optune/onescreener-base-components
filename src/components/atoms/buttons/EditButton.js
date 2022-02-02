import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

// Styles

import { ForegroundColor, BackgroundColor } from '../../../style/color'
import { NotMediaSmall, ZIndex2 } from '../../../style/media'
// import { ForegroundColor, BackgroundColor, NotMediaSmall, ZIndex2 } from '../../..'
import { EditIcon } from '../../icons/preview/Edit'

// Components

const ButtonHeight = 32

const IconButton = styled.button`
  position: absolute;
  top: ${({ top }) => top || '10px'};
  left: ${({ left }) => left || '50%'};
  right: ${({ right }) => right || 'unset'};
  transform: ${({ transform }) => transform || 'translateX(-50%)'};
  min-width: ${ButtonHeight}px;
  min-height: ${ButtonHeight}px;
  height: ${ButtonHeight}px;
  width: ${ButtonHeight}px;
  color: ${ForegroundColor.accent};
  background-color: ${BackgroundColor.accentSecondary};
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: ${ZIndex2};

  &.extended {
    padding: 0 10px;
    border-radius: 15px;
    width: auto;

    & svg.icon {
      margin-right: 10px;
    }
  }

  & svg.icon {
    width: 18px;
    height: 18px;

    * {
      fill: none;
      stroke: ${ForegroundColor.accent};

      &[fill='none'] {
        fill: none;
      }
    }
  }

  @media ${NotMediaSmall} {
    &:hover {
      color: ${ForegroundColor.hover};
      background-color: rgba(${BackgroundColor.hoverRGB}, 0);
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

export const EditButton = ({ children, ...other }) => {
  return (
    <IconButton
      className={classNames({
        extended: !!children,
      })}
      {...other}
    >
      <EditIcon />
      {children}
    </IconButton>
  )
}
