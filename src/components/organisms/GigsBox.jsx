/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

import { TextBox } from './TextBox.jsx'

import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

import { getGigs, Type } from '../../api/gigs/index.js'

const TextAlign = {
  CENTER_LEFT: 'left',
  CENTER_CENTER: 'center',
  CENTER_RIGHT: 'right',
}

const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  overflow: hidden;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.3s ease-out;
`

const InfoText = styled.p`
  color: ${({ color }) => color};
  text-align: ${({ alignHorizontal }) => TextAlign[alignHorizontal]};
`

const GigHead = styled.h2`
  color: ${({ color }) => color};
  text-align: ${({ alignHorizontal }) => TextAlign[alignHorizontal]};
`

const GigList = styled.ul`
  padding: 0;
  margin: 0;
`

const Gig = styled.li`
  padding: 8px;
  list-style: none;
  line-height: 1.5;
  margin: 1em 0;
  transition: all 0.3s ease-out;
  text-align: ${({ alignHorizontal }) => TextAlign[alignHorizontal]};
`

const StartDate = styled.span`
  width: 7em;
`
const Event = styled.span`
  min-width: 10em;

  & a {
    text-decoration: underline ${({ color }) => color};

    & :hover {
      color: ${({ colorAccent }) => colorAccent};
      text-decoration: underline ${({ colorAccent }) => colorAccent};
    }
  }
`
const Venue = styled.span`
  min-width: 10em;
`

const ShowMoreContainer = styled.div`
  padding-top: 1.5em;

  & p {
    text-align: ${({ alignHorizontal }) => TextAlign[alignHorizontal]};
  }
`

// const ShowMoreButton = styled.button`
//   font-size: 1em;
//   line-height: 1em;
//   width: auto;
//   margin: 0.5em auto;
//   padding: 0.5em 1.8em 0.5em 2.2em;
//   border-color: ${({ color }) => color || 'transparent'};
//   border-width: ${({ border }) => border / 10}rem;
//   border-style: solid;
//   border-radius: ${({ square, circle }) =>
//     (circle && '1em') || (square && 0) || '0.4rem'};
//   color: ${({ color }) => color};
//   background-color: transparent;
//   transition: color 0.3s, background-color 0.3s, border 0.3s;

//   :hover {
//     color: ${({ colorAccent }) => colorAccent};
//     border-color: ${({ colorAccent }) => colorAccent};
//     background-color: ${({ colorBackgroundAccent }) => colorBackgroundAccent};
//   }
// `

const GigsTitle = ({ title, alignHorizontal, color, withLine }) => (
  <Fragment>
    <GigHead alignHorizontal={alignHorizontal} color={color}>
      {title}
    </GigHead>
    {withLine && <hr className="separator-line" />}
  </Fragment>
)

const Month = startDate =>
  startDate.month < 10 ? `0${startDate.month}` : startDate.month
const Year = startDate => startDate.year.toString().substring(2)

const MonthItem = ({ month, alignHorizontal }) => {
  return (
    <Gig alignHorizontal={alignHorizontal}>
      <hr className="separator-line" />
      <b>{Month(month.startDate)}</b>
      {' | '}
      {Year(month.startDate)}
    </Gig>
  )
}

const GigDate = (startDate, showDay) =>
  showDay ? startDate.day : startDate.formattedDate
const GigTitle = (title, venue) => (title > '' ? title : venue.name)
const GigVenue = (title, venue) =>
  title > ''
    ? `${venue.name || ''}${(venue.name > '' && venue.city > '' && ', ') ||
        ''}${venue.city || ''}`
    : venue.city || ''

const GigItem = ({ gig, alignHorizontal, showDay }) => {
  const { title, startDate, venue, website } = gig

  const gigDate = GigDate(startDate, showDay)
  const gigTitle = GigTitle(title, venue)
  const gigVenue = GigVenue(title, venue)

  return (
    <Gig alignHorizontal={alignHorizontal}>
      {gigDate}
      {' | '}
      {website ? (
        <a href={website} target="_blank" rel="noopener noreferrer">
          {gigTitle}
        </a>
      ) : (
        gigTitle
      )}
      {gigVenue > '' && ' | '}
      {gigVenue}
    </Gig>
  )
}

export const GigsBox = ({
  alignHorizontal,
  api,
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  square,
}) => {
  const [gigs, setGigs] = useState({ loading: true, data: [] })

  useEffect(() => {
    if (gigs.loading) {
      getGigs(api).then(data => {
        setGigs({ loading: false, data })
      })
    }
  })

  const showGigs = !gigs.loading && gigs.data.length > 0

  return (
    <Fragment>
      <InfoContainer color={color} active={!showGigs}>
        <AutoTextFit
          alignHorizontal={alignHorizontal}
          colorBackground={colorBackground}
          includeWidth
        >
          <GigsTitle
            alignHorizontal={alignHorizontal}
            color={color}
            title={api.title}
            withLine={api.includeMonthTitle}
          />
          <InfoText color={color} alignHorizontal={alignHorizontal}>
            {gigs.loading ? 'Loading gigs ...' : 'No gigs found'}
          </InfoText>
        </AutoTextFit>
      </InfoContainer>

      {showGigs && (
        <TextBox
          alignHorizontal={alignHorizontal}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          wordWrap={false}
        >
          {/*
           * Gigs List
           */}

          <GigsTitle
            alignHorizontal={alignHorizontal}
            color={color}
            title={api.title}
          />
          <GigList>
            {gigs.data.map(({ type, ...gig }, key) =>
              type === Type.MONTH ? (
                <MonthItem
                  key={key}
                  month={gig}
                  alignHorizontal={alignHorizontal}
                />
              ) : (
                <GigItem
                  key={key}
                  alignHorizontal={alignHorizontal}
                  showDay={api.includeMonthTitle}
                  gig={gig}
                />
              )
            )}
          </GigList>

          {/*
           * Show More
           */}

          <ShowMoreContainer alignHorizontal={alignHorizontal}>
            <p>
              <a
                href={`https://api.optune.me/v4/events/${
                  api.slug
                }?header=1&theme=black&ticketlinks=true`}
              >
                Show More
              </a>
            </p>
          </ShowMoreContainer>
        </TextBox>
      )}
    </Fragment>
  )
}
