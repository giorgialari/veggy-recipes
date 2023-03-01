import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getAllAPIRecipes = async (term) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=10&apiKey=${API_KEY}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllAPIRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


