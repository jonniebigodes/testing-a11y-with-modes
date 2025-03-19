import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark' | '80'
    fonts: {
      family: string
    }
    spacing: typeof spacing
    color: typeof color
    borderRadius: typeof borderRadius
    boxShadow: typeof boxShadow
    typography: typeof typography
  }
}

const baseColors = {
  white: '#FFFFFF ',
  black: '#202020',
  otherBlack: '#2C2C2C ',
  grey: {
    base: '#909090',
    light1: '#A6A6A6',
    light2: '#BCBCBC',
    light3: '#D2D2D2',
    light4: '#E9E9E9',
    light5: '#F5F6F7',
    light6: '#F9F9F9',
    dark1: '#797979',
    dark2: '#636363',
    dark3: '#4D4D4D',
    dark4: '#363636',
    dark5: '#2C2C2C',
    dark6: '#202020',
  },
  green: {
    base: '#E5F8BC',
    light1: '#E8F9C3',
    light2: '#EAF9C9',
    light3: '#EDFAD0',
    light4: '#EFFBD7',
    light5: '#F2FCDE',
    dark1: '#CEDFA9',
    dark2: '#B7C696',
    dark3: '#A0AE84',
    dark4: '#899571',
    dark5: '#737C5E',
  },
  blue: {
    base: '#B1DDE4',
    light1: '#B9E0E7',
    light2: '#C1E4E9',
    light3: '#C8E7EC',
    light4: '#D0EBEF',
    light5: '#D8EEF2',
    dark1: '#9FC7CD',
    dark2: '#8EB1B6',
    dark3: '#7C9BA0',
    dark4: '#6A8589',
    dark5: '#596f72',
  },
  neon: {
    pink: '#FF1B8D',
    purple: '#B836D9',
    blue: '#00F3FF',
    yellow: '#FFE900',
    green: '#04FF69',
    orange: '#FF8A00',
  },
  retro: {
    darkPurple: '#2B0F54',
    purple: '#AB1F65',
    navy: '#000B3B',
    black: '#010326',
    gridBlue: '#31AFDE',
  },
}

const spaceUnit = 1

const borderRadius = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  round: '50%',
}

const spacing = {
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
}

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.blue.dark2}, 0 0 0 4px ${baseColors.blue.light5}`,
}

const typography = {
  fontSize: {
    body: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.9rem',
    bodyXXS: '0.72rem',
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
  },
  fontWeight: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
}

const color = {
  accentText: baseColors.black,
  badgeBackground: baseColors.grey.light4,
  badgeText: baseColors.grey.dark2,
  cartButtonText: baseColors.grey.base,
  bannerBackground: baseColors.blue.base,
  buttonClear: 'transparent',
  buttonClearHover: baseColors.grey.light5,
  buttonPrimary: baseColors.grey.dark6,
  buttonPrimaryHover: baseColors.grey.dark5, // recheck
  buttonSecondary: baseColors.green.base,
  buttonSecondaryHover: baseColors.green.dark1, // recheck
  buttonText: baseColors.white,
  cardBackground: baseColors.grey.light6,
  checkoutTopBackground: baseColors.green.base,
  checkoutBottomBackground: baseColors.grey.light6,
  formBackground: baseColors.white,
  foodItemBackground: baseColors.white,
  footerBackground: baseColors.grey.dark5,
  headerBackground: baseColors.white,
  restaurantDetailBackground: baseColors.white,
  headerBorder: baseColors.grey.light4,
  inputBackground: baseColors.grey.light5,
  inputHint: baseColors.grey.dark1,
  inputIcon: baseColors.grey.dark6,
  label: baseColors.grey.dark4,
  labelActive: baseColors.grey.dark6,
  menuSectionBackground: baseColors.grey.light6,
  stepsIndicatorInnerBar: baseColors.grey.dark6,
  stepsIndicatorOuterBar: baseColors.grey.light5,
  orderSummaryBackground: baseColors.white,
  overlayBackground: baseColors.white,
  overlayHeader: baseColors.grey.light5,
  primaryText: baseColors.otherBlack,
  reviewText: baseColors.blue.dark5,
  screenBackground: baseColors.white,
  sidebarHeader: baseColors.grey.dark4,
  sidebarFooter: baseColors.white,
  skeletonBase: baseColors.grey.light4,
  skeletonHighlight: baseColors.grey.light5,
  topBannerBackground: baseColors.green.base,
  newRestaurantTag: baseColors.green.base,
  white: baseColors.white,
  black: baseColors.black,
}

const lightTheme: DefaultTheme = {
  borderRadius,
  boxShadow,
  color,
  fonts: {
    family: 'NunitoSans, sans-serif',
  },
  name: 'light',
  spacing,
  typography,
}

const darkTheme: DefaultTheme = {
  ...lightTheme,
  boxShadow: {
    ...boxShadow,
    outerBorder: `0 0 0 2px ${baseColors.blue.dark5}, 0 0 0 4px ${baseColors.blue.base}`,
  },
  color: {
    ...lightTheme.color,
    badgeBackground: baseColors.grey.dark4,
    badgeText: baseColors.grey.light1,
    cartButtonText: baseColors.grey.dark2,
    bannerBackground: baseColors.grey.dark5,
    buttonClearHover: baseColors.grey.dark4,
    buttonPrimary: baseColors.green.base,
    buttonPrimaryHover: baseColors.green.dark1,
    buttonSecondary: baseColors.green.base,
    buttonText: baseColors.otherBlack,
    cardBackground: baseColors.grey.dark5,
    checkoutTopBackground: baseColors.grey.dark6,
    checkoutBottomBackground: baseColors.grey.dark1,
    formBackground: baseColors.grey.dark5,
    foodItemBackground: baseColors.otherBlack,
    headerBackground: baseColors.grey.dark6,
    restaurantDetailBackground: baseColors.grey.dark5,
    headerBorder: baseColors.grey.dark4,
    inputBackground: baseColors.grey.dark4,
    inputIcon: baseColors.white,
    inputHint: baseColors.grey.light1,
    label: baseColors.grey.light4,
    labelActive: baseColors.white,
    menuSectionBackground: baseColors.grey.dark6,
    stepsIndicatorInnerBar: baseColors.green.base,
    stepsIndicatorOuterBar: baseColors.grey.dark4,
    orderSummaryBackground: baseColors.grey.dark5,
    overlayBackground: baseColors.grey.dark5,
    overlayHeader: baseColors.grey.dark4,
    primaryText: baseColors.white,
    reviewText: baseColors.blue.base,
    screenBackground: baseColors.grey.dark6,
    sidebarHeader: baseColors.grey.dark4,
    sidebarFooter: baseColors.grey.dark5,
    skeletonBase: baseColors.grey.dark3,
    skeletonHighlight: baseColors.grey.dark2,
    topBannerBackground: baseColors.grey.dark5,
  },
  name: 'dark',
}

const theme80s: DefaultTheme = {
  ...lightTheme,
  name: '80',
  boxShadow: {
    ...boxShadow,
    card: '0px 0px 20px rgba(255, 27, 141, 0.3)',
    outerBorder: `0 0 0 2px ${baseColors.neon.pink}, 0 0 0 4px ${baseColors.neon.blue}`,
  },
  color: {
    ...lightTheme.color,
    accentText: baseColors.neon.pink,
    badgeBackground: baseColors.retro.purple,
    badgeText: baseColors.white,
    cartButtonText: baseColors.neon.yellow,
    bannerBackground: baseColors.neon.blue,
    buttonClearHover: baseColors.retro.purple,
    buttonPrimary: baseColors.neon.pink,
    buttonPrimaryHover: baseColors.neon.purple,
    buttonSecondary: baseColors.neon.green,
    buttonSecondaryHover: baseColors.neon.blue,
    buttonText: baseColors.white,
    cardBackground: baseColors.retro.darkPurple,
    checkoutTopBackground: baseColors.neon.blue,
    checkoutBottomBackground: baseColors.retro.navy,
    formBackground: baseColors.retro.darkPurple,
    foodItemBackground: baseColors.retro.navy,
    headerBackground: baseColors.retro.black,
    restaurantDetailBackground: baseColors.retro.darkPurple,
    headerBorder: baseColors.neon.pink,
    inputBackground: baseColors.retro.navy,
    inputIcon: baseColors.neon.pink,
    inputHint: baseColors.neon.blue,
    label: baseColors.neon.yellow,
    labelActive: baseColors.neon.pink,
    menuSectionBackground: baseColors.retro.navy,
    stepsIndicatorInnerBar: baseColors.neon.pink,
    stepsIndicatorOuterBar: baseColors.retro.purple,
    orderSummaryBackground: baseColors.retro.darkPurple,
    overlayBackground: baseColors.retro.darkPurple,
    overlayHeader: baseColors.retro.purple,
    primaryText: baseColors.white,
    reviewText: baseColors.neon.blue,
    screenBackground: baseColors.retro.black,
    sidebarHeader: baseColors.retro.purple,
    sidebarFooter: baseColors.retro.darkPurple,
    skeletonBase: baseColors.retro.purple,
    skeletonHighlight: baseColors.neon.pink,
    topBannerBackground: baseColors.neon.blue,
    newRestaurantTag: baseColors.neon.green,
  },
}

export { lightTheme, darkTheme, theme80s }
