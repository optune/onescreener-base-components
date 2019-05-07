import 'isomorphic-fetch' // makes fetch() available
import { has, map, slice, pipe as _ } from 'ramda'
import { optune, bandsintown, gigatools } from './apis.js'

const fetchEventsAPIResponse = async url => {
  let res = { ok: false }
  try {
    res = await fetch(url)
  } catch (e) {
    console.error('fetching failed', e)
  }
  let parsedResult = []
  if (res.ok) {
    try {
      parsedResult = await res.json()
    } catch (e) {
      console.warn(`parsing error for ${url}, setting empty data`)
      parsedResult = []
    }
  }
  return parsedResult
}

const ApiProviders = {
  optune,
  bandsintown,
  gigatools,
}

const transformVenue = ({ startDate, title, venue }) => {
  const { name, city } =
    venue ||
    [{ name: null, city: null }]
      .filter(venue => venue)
      .reduce(
        (acc, cur, idx) =>
          idx === 0 && {
            ...acc,
            ...cur,
          },
        { name: 'unknown', city: 'unknown' }
      )
  return `${startDate}: ${title}, ${name}, ${city}`
}

const getGigs = async ({ api, slug, limit = 5 }) => {
  const Api = ApiProviders[api]
  const transforms = _(Api.transformEvent, transformVenue)

  const data = await fetchEventsAPIResponse(Api.url(slug))
  // result should always be an array with plain events
  const result = has('extractEvents')(Api) ? Api.extractEvents(data) : data
  return map(transforms, slice(0, limit)(result))

  // limit client side since not all APIs have a number based limit for events
}

export { getGigs }
