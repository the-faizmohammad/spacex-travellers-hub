import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketsSlice';

import dragonReducer from './dragonSlice';
import missionReducer from './missionSlice';


const store = configureStore({
  reducer: {
    rockets: rocketReducer,

    dragon: dragonReducer,

    mission: missionReducer,
  },
});

export default store;
