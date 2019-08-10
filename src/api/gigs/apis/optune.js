import { formatGigDate } from '../utils/formatGigDate.js'

const getUrl = (slug, limit, includePast) =>
  `https://api.optune.me/v2/events/Amazing-DJ-Joel.json?limit=${limit}&inclpast=${includePast}`
// const getUrl = (slug, limit, includePast) => `https://api.optune.me/v2/events/${slug}.json?limit=${limit}&inclpast=${includePast}`

export const optune = {
  url: getUrl,
  transformEvent: ({ title, playDate, venue, website }) => ({
    title,
    startDate: formatGigDate(playDate),
    venue,
    website,
  }),
}
