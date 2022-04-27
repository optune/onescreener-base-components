import chroma from 'chroma-js'
import { ColorWhite, ForegroundColor } from '../../../style/color'

export const isDoubleSize = (link = {}) => link.isShop || link.isSession

export const getFilteredTeaserLinksList = ({ list = [], shopEnabled }) =>
  list
    .filter(({ visible }) => (typeof visible === 'undefined' ? true : !!visible))
    .filter(({ isShop, isSession }) => (isShop || isSession ? shopEnabled : true))

export const getTeaserLinksValueLength = ({ list = [], shopEnabled }) => {
  let teaserLinksFiltered = getFilteredTeaserLinksList({ list, shopEnabled })
  return teaserLinksFiltered.reduce((acc, curr) => acc + (isDoubleSize(curr) ? 2 : 1), 0)
}

export const getTeaserLinkTagColors = ({
  isTransparent,
  isDesign,
  color,
  colorBackground,
  colorTag,
  colorBackgroundTag,
}) => {
  let bgColor = colorBackground
  if (bgColor === 'transparent') bgColor = '#000000'

  const tagBackgroundColor = !!colorBackgroundTag
    ? colorBackgroundTag
    : isTransparent || chroma(bgColor).alpha() === 0
    ? chroma(color).luminance(0.2)
    : chroma(bgColor).luminance(0.2)

  const tagLuminance = Math.round(chroma(tagBackgroundColor).luminance() * 100)

  const teaserLinksBackgroundLuminance = isTransparent
    ? 0
    : Math.round(chroma(bgColor).luminance() * 100)

  const tagColor =
    isDesign || !!colorTag
      ? colorTag
      : tagLuminance >= 70
      ? teaserLinksBackgroundLuminance >= 70
        ? ForegroundColor.secondary
        : bgColor
      : ColorWhite

  const colorBorder = isTransparent
    ? undefined
    : teaserLinksBackgroundLuminance > 70
    ? chroma(bgColor).brighten(1)
    : chroma(bgColor).darken(1)

  return {
    tagColor,
    tagBackgroundColor,
    colorBorder,
  }
}
