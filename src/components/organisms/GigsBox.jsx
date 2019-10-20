/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { TextBox } from './TextBox.jsx'

import { AutoTextFit } from '../../utils/AutoTextFit.jsx'

import { getGigs, Type } from '../../api/gigs/index.js'

import { MediaSmall } from '../../style/media.js'

const TextAlign = {
  CENTER_LEFT: 'left',
  CENTER_CENTER: 'center',
  CENTER_RIGHT: 'right',
}

const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.3s ease-out;

  & h2, p, span {
    font-size: 1em;
    color: ${({ color }) => color};
    text-align: ${({ alignHorizontal }) => TextAlign[alignHorizontal]};
    line-height: 1.4;
    margin: 0 0 0.1em;
    padding: 0;
  }

  & .separator-line {
    background: ${({ color }) => color};
    height: 0.1em;
    min-height: 1px;
    margin 1em 0;
    padding: 0;
    border: none;
  }

  & h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

`

const GigHead = styled.h2`
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

const GigsTitle = ({ title, alignHorizontal, withLine }) => (
  <Fragment>
    <GigHead alignHorizontal={alignHorizontal}>{title}</GigHead>
    {withLine && <hr className="separator-line" />}
  </Fragment>
)

const MonthItem = ({ month, alignHorizontal }) => {
  return (
    <Gig alignHorizontal={alignHorizontal}>
      <hr className="separator-line" />
      <b>{month.month}</b>
      {' | '}
      {month.year}
    </Gig>
  )
}

const GigDate = (startDate, showDay) => (showDay ? startDate.day : startDate.formattedDate)
const GigTitle = (title, venue) => (title > '' ? title : venue.name)
const GigVenue = (title, venue) =>
  title > ''
    ? `${venue.name || ''}${(venue.name > '' && venue.city > '' && ', ') || ''}${venue.city || ''}`
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
  border,
  circle,
  color,
  colorAccent,
  colorBackground,
  colorBackgroundAccent,
  gigsAPI,
  gigsList,
  square,
}) => {
  // SSR State
  const [ssrDone, setSsrDone] = useState(false)
  useEffect(() => {
    if (!ssrDone) setSsrDone(true)
  }, [ssrDone])

  // Gigs State
  const [gigs, setGigs] = useState(
    Array.isArray(gigsList) ? { loading: false, data: gigsList } : { loading: true, data: [] }
  )

  useEffect(() => {
    if (gigs.loading) {
      getGigs(gigsAPI).then(data => {
        setGigs({ loading: false, data })
      })
    }
  }, [gigs.loading])

  const showGigs = !gigs.loading && gigs.data.length > 0

  // Media Query
  const isSmall = useMediaQuery({ query: MediaSmall })

  return (
    <Fragment>
      {/*
       * Loading and no gigs message
       */}

      <InfoContainer color={color} alignHorizontal={alignHorizontal} active={!showGigs}>
        <AutoTextFit
          alignHorizontal={alignHorizontal}
          colorBackground={colorBackground}
          includeWidth
          adjustWidth
        >
          <GigsTitle
            alignHorizontal={alignHorizontal}
            color={color}
            title={gigsAPI.title}
            withLine={gigsAPI.includeMonthTitle}
          />
          <p>{gigs.loading ? 'Loading gigs ...' : 'No gigs found'}</p>
        </AutoTextFit>
      </InfoContainer>

      {/*
       * Gigs List
       */}

      {showGigs && (
        <TextBox
          alignHorizontal={alignHorizontal}
          color={color}
          colorAccent={colorAccent}
          colorBackground={colorBackground}
          colorBackgroundAccent={colorBackgroundAccent}
          wordWrap={ssrDone && isSmall}
          adjustWidth
        >
          {/*
           * Gigs List
           */}

          <GigsTitle alignHorizontal={alignHorizontal} title={gigsAPI.title} />
          <GigList>
            {gigs.data.map(({ type, ...gig }, key) =>
              type === Type.MONTH ? (
                <MonthItem key={key} month={gig} alignHorizontal={alignHorizontal} />
              ) : (
                <GigItem
                  key={key}
                  alignHorizontal={alignHorizontal}
                  showDay={gigsAPI.includeMonthTitle}
                  gig={gig}
                />
              )
            )}
          </GigList>

          {/*
           * Show More
           */}

          {gigsAPI.includeShowMore && (
            <ShowMoreContainer alignHorizontal={alignHorizontal}>
              <p>
                <a
                  href={`https://api.optune.me/v4/events/${
                    gigsAPI.slug
                  }?header=1&theme=black&ticketlinks=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show More
                </a>
              </p>
            </ShowMoreContainer>
          )}
        </TextBox>
      )}
    </Fragment>
  )
}
