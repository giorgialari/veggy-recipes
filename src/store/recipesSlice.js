import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  name: 'recipesStore',
  initialState: {
    currentRecipes: [],
    currentRecipeDetails: null,
  },
  reducers: {
    getAllRecipesStore: (state, action) => {
      state.currentRecipes = action.payload;
    },
    getRecipeByIdStore: (state, action) => {
      state.currentRecipes = action.payload;
    },
    setRecipeDetails: (state, action) => {
      state.currentRecipeDetails = action.payload;
    },
  },
});

export const {
  getAllRecipesStore,
  getRecipeByIdStore,
  setRecipeDetails,
} = recipesSlice.actions;

export default recipesSlice.reducer;
