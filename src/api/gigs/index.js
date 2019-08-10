import 'isomorphic-fetch' // makes fetch() available
import { ApiProviders } from './apis/index.js'
import { transformVenue } from './utils/transformVenue.js'

const fetchGigs = url =>
  new Promise((resolve, reject) => {
    let res = { ok: false }
    try {
      fetch(url).then(res => {
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

const transformGigs = api => a => a.map(api.transformEvent).map(transformVenue)

export const getGigs = async ({
  provider,
  slug,
  limit,
  includePast,
  ...other
}) => {
  const api = ApiProviders[provider]

  const data = await fetchGigs(api.url(slug, limit, includePast)).catch(() => {
    return []
  })

  // result should always be an array with plain events
  const gigs = !!api.extractEvents ? api.extractEvents(data) : data

  return transformGigs(api)(gigs)
}
