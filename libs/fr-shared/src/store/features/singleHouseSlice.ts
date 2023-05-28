import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleHouse = createAsyncThunk(
  'currentRental',
  async (houseId: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/houses/${houseId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
