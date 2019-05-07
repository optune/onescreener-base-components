import { formatGigDate } from '../utils.js'

export const gigatools = {
  url: slug => `http://gigs.gigatools.com/user/${slug}.json`,
  extractEvents: result => {
    const [
      {
        // user: { username, artistname }, // we will need it at some point
      },
      events,
    ] = result.length === 0 ? [{}, []] : result
    return events.map(({ event }) => event)
  },
  transformEvent: ({ eventdate, name, venue, city }) => ({
    title: name,
    startDate: eventdate,
    venue: {
      name: venue,
      city,
    },
  }),
}
