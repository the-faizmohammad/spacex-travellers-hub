import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketsSlice';
import missionReducer from './missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
