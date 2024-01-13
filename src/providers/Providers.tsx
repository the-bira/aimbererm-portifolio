'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}