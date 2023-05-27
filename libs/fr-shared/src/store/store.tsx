import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import favoriteReducer from './features/favoriteHousesSlice';
import authReducer from './features/authSlice';

const makeStore = () => {
  const store = configureStore({
    reducer: {
      favoriteHouses: favoriteReducer,
      auth: authReducer,
    },
    devTools: true
  });
  return store
}

export const store = configureStore({
  reducer: {
    favoriteHouses: favoriteReducer,
    auth: authReducer,
  },
  devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];


export const wrapper = createWrapper<AppStore>(makeStore);

