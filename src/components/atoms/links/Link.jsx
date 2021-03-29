// React
import styled, { css } from 'styled-components'

// Media Query
import { MediaMobile, NotMediaSmall } from '../../../style/media.js'

const IconSize = {
  Desktop: {
    S: '26px',
    M: '32px',
    L: '42px',
  },
  Mobile: {
    S: '20px',
    M: '22px',
    L: '26px',
  },
}

const ShapeSize = {
  Desktop: {
    S: '51px',
    M: '62px',
    L: '73px',
  },
  Mobile: {
    S: '33px',
    M: '36px',
    L: '40px',
  },
}

const ShapeSizeSidePreview = {
  Desktop: {
    S: '33px',
    M: '36px',
    L: '40px',
  },
  Mobile: {
    S: '29px',
    M: '32px',
    L: '34px',
  },
}

export const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: ${({ colorBackground }) => colorBackground};
  border-radius: ${({ circle, square }) => (circle && '50px') || (square && 'none') || '0.4rem'};
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => border / 10}rem;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: ${({ noShadow }) =>
    noShadow
      ? 'none'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)'};
  color: ${({ color }) => color};
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out, color 0.25s ease-out;

  width: ${({ isHighlighted, isSidePreview, isPreviewMobile, size, position }) =>
    `calc(${
      isPreviewMobile
        ? (isSidePreview && ShapeSizeSidePreview.Mobile[size]) || ShapeSize.Mobile[size]
        : (isSidePreview && ShapeSizeSidePreview.Desktop[size]) || ShapeSize.Desktop[size]
    } * ${isHighlighted && (position === 'BOTTOM_CENTER' || isPreviewMobile) ? '2' : '1'})`};

  height: ${({ isSidePreview, isHighlighted, isPreviewMobile, size, position }) =>
    `calc(${
      isPreviewMobile
        ? (isSidePreview && ShapeSizeSidePreview.Mobile[size]) || ShapeSize.Mobile[size]
        : (isSidePreview && ShapeSizeSidePreview.Desktop[size]) || ShapeSize.Desktop[size]
    } * ${isHighlighted && position !== 'BOTTOM_CENTER' && !isPreviewMobile ? '2' : '1'})`};

  margin: ${({ isSidePreview, isPreviewMobile, size, margin }) =>
    (isPreviewMobile &&
      ((size === 'L' && (isSidePreview ? '0.5rem 0.1rem' : '2px')) || '0.5rem 0.1rem')) ||
    margin ||
    '0.5rem 0.35rem'};

  ${({ isPreview }) =>
    isPreview &&
    css`
      @media (min-width: 737px) and (max-width: 991px) {
        max-width: ${({ size }) => `calc(${ShapeSize.Mobile[size]} + 8px)`};
        max-height: ${({ size }) => `calc(${ShapeSize.Mobile[size]} + 8px)`};
        margin: ${({ size }) => (size === 'L' && '0.5rem 0.2rem') || '0.5rem'};

        & .icon {
          max-width: ${({ size }) => IconSize.Mobile[size]};
          max-height: ${({ size }) => IconSize.Mobile[size]};
        }
      }
    `}

  & .icon {
    width: ${({ isSidePreview, isPreviewMobile, size }) =>
      isPreviewMobile || isSidePreview ? IconSize.Mobile[size] : IconSize.Desktop[size]};
    height: ${({ isSidePreview, isPreviewMobile, size }) =>
      isPreviewMobile || isSidePreview ? IconSize.Mobile[size] : IconSize.Desktop[size]};

    & g {
      & path,
      line,
      circle,
      polygon,
      polyline,
      rect,
      ellipse {
        fill: ${({ color }) => color};
        stroke: ${({ color }) => color};
        transition: fill 0.25s ease-out, stroke 0.25 ease-out;

        &[fill='none'] {
          fill: none;
        }

        &[stroke='none'] {
          stroke: none;
        }
      }
    }
  }

  ${({ isSidePreview }) =>
    !isSidePreview &&
    css`
      @media ${MediaMobile} {
        width: ${({ isHighlighted, size }) =>
          `calc(${ShapeSize.Mobile[size]} * ${isHighlighted ? '2' : '1'})`};

        height: ${({ isHighlighted, size }) =>
          `calc(${ShapeSize.Mobile[size]} * ${isHighlighted ? '1' : '1'})`};
      }
    `}

  @media ${MediaMobile} {
    margin: ${({ size, margin }) => margin || (size === 'L' && '1px') || '5px'};

    & .icon {
      width: ${({ size }) => IconSize.Mobile[size]};
      height: ${({ size }) => IconSize.Mobile[size]};
    }
  }

  &:hover {
    background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent || 'red'};
    border-color: ${({ colorAccent }) => colorAccent};
    color: ${({ colorAccent }) => colorAccent};

    & .icon g {
      & path,
      line,
      circle,
      polygon,
      polyline,
      rect,
      ellipse {
        fill: ${({ colorAccent }) => colorAccent};
        stroke: ${({ colorAccent }) => colorAccent};

        &[fill='none'] {
          fill: none;
        }

        &[stroke='none'] {
          stroke: none;
        }
      }
    }
  }
`
