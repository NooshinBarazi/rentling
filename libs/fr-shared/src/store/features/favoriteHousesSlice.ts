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

export const fetchFavoriteHouses = createAsyncThunk(
  'favoriteHouses',
  async (userId: number, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/${userId}/favorites`
      );
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const favoriteHousesSlice = createSlice({
  name: 'favoriteHouses',
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
  extraReducers: (builder ) => {

    builder
    .addCase(fetchFavoriteHouses.fulfilled, (state, action) => {
      state.push(...action.payload);
    })
    .addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.favoriteHouses
      }
    })
  }
});

export const { addFavorite } = favoriteHousesSlice.actions;
export default favoriteHousesSlice.reducer;
