import axios from "axios";

// AXIOS API SETUP
const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

api.interceptors.request.use((config) =>{
  if (!navigator.onLine) {
    return Promise.reject(new Error("No internet connection"))
  }
  return config;
})
export default api;
