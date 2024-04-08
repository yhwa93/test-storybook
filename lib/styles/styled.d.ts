'use client'
import 'styled-components'
import { WindowTypes } from './themeStyles'

declare module 'styled-components' {
  export interface DefaultTheme {
    windowSize: WindowTypes
  }
}
