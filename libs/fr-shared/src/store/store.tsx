import { configureStore } from '@reduxjs/toolkit';
import FavoriteReducer from './features/favoriteSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    favorites: FavoriteReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
