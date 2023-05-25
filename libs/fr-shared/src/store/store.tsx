import { configureStore } from '@reduxjs/toolkit';
import { createWrapper} from "next-redux-wrapper";
import FavoriteReducer from './features/favoriteSlice';
import authReducer from './features/authSlice';

const makeStore = ()=>{
  const store = configureStore({
    reducer: {
      favorites: FavoriteReducer,
      auth: authReducer,
    },
  });
  return store
}

export const store = configureStore({
  reducer: {
    favorites: FavoriteReducer,
    auth: authReducer,
  },
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];


export const wrapper = createWrapper<AppStore>(makeStore);

