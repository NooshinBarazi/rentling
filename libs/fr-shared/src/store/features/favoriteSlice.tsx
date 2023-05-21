import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Favorite = {
  id: string;
};

type FavoriteState = Favorite[];
const initialState: FavoriteState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload: houseId }: PayloadAction<string>) => {
      const foundHouse = state.find((element) => element.id === houseId);
      if (foundHouse) {
        const index = state.findIndex((element) => element.id === houseId);
        state.splice(index, 1);
      } else {
        state.push({ id: houseId });
      }
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
