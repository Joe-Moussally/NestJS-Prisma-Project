// ** Redux Imports
import { configureStore } from '@reduxjs/toolkit'

// ** Slices Imports
import themeReducer from './theme/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
