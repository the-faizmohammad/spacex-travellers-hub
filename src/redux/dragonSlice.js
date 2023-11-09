import { createSlice } from '@reduxjs/toolkit';

const dragonSlice = createSlice({
  name: 'dragon',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // We will Add reducers
  },
});

export default dragonSlice;
