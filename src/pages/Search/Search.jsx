import { useState, useEffect } from 'react';
import { searchMeals } from '../../api/MealApi.js';
import { FiSearch, FiX } from 'react-icons/fi';

const searchSuggestions = ['Pizza', 'Burger', 'Rice', 'Chicken', 'pasta'];

const Search = () => {
   const [query, setQuery] = useState('');
   const [meals, setMeals] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const delay = setTimeout(() => {
         if (query.trim()) {
         } else {
            setMeals([]);
         }
      }, 500);
      fetchMeals();

      return () => clearTimeout(delay);
   }, [query]);

   const fetchMeals = async () => {
      setLoading(true);

      const results = await searchMeals(query);

      setMeals(results);
      setLoading(false);
   };

   return (
      <div className="min-h-screen bg-gray-50 px-4 py-6">
         {/* Header */}
         <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-red-600 mb-6">
               Search Meals
            </h1>

            {/* Search Bar */}
            <div className="relative">
               <FiSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
               />

               <input
                  type="text"
                  placeholder="Search food..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-900 outline-none focus:ring-2 focus:ring-red-500"
               />

               {query && (
                  <button
                     onClick={() => {
                        setQuery('');
                        setMeals([]);
                     }}
                     className="absolute right-4 top-1/2 -translate-y-1/2">
                     <FiX size={20} />
                  </button>
               )}
            </div>

            {/* SearchSuggestions Buttons */}
            <div className="flex flex-wrap justify-center mt-5 gap-5">
               {searchSuggestions.map((searchSuggestionsButton) => (
                  <div key={searchSuggestionsButton}>
                     <button className="border-2 border-red-500 cursor-pointer p-2 px-9 rounded-lg">
                        {searchSuggestionsButton}
                     </button>
                  </div>
               ))}
            </div>
            {/* Loading */}
            {loading && (
               <div className="mt-8 text-center">
                  <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
               </div>
            )}

            {/* No Results */}
            {!loading && query && meals.length === 0 && (
               <div className="text-center mt-10">
                  <h2 className="font-semibold text-lg">No meals found</h2>
               </div>
            )}

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
               {meals.map((meal) => (
                  <div
                     key={meal.idMeal}
                     className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                     <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-52 object-cover"
                     />

                     <div className="p-4">
                        <h3 className="font-semibold">{meal.strMeal}</h3>

                        <p className="text-sm text-gray-500 mt-1">
                           {meal.strCategory}
                        </p>

                        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg w-full">
                           View Meal
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Search;
