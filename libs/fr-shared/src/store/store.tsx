import { configureStore } from '@reduxjs/toolkit'
import FavoriteReducer from './features/favoriteSlice'

export const store = configureStore({
  reducer: {
    favorites: FavoriteReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch