// ** React Imports
import { useEffect } from 'react'
import { useAppDispatch } from '../useAppDispatch'
import { useAppSelector } from '../useAppSelector'
import { selectTheme, setThemeMode, toggleTheme } from '@/redux/theme/slice'
import { darkTheme, lightTheme } from '.'

export function useTheme() {
  // ** Redux Dispatch and Selector
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const themeObject = theme.mode === 'light' ? lightTheme : darkTheme

  // Issue with Next and SSR (window undefined fix)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      const defaultTheme = prefersDarkTheme ? 'dark' : 'light'
      // Dispatch the action to set the initial theme mode
      dispatch(setThemeMode(defaultTheme))
    }
  }, [dispatch])

  return { ...themeObject, toggleTheme: () => dispatch(toggleTheme()) }
}
