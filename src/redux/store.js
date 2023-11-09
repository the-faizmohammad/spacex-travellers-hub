import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './rocketsSlice';
/*import missionReducer from './missionSlice';
import dragonReducer from './dragonSlice';*/

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    /*mission: missionReducer,
    dragon: dragonReducer,*/
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
