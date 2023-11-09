/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isloading: false,
};

const missionApi = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('mission/fetchMissions', async () => {
  try {
    const response = await axios.get(missionApi);
    const result = response.data;
    return result;
  } catch (err) {
    throw new Error('Failed to Fetch missions');
  }
});

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.isloading = false;
      });
  },
});

export default missionSlice.reducer;
