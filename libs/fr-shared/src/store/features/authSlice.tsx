import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import router from 'next/router';
import { RootState } from '../store';

interface AuthState {
  user: User | null;
  loading: boolean;
  // msg: string;
  error: string | null;
}

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  // msg: '',
};

export const signIn = createAsyncThunk(
  'signIn',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await window.fetch(
        'http://localhost:8080/auth/sign-in',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const res = await response.json();
      localStorage.setItem('user', JSON.stringify(res));

      if (response.status === 200) router.push('/');

      return res;
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk('signUp', async (data: any,{rejectWithValue}) => {
  try {
    const response = await window.fetch('http://localhost:8080/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
  } catch (error) {
    return rejectWithValue(error);
  }
  
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Sign up failed';
      })
      .addCase(signIn.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.error.message || 'Sing in failed';
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
