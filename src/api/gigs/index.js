import 'isomorphic-fetch' // makes fetch() available
import { ApiProviders } from './apis/index.js'
import { transformVenue } from './utils/transformVenue.js'

export const Type = {
  MONTH: 'month',
  GIG: 'gig',
}

const fetchGigs = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        try {
          resolve(res.json())
        } catch (error) {
          console.error('Parse error', error)
          reject('Parsing failed')
        }
      })
      .catch((error) => {
        console.error('fetching failed', error)
        reject('Fetch failed')
      })
  })

const transformGigs = (api) => (includeMonthTitle) => (events) => {
  const gigs = []

  let previousYear = 0
  let previousMonth = 0

  events
    .map(api.transformEvent)
    .map(transformVenue)
    .sort((a, b) => a.startDate.date - b.startDate.date)
    .forEach((event) => {
      if (includeMonthTitle) {
        const { year, month } = event.startDate

        if (year > previousYear || month > previousMonth) {
          gigs.push({
            type: Type.MONTH,
            year,
            month,
          })
          previousYear = year
          previousMonth = month
        }
      }

      gigs.push({
        type: Type.GIG,
        ...event,
      })
    })

  return gigs
}

const gigsTEST = [
  {
    slug: 'Stargate-A-Lounge-2018-05-31',
    artist: {
      name: 'Barbara Bass',
      publicWebpage: 'https://api.optune.me/v1/artist/Barbara-Bass.html',
    },
    doors: '11:00',
    title: 'Stargate',
    playDate: '2022-04-15T11:00:00.000Z',
    playTime: '23:00',
    playTimeEnd: '01:00',
    startTime: '23:00',
    endTime: '01:00',
    venue: {
      name: 'A-Lounge',
      street: 'Karl-Marx-Allee 35',
      postalCode: '10178',
      city: 'Berlin',
      country: 'Germany',
      website: 'http://www.a-lounge.de/',
    },
  },
  {
    slug: 'CMB-Inc.-Annual-Celebration-25hours-Hotel-Langstrasse-Barbara-Bass-2019-02-20',
    artist: {
      name: 'Barbara Bass',
      publicWebpage: 'https://api.optune.me/v1/artist/Barbara-Bass.html',
    },
    doors: '11:00',
    title: 'CMB Inc. Annual Celebration',
    playDate: '2022-01-01T11:00:00.000Z',
    playTime: '20:00',
    playTimeEnd: '23:00',
    startTime: '20:00',
    endTime: '23:00',
    venue: {
      name: '25hours Hotel Langstrasse',
      street: 'Langstrasse 150',
      postalCode: '8004',
      city: 'Zürich',
      country: 'Switzerland',
    },
  },
  {
    slug: 'test10-2021-09-30',
    artist: {
      name: 'Barbara Bass',
      publicWebpage: 'https://api.optune.me/v1/artist/Barbara-Bass.html',
    },
    doors: '11:00',
    title: 'Live Show Bass',
    playDate: '2021-09-30T11:00:00.000Z',
    venue: {
      name: 'Kaufleuten',
      street: 'Pelikanplatz 18',
      postalCode: '8001',
      city: 'Zürich',
      country: 'Switzerland',
      website: 'http://www.kaufleuten.ch/home/',
    },
  },
  {
    slug: 'fds-2021-09-29',
    artist: {
      name: 'Barbara Bass',
      publicWebpage: 'https://api.optune.me/v1/artist/Barbara-Bass.html',
    },
    doors: '11:00',
    title: 'Sunny Day',
    playDate: '2021-09-29T11:00:00.000Z',
    venue: {
      name: 'Altes Hallenbad',
      street: 'Reichenfeldgasse 10',
      postalCode: '6800',
      city: 'Feldkirch',
      country: 'Austria',
      website: 'https://www.montforthausfeldkirch.com/montforthaus-feldkirch/altes-hallenbad/',
    },
    ticketLink: 'http://erwrwe.ch',
    soldOut: false,
  },
  {
    slug: 'Company-Show-day-2021-09-26',
    artist: {
      name: 'Barbara Bass',
      publicWebpage: 'https://api.optune.me/v1/artist/Barbara-Bass.html',
    },
    doors: '11:00',
    title: 'Company Show day',
    playDate: '2021-09-26T11:00:00.000Z',
    playTime: '14:00',
    startTime: '14:00',
    venue: {
      name: 'Kaufleuten',
      street: 'Pelikanplatz 18',
      postalCode: '8001',
      city: 'Zürich',
      country: 'Switzerland',
      website: 'http://www.kaufleuten.ch/home/',
    },
  },
  {
    slug: 'TV-Auftritt-Kauz-2019-01-09',
    artist: {
      name: 'Barbara Bass',
      publicWebpage: 'https://api.optune.me/v1/artist/Barbara-Bass.html',
    },
    artwork: {
      original: 'https://res.cloudinary.com/optune-me/image/upload/v1/optune/aa_wg77sy',
      jpeg80: 'https://res.cloudinary.com/optune-me/image/upload/q_80/v1/optune/aa_wg77sy.jpg',
    },
    doors: '11:00',
    title: 'TV Auftritt',
    playDate: '2020-06-12T11:00:00.000Z',
    playTime: '01:00',
    playTimeEnd: '02:00',
    startTime: '01:00',
    endTime: '02:00',
    venue: {
      name: 'Mascotte',
      street: 'Theaterstrasse 10',
      postalCode: '8001',
      city: 'Zürich',
      country: 'Switzerland',
      website: 'http://www.mascotte.ch/',
    },
    website: 'http://www.website.com',
    ticketLink: 'http://www.asdasd.com',
    soldOut: true,
  },
]

export const getGigs = async ({ gigsAPI, gigsAPIDomain }) => {
  const { slug, limit, includeMonthTitle, includePast } = gigsAPI
  const api = ApiProviders.OPTUNE

  const data = await fetchGigs(api.url(gigsAPIDomain)({ slug, limit, includePast })).catch(() => {
    return []
  })

  // result should always be an array with plain events
  const gigs = !!api.extractEvents ? api.extractEvents(data) : data

  return transformGigs(api)(includeMonthTitle)(gigsTEST)
}
