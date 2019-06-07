/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import Async from 'react-async'

const Gig = styled.li`
  padding: 8px;
  list-style: none;
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

const Text = styled.p`
  color: ${({ color }) => color};
`

export const GigsBox = ({ api, slug, getGigs, color }) => (
  <div>
    <GigHead color={color}>
      Upcoming Gigs from {slug}@{api.toLowerCase()}
    </GigHead>
    <Async promiseFn={getGigs} api={api} slug={slug} limit={5}>
      {({ data, error, isLoading }) =>
        isLoading ? (
          <Text>Loading gigs ...</Text>
        ) : error || !data ? (
          <Text>No gigs found</Text>
        ) : (
          <GigList>
            {data &&
              data.map((text, key) => (
                <Gig key={key} color={color}>
                  {text}
                </Gig>
              ))}
          </GigList>
        )
      }
    </Async>
  </div>
)
