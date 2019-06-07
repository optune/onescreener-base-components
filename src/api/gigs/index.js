import 'isomorphic-fetch' // makes fetch() available
import { has, map, slice, pipe as _ } from 'ramda'
import { optune, bandsintown, gigatools } from './apis.js'

const fetchEventsAPIResponse = async url =>
  new Promise((resolve, reject) => {
    let res = { ok: false }

    try {
      fetch(url).then(res => {
        console.log(res.json())
        try {
          resolve(res.json())
        } catch (e) {
          console.error('Parse error', e)
          reject('Parsing failed')
        }
      })
    } catch (e) {
      console.error('fetching failed', e)
      reject('Fetch failed')
    }
  })

const ApiProviders = {
  OPTUNE: optune,
  BANDSINTOWN: bandsintown,
  GIGATOOLS: gigatools,
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

  const data = await fetchEventsAPIResponse(Api.url(slug)).catch(error => {
    throw error
  })

  // result should always be an array with plain events
  const result = has('extractEvents')(Api) ? Api.extractEvents(data) : data
  return map(transforms, slice(0, limit)(result))

  // limit client side since not all APIs have a number based limit for events
}

export { getGigs }
