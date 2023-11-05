// ** Redux Imports
import type { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// ** Theme Imports
import { lightTheme } from '@/hooks/useTheme'

// Define the initial state using that type
const initialState = lightTheme

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Update the theme state
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload
    },

    // Switch between light and dark mode
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const { setThemeMode, toggleTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer
