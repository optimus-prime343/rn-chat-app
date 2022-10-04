import { DefaultTheme } from '@react-navigation/native'

import { COLORS } from '../constants'

export const reactNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary[500],
    background: COLORS.white,
  },
}
