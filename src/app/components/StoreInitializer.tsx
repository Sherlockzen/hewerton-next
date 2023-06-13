"use client"

import { useDarkTheme } from "../store/globals"

import { useRef } from 'react'

export default function StoreInitializer({ theme } : { theme: boolean }) {
  const initialized = useRef(false);  
  if (!initialized.current) {
    useDarkTheme.setState({ theme })
  }
  return null
}
