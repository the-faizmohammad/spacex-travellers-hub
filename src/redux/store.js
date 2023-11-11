import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketsSlice';

import dragonReducer from './Dragon/dragonSlice';
import missionReducer from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragon: dragonReducer,
    mission: missionReducer,
  },
});

export default store;
