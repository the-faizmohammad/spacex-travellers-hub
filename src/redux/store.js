import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rocketsSlice';
import missionReducer from './missionSlice';
import dragonReducer from './dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionReducer,
    dragon: dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
