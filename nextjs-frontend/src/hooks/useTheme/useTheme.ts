// ** React Imports
import { useState, useLayoutEffect, useEffect } from 'react'

// ** Theme Imports
import { Theme } from './type'
import { darkTheme, lightTheme } from '.'

export function useTheme() {
  // ** States
  const [theme, setTheme] = useState<Theme>(lightTheme)

  // Issue with Next and SSR (window undefined fix)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      const defaultTheme: Theme = prefersDarkTheme ? darkTheme : lightTheme
      setTheme(prevTheme => prevTheme || defaultTheme)
    }
  }, [])

  // On theme change
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.mode) // Change HTML attribute theme value
    localStorage.setItem('theme', JSON.stringify(theme)) // Change local data value
  }, [theme])

  // Function to toggle theme
  const toggleTheme = () => {
    console.log('THEME', theme)
    // Toggle between light and dark themes
    setTheme(prevTheme => (prevTheme.mode === 'light' ? darkTheme : lightTheme))
  }

  return { ...theme, setTheme, toggleTheme }
}
