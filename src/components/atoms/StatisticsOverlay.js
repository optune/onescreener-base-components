import styled from 'styled-components'

export const StatisticsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: rgba(180, 180, 180, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    color: white;
    font-size: 24px;
  }
`
