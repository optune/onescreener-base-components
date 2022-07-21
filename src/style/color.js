// Colors
export const ColorHaiti = '#0A0F2C'
export const ColorHarlequin = '#27E200'
export const ColorBlue = '#005AE2'
export const ColorBlueRGB = '74,144,226'
export const ColorLightGrey = '#D6D3CF'
export const ColorMonza = '#D0021B'
export const ColorStormGray = '#4F4F4F'
export const ColorWhite = '#FFFFFF'
export const ColorWhiteRGB = '255,255,255'
export const ColorGrey = '#f7f7f7'

// React base colors
export const ColorPampas = '#EEE9E3'
export const ColorHaitiRGB = '15, 10, 44'
export const ColorHarlequinRGB = '39,226,0'
export const ColorWaterloo = '#7C819C'
export const ColorHavelockBlue = '#4A90E2'
export const ColorHawkesBlue = '#D4DEF3'
export const ColorDarkestGrey = '#4E4E4E'
export const ColorDarkGrey = '#5F5F5F'
export const ColorSoftGrey = '#d7d3d0'
export const ColorSofterGrey = '#e4dfdc'
export const ColorDustyGray = '#9B9B9B'
export const ColorGold = '#E5B700'
export const ColorSilver = '#B3B2AF'
export const ColorShipCove = '#6A86B0'
export const ColorBackdrop = 'rgba(10, 15, 44, 0.3)'
export const ColorBackdropDark = 'rgba(0, 0, 0, 0.85)'

export const ColorLightGreySecond = '#DADDE5'

export const ColorPrimaryLight = '#D6E2F7'
export const ColorPrimaryDark = ColorBlue

export const ColorPurpleLight = '#E9DCFA'
export const ColorPurpleMedium = '#9E7EC9'
export const ColorPurpleDark = '#442E64'

export const ColorHarlequinLight = '#D8F5DE'
export const ColorHarlequinDark = '#25890F'

export const ColorSecondary10 = '#0A1C3B'
export const ColorSecondary10RGB = '10,28,59'
export const ColorSecondary20 = '#223452'
export const ColorSecondary30 = '#3A4B69'
export const ColorSecondary40 = '#53637F'
export const ColorSecondary50 = '#6D7B95'
export const ColorSecondary60 = '#8893AA'
export const ColorSecondary90 = '#DADDE5'
export const ColorSecondary95 = '#EAECF0'
export const ColorSecondary150 = '#EFF0F2'

export const ColorActive50 = '#1A75FF'

const DEFAULT_DEGREE = 20

// Color Theme
export const BackgroundColor = {
  accent: ColorBlue,
  accentSecondary: ColorActive50,
  disabled: ColorWhite,
  base: ColorGrey,
  disabledDark: ColorSecondary90,
  hover: ColorHaiti,

  primaryLight: ColorPrimaryLight,
  purpleLight: ColorPurpleLight,
  purpleMedium: ColorPurpleMedium,
  greenLight: ColorHarlequinLight,
  secondary: ColorWhite,
  secondaryRGB: ColorWhiteRGB,
  selected: ColorBlue,
  selectedGradient: (degree = DEFAULT_DEGREE) =>
    `linear-gradient(${degree}deg, ${ColorBlue} 61.46%, rgba(${ColorBlueRGB},0.5) 100%)`,
  special: ColorSecondary95,
}

export const ForegroundColor = {
  accent: ColorWhite,
  disabled: ColorLightGrey,
  hover: ColorBlue,
  error: ColorMonza,
  info: ColorSecondary40,
  primaryDark: ColorPrimaryDark,
  purpleDark: ColorPurpleDark,
  greenDark: ColorHarlequinDark,
  success: ColorHarlequin,
  secondary: ColorSecondary10,
  secondaryAttention: ColorSecondary30,
  subsecondary: ColorSecondary50,
  selected: ColorWhite,
}

export default {
  ColorPampas,
  ColorHaitiRGB,
  ColorHarlequinRGB,
  ColorWaterloo,
  ColorHavelockBlue,
  ColorHawkesBlue,
  ColorDarkestGrey,
  ColorDarkGrey,
  ColorSoftGrey,
  ColorSofterGrey,
  ColorDustyGray,
  ColorGold,
  ColorSilver,
  ColorShipCove,
  ColorBackdrop,
  ColorBackdropDark,
}
