import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isloading: false,
};

const dragonsApi = 'https://api.spacexdata.com/v4/dragons';

export const fetchdragons = createAsyncThunk('dragon/fetchdragons', async () => {
  try {
    const response = await axios.get(dragonsApi);
    const result = response.data;
    return result;
  } catch (err) {
    throw new Error('Failed to Fetch dragons');
  }
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const { id } = action.payload;

      state.data = state.data.map((dragon) => (dragon.id !== id ? dragon : { ...dragon, reserved: true }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdragons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchdragons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchdragons.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reserveDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
