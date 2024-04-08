'use client'
import { DefaultTheme } from 'styled-components'

const windowSize = {
  small: "screen and (max-width: '600px')",
  base: "screen and (max-width: '768px')",
  large: "screen and (max-width: '1024px')",
}

const light = {
  backgroundColor: '#ffffff',
}

const night = {
  backgroundColor: '#000000',
}

export const ThemeStyles: DefaultTheme = {
  windowSize,
  light,
  night,
}
