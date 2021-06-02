import { StatisticsPeriod } from '../../constants/StatisticsPeriod'

const daysDelta = {
  [StatisticsPeriod.WEEK]: 6,
  [StatisticsPeriod.MONTH]: 30,
  [StatisticsPeriod.MONTH_3]: 90,
}

export const getFromDate = (statisticsPeriod = StatisticsPeriod.WEEK) => {
  const now = new Date()
  const fromDate = new Date()
  fromDate.setDate(now.getDate() - daysDelta[statisticsPeriod])

  return fromDate
}
