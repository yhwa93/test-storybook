'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeStyles } from '@/lib/styles/themeStyles'

export default function ThemeProviderLayout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={ThemeStyles}>{children}</ThemeProvider>
}
