export const formatGigDate = date => {
  const d = new Date(date)
  const [Y, M, D] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
  return { date: d, day: D, month: M, year: Y }
}
