import { createSlice } from '@reduxjs/toolkit';


const missionSlice = createSlice({
    name: 'mission',
    initialState: {
        data: [],
        isloading: false,
        error: null,
    },
    reducers: {},
});

export default missionSlice.reducer;