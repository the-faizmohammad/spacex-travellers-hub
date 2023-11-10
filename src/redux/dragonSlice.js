import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isloading: false,
  reserved: [],
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
      const dragon = action.payload; 
      const existingDragon = state.data.find((d) => d.id === dragon.id);

      if (existingDragon) {
        existingDragon.reserved = !existingDragon.reserved;

        if (existingDragon.reserved) {
          state.reserved.push(existingDragon);
        } else {
          state.reserved = state.reserved.filter((d) => d.id !== existingDragon.id);
        }
      }
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
export const getReservedDragons = (state) => state.dragon.reserved;
export const { reserveDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
