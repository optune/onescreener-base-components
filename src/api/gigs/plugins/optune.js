import { formatGigDate } from '../utils.js'

export const optune = {
  url: slug => `https://api.optune.me/v2/events/${slug}.json`,
  transformEvent: ({ title, playDate, venue, website }) => ({
    title,
    startDate: formatGigDate(playDate),
    venue,
    website,
  }),
}
