import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRentalHistory = createAsyncThunk(
    'rentalHistory',
    async (userId: number, { rejectWithValue }) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/${userId}/rental-history`
        );
        return data;
  
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );