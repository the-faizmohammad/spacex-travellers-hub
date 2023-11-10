/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isloading: false,
  reserved: false,
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
  reducers: {
    reserveMission: (state, action) => {
      const { id } = action.payload;
      const updatedMissions = state.data.map((mission) => {
        if (mission.mission_id !== id) return mission;
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        data: updatedMissions,
      };
    },
    leaveMission: (state, action) => {
      const { id } = action.payload;
      const updatedMissions = state.data.map((mission) => {
        if (mission.mission_id !== id) return mission;
        return { ...mission, reserved: false };
      });
      return {
        ...state,
        data: updatedMissions,
      };
    },
  },
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

export const { reserveMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
