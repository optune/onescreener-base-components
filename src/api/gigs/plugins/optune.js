import { formatGigDate } from '../utils.js'

export const optune = {
  url: slug => `https://api.optune.me/v1/events/${slug}.json`,
  transformEvent: ({ title, playDate, venue }) => ({
    title,
    startDate: formatGigDate(playDate),
    venue,
  }),
}
