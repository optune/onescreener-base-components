import 'isomorphic-fetch' // makes fetch() available
import { ApiProviders } from './apis/index.js'
import { transformVenue } from './utils/transformVenue.js'

export const Type = {
  MONTH: 'month',
  GIG: 'gig',
}

const fetchGigs = url =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(res => {
        try {
          resolve(res.json())
        } catch (error) {
          console.error('Parse error', error)
          reject('Parsing failed')
        }
      })
      .catch(error => {
        console.error('fetching failed', error)
        reject('Fetch failed')
      })
  })

const transformGigs = api => includeMonthTitle => events => {
  const gigs = []

  let previousYear = 0
  let previousMonth = 0

  events
    .map(api.transformEvent)
    .map(transformVenue)
    .sort((a, b) => a.startDate.date - b.startDate.date)
    .forEach(event => {
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

export const getGigs = async ({ gigsAPI, gigsAPIDomain }) => {
  const { slug, limit, includeMonthTitle, includePast } = gigsAPI
  const api = ApiProviders.OPTUNE

  const data = await fetchGigs(api.url(gigsAPIDomain)({ slug, limit, includePast })).catch(() => {
    return []
  })

  // result should always be an array with plain events
  const gigs = !!api.extractEvents ? api.extractEvents(data) : data

  return transformGigs(api)(includeMonthTitle)(gigs)
}
