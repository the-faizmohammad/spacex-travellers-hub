import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // We will Add  reducers
  },
});

export default rocketsSlice.reducer;
