import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from "axios"

export type Favorite = {
  id: string;
  img: string;
  region: string;
  title: string;
  dailyPrice: string;
  monthlyPrice: string;
};

type FavoriteState = Favorite[]

const initialState: FavoriteState = []

export const fetchFavorite = createAsyncThunk(
  'favorites',
  async (userId, { rejectWithValue }) => {
    try {
      const usr = 2;
      const { data } = await axios.get(
        `http://localhost:8080/${usr}/favorites`
      );
      return data;

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload: house }: PayloadAction<Favorite>) => {
      const foundHouse = state.find((element) => element.id === house.id);
      if (foundHouse) {
        const index = state.findIndex((element) => element.id === house.id);
        state.splice(index, 1);
      } else {
        state.push(house);
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.favorites
      }
    }
  }
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
