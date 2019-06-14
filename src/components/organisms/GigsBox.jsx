/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-async'

import { TextBox } from './TextBox.jsx'

import { getGigs } from '../../api/gigs/index.js'

const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  overflow: hidden;
  background-color: ${({ colorBackground }) =>
    colorBackground || 'transparent'};
  color: ${({ color }) => color};
`

const GigHead = styled.h2`
  margin-top: 0;
  color: ${({ color }) => color};
`

const GigList = styled.ul`
  padding: 0;
  margin: 0;
`

const Gig = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  list-style: none;
  color: ${({ color }) => color};
  margin: 1em 0;
  transition: all 0.3s ease-out;

  & p.gig {
    margin: 0;
    line-height: 1.5;
  }
`

const StartDate = styled.p`
  width: 7em;
`
const Event = styled.p`
  min-width: 10em;

  & a {
    text-decoration: underline ${({ color }) => color};

    & :hover {
      color: ${({ colorAccent }) => colorAccent};
      text-decoration: underline ${({ colorAccent }) => colorAccent};
    }
  }
`
const Venue = styled.p`
  min-width: 10em;
`

const InfoText = styled.p`
  color: ${({ color }) => color};
`

const ShowMoreButton = styled.button`
  font-size: 1em;
  line-height: 1em;
  width: auto;
  margin: 0.5em auto;
  padding: 0.5em 1.8em 0.5em 2.2em;
  border-color: ${({ color }) => color || 'transparent'};
  border-width: ${({ border }) => border / 10}rem;
  border-style: solid;
  border-radius: ${({ square, circle }) =>
    (circle && '1em') || (square && 0) || '0.4rem'};
  color: ${({ color }) => color};
  background-color: transparent;
  transition: color 0.3s, background-color 0.3s, border 0.3s;

  :hover {
    color: ${({ colorAccent }) => colorAccent};
    border-color: ${({ colorAccent }) => colorAccent};
    background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent};
  }
`

export const GigsBox = ({
  api,
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  slug,
  square,
}) => {
  const { data, error, isLoading } = useAsync({
    promiseFn: getGigs,
    api,
    slug,
    limit: 3,
  })

  return (
    (isLoading && (
      <InfoContainer color={color} colorBackground={colorBackground}>
        <GigHead color={color}>Upcoming Gigs</GigHead>
        <InfoText color={color}>Loading gigs ...</InfoText>
      </InfoContainer>
    )) ||
    ((error || !data) && (
      <InfoContainer color={color} colorBackground={colorBackground}>
        <GigHead color={color}>Upcoming Gigs</GigHead>
        <InfoText color={color}>No gigs found</InfoText>
      </InfoContainer>
    )) || (
      <TextBox
        color={color}
        colorAccent={colorAccent}
        colorBackground={colorBackground}
        colorBackgroundAccent={colorBackgroundAccent}
      >
        <GigHead color={color}>Upcoming Gigs</GigHead>
        <GigList>
          {data.map(({ title, startDate, venue, website }, key) => (
            <Gig key={key} color={color} colorAccent={colorAccent}>
              <StartDate className="gig">{startDate}</StartDate>
              <Event className="gig">
                {website ? <a href={website}>{title}</a> : title}
              </Event>
              <Venue className="gig">
                {venue.name}, {venue.city}
              </Venue>
            </Gig>
          ))}
        </GigList>
        <a
          href={`https://api.optune.me/v4/events/${slug}?header=1&theme=black&ticketlinks=true`}
        >
          <ShowMoreButton
            border={border}
            color={color}
            colorAccent={colorAccent}
            colorBackground={colorBackground}
            colorBackgroundAccent={colorBackgroundAccent}
            circle={circle}
            square={square}
          >
            Show More
          </ShowMoreButton>
        </a>
      </TextBox>
    )
  )
}
