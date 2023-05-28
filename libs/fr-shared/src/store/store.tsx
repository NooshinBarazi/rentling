import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import favoriteReducer from './features/favoriteHousesSlice';
import authReducer from './features/authSlice';
import housesReducer from './features/housesSlice';

const makeStore = () => {
  const store = configureStore({
    reducer: {
      houses: housesReducer,
      favoriteHouses: favoriteReducer,
      auth: authReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  return store;
};

export const store = configureStore({
  reducer: {
    houses: housesReducer,
    favoriteHouses: favoriteReducer,
    auth: authReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
