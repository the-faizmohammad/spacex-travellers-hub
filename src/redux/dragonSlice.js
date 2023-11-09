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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdragons.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchdragons.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(fetchdragons.rejected, (state) => {
        state.isloading = false;
      });
  },

});

export default dragonSlice;
