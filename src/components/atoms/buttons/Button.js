import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// Styles
import { BackgroundColor, ForegroundColor } from '../../../style/color'

const getBackgroundColor = ({ secondary, selected, disabled }) =>
  (disabled && BackgroundColor.disabled) ||
  (selected && BackgroundColor.selectedGradient()) ||
  (secondary && BackgroundColor.secondary) ||
  BackgroundColor.accent
const getForegroundColor = ({ secondary, selected, disabled }) =>
  (disabled && ForegroundColor.disabled) ||
  (selected && ForegroundColor.selected) ||
  (secondary && ForegroundColor.secondary) ||
  ForegroundColor.accent

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: ${getForegroundColor};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ round }) =>
    round
      ? css`
          line-height: 40px;
          padding: 0px;
          width: 40px;
          overflow: hidden;
        `
      : css`
          line-height: 1.2;
          padding: 16px;
          width: auto;
          overflow: none;
        `};

  min-height: ${({ height }) => height || 40}px;
  background: ${getBackgroundColor};
  border-radius: ${({ secondary, round }) => (round ? '50%' : secondary ? '2px' : '3px')};
  border: none;
  box-shadow: ${({ shadow }) =>
    shadow
      ? '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 0 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)'
      : 'none'};
  padding: 0.5rem 1rem;

  & svg.icon {
    height: ${({ height }) => (height ? height - 16 : 24)}px;
    width: ${({ height }) => (height ? height - 16 : 24)}px;

    & * {
      fill: ${getForegroundColor};
      stroke: ${getForegroundColor};
      transition: fill 0.3s ease-out, stroke 0.3s ease-out;

      &[fill='none'] {
        fill: none;
      }

      &[stroke='none'] {
        stroke: none;
      }
    }
  }

  &:hover {
    ${({ selected, disabled }) =>
      !selected &&
      !disabled &&
      css`
        color: ${ForegroundColor.hover};
        background-color: ${BackgroundColor.hover};

        & svg {
          & * {
            fill: ${ForegroundColor.hover};
            stroke: ${ForegroundColor.hover};
            transition: fill 0.3s ease-out, stroke 0.3s ease-out;

            &[fill='none'] {
              fill: none;
            }

            &[stroke='none'] {
              stroke: none;
            }
          }
        }
      `}
  }

  transition: color 0.3s ease-out, background-color 0.35s ease-out, border 0.3s ease-out;
`

export const Button = ({ children, ...other }) => (
  <StyledButton type="button" {...other}>
    {children}
  </StyledButton>
)
Button.propTypes = {
  children: PropTypes.node,
}
