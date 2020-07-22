export const transformVenue = ({ startDate, title, venue, website }) => {
  const { name, city } =
    venue ||
    [{ name: null, city: null }]
      .filter((venue) => venue)
      .reduce(
        (acc, cur, idx) =>
          idx === 0 && {
            ...acc,
            ...cur,
          },
        { name: 'unknown', city: 'unknown' }
      )

  return {
    startDate,
    title,
    venue: {
      name,
      city,
    },
    website,
  }
}
