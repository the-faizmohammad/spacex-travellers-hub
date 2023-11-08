import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rocketsSlice';
import missionReducer from './missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
