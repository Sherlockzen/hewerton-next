"use client"
import React from 'react'
import { useDarkTheme } from '../store/globals'

export const ProviderTheme = ({ children } : {children: React.ReactNode}) => {
  const theme = useDarkTheme((state) => state.theme)  
  console.log(theme);
  
  return (
    <div data-theme={theme ? 'dark' : 'winter'}>{children}</div>
  )
}
