import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCurrentRental = createAsyncThunk(
    'currentRental',
    async (userId: number, { rejectWithValue }) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/${userId}/current-rental`
        );
        return data;
  
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );