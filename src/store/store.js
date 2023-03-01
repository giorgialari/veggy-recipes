import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';

const store = configureStore({
  reducer: {
    recipesStore: recipesReducer,
  },
});

export default store;
