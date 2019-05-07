import { formatGigDate } from '../utils.js'

export const bandsintown = {
  url: slug =>
    `https://rest.bandsintown.com/artists/${slug}/events?app_id=onescreener.com`,
  transformEvent: ({ description, datetime, venue: { name }, venue }) => ({
    title: description ? description : name,
    startDate: formatGigDate(datetime),
    venue,
  }),
}
