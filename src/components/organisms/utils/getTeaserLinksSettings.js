export const isDoubleSize = (link = {}) => link.isShop || link.isSession

export const getFilteredTeaserLinksList = ({ list = [], shopEnabled }) =>
  list
    .filter(({ visible }) => (typeof visible === 'undefined' ? true : !!visible))
    .filter(({ isShop, isSession }) => (isShop || isSession ? shopEnabled : true))

export const getTeaserLinksValueLength = ({ list = [], shopEnabled }) => {
  let teaserLinksFiltered = getFilteredTeaserLinksList({ list, shopEnabled })
  return teaserLinksFiltered.reduce((acc, curr) => acc + (isDoubleSize(curr) ? 2 : 1), 0)
}
