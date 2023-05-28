import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: any = [];

export const fetchHouses = createAsyncThunk(
  'houses',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/houses`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.push(...action.payload);
      })
      .addCase(fetchHouses.rejected, (state, action) => {})
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.houses,
        };
      });
  },
});

export const {} = housesSlice.actions;
export default housesSlice.reducer;
