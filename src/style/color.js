// Colors
export const ColorGrey = '#f7f7f7'
export const ColorDustyGrey = '#9B9B9B'
export const ColorHaiti = '#0A0F2C'
export const ColorHaitiRGB = '15, 10, 44'
export const ColorHarlequin = '#27E200'
export const ColorHarlequinRGB = '39,226,0'
export const ColorBlue = '#005AE2'
export const ColorBlueRGB = '74,144,226'
export const ColorLightGrey = '#D6D3CF'
export const ColorLightGreyRGB = '214, 211, 207'
export const ColorMonza = '#D0021B'
export const ColorStormGray = '#4F4F4F'
export const ColorWhite = '#FFFFFF'
export const ColorWhiteRGB = '255,255,255'
export const BlackRGB = '0,0,0'

const DEFAULT_DEGREE = 20

// Color Theme
export const BackgroundColor = {
  accent: ColorHarlequin,
  accentRGB: ColorHarlequinRGB,
  base: ColorGrey,
  darkGradient: (degree = DEFAULT_DEGREE) => `linear-gradient(
    ${degree}deg,
    rgba(${ColorHaitiRGB}, 0.85) 38.46%,
    rgba(${ColorHaitiRGB}, 0)  100% 
  )`,
  disabled: ColorWhite,
  hover: ColorHaiti,
  hoverRGB: ColorHaitiRGB,
  interactive: `rgba(${ColorWhiteRGB}, 0.75)`,
  primary: ColorBlue,
  primaryRGB: ColorBlueRGB,
  secondary: ColorWhite,
  secondaryRGB: ColorWhiteRGB,
  selected: ColorBlue,
  selectedGradient: (degree = DEFAULT_DEGREE) =>
    `linear-gradient(${degree}deg, ${ColorBlue} 61.46%, rgba(${ColorBlueRGB},0.5) 100%)`,
  selectedRGB: ColorBlueRGB,
}

export const ForegroundColor = {
  accent: ColorWhite,
  accentInvert: ColorHarlequin,
  base: ColorHaiti,
  light: ColorDustyGrey,
  disabled: ColorLightGrey,
  error: ColorMonza,
  hover: ColorHarlequin,
  primary: ColorWhite,
  secondary: ColorStormGray,
  selected: ColorWhite,
}
