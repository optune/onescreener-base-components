import dateFormat from 'dateformat'

export const formatGigDate = date => {
  const d = new Date(date)

  const mappedDate = {
    date: d,
    formattedDate: dateFormat(d, 'dd.mm.yy'),
    day: dateFormat(d, 'dd'),
    month: dateFormat(d, 'mm'),
    year: dateFormat(d, 'yy'),
  }

  return mappedDate
}
