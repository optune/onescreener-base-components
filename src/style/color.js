// Colors
export const ColorHaiti = '#0A0F2C'
export const ColorHarlequin = '#27E200'
export const ColorBlue = '#005AE2'
export const ColorBlueRGB = '74,144,226'
export const ColorLightGrey = '#D6D3CF'
export const ColorStormGray = '#4F4F4F'
export const ColorWhite = '#FFFFFF'

const DEFAULT_DEGREE = 20

// Color Theme
export const BackgroundColor = {
  accent: ColorHarlequin,
  disabled: ColorWhite,
  hover: ColorHaiti,
  secondary: ColorWhite,
  selected: ColorBlue,
  selectedGradient: (degree = DEFAULT_DEGREE) =>
    `linear-gradient(${degree}deg, ${ColorBlue} 61.46%, rgba(${ColorBlueRGB},0.5) 100%)`,
}

export const ForegroundColor = {
  accent: ColorWhite,
  disabled: ColorLightGrey,
  hover: ColorHarlequin,
  secondary: ColorStormGray,
  selected: ColorWhite,
}
