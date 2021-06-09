export const filterTime = (arr, fromDate = 0) =>
  !!arr
    ? arr
        .map((link) => ({
          ...link,
          createdAt: new Date(parseInt(link.createdAt)),
        }))
        .filter((link) => link.createdAt.getTime() > fromDate.getTime())
    : []
