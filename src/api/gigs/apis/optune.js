import { formatGigDate } from '../utils/formatGigDate.js'

const getUrl = (domain = 'https://api.optune.me') => ({ slug, limit, includePast }) =>
  `${domain}/v2/events/${slug}.json?limit=${limit}&inclpast=${includePast}`

// *** TEST ***
// const getUrl = (slug, limit, includePast) =>
//  `https://api.optune.me/v2/events/Amazing-DJ-Joel.json?limit=${limit}&inclpast=${includePast}`

export const optune = {
  url: getUrl,
  transformEvent: ({ title, playDate, venue, website }) => ({
    title,
    startDate: formatGigDate(playDate),
    venue,
    website,
  }),
}
