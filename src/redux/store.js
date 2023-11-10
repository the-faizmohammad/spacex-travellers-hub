import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketsSlice';
import dragonReducer from './dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragon: dragonReducer,
  },
});

export default store;
