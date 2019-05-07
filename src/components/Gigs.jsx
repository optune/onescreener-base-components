/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import Async from 'react-async'

const Gig = styled.li`
  padding: 8px;
  list-style: none;
`

const GigHead = styled.h2`
  margin-top: 0;
`

const GigList = styled.ul`
  padding: 0;
  margin: 0;
`

const Gigs = ({ api, slug, getGigs }) => (
  <div>
    <GigHead>
      Upcoming Gigs from {slug}@{api}
    </GigHead>
    <Async promiseFn={getGigs} api={api} slug={slug} limit={5}>
      {({ data, error, isLoading }) =>
        isLoading ? (
          <div>Loading gigs</div>
        ) : error ? (
          <div>Error when loading gigs</div>
        ) : (
          <GigList>
            {data && data.map((text, key) => <Gig key={key}>{text}</Gig>)}
          </GigList>
        )
      }
    </Async>
  </div>
)

export default Gigs

