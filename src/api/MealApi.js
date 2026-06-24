import api from "./axios";
// const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
// MealDB API endpoint
// Searching meals from mealDB api call endpoint
export const searchMeals = async (query) => {
  try {
    const response = await api.get(`/search.php?s=${query}`);
    //  const data = await response.data.meals;
    return response?.data?.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Fecthing meals from mealDB api endpiont for product display
export const getMeals = async () => {
  const response = await api.get("/search.php?s=Rice");
  return response.data.meals;
};
