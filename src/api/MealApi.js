// fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")

// const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// export const getMeals = async () => {
//   const response = await fetch(
//     `${BASE_URL}/search.php?s=`
//   );

//   const data = await response.json();
//   return data.meals;
// };

// export const searchMeals = async (query) => {
//   const response = await fetch(
//     `${BASE_URL}/search.php?s=${query}`
//   );

//   const data = await response.json();
//   return data.meals;
// };

// export const getMealById = async (id) => {
//   const response = await fetch(
//     `${BASE_URL}/lookup.php?i=${id}`
//   );

//   const data = await response.json();
//   return data.meals[0];
// };

// AXIOS API SETUP
import api from "./axios";

export const getMeals = async () => {
  const response = await api.get("/search.php?s=burger");
  return response.data.meals;
};
