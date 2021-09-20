// Colors
export const ColorHaiti = '#0A0F2C'
export const ColorHarlequin = '#27E200'
export const ColorBlue = '#005AE2'
export const ColorBlueRGB = '74,144,226'
export const ColorLightGrey = '#D6D3CF'
export const ColorMonza = '#D0021B'
export const ColorStormGray = '#4F4F4F'
export const ColorWhite = '#FFFFFF'
export const ColorGrey = '#f7f7f7'

export const ColorLightGreySecond = '#DADDE5'

export const ColorSecondary10 = '#0A1C3B'
export const ColorSecondary10RGB = '10,28,59'
export const ColorSecondary20 = '#223452'
export const ColorSecondary30 = '#3A4B69'
export const ColorSecondary40 = '#53637F'
export const ColorSecondary50 = '#6D7B95'
export const ColorSecondary60 = '#8893AA'
export const ColorSecondary90 = '#DADDE5'
export const ColorSecondary150 = '#EFF0F2'

const DEFAULT_DEGREE = 20

// Color Theme
export const BackgroundColor = {
  accent: ColorBlue,
  disabled: ColorWhite,
  base: ColorGrey,
  hover: ColorHaiti,
  secondary: ColorWhite,
  selected: ColorBlue,
  selectedGradient: (degree = DEFAULT_DEGREE) =>
    `linear-gradient(${degree}deg, ${ColorBlue} 61.46%, rgba(${ColorBlueRGB},0.5) 100%)`,
  special: ColorSecondary20,
}

export const ForegroundColor = {
  accent: ColorWhite,
  disabled: ColorLightGrey,
  hover: ColorBlue,
  error: ColorMonza,
  info: ColorSecondary40,
  success: ColorHarlequin,
  secondary: ColorSecondary10,
  secondary: ColorStormGray,
  selected: ColorWhite,
}
