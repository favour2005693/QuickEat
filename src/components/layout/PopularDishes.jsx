import { useEffect, useState } from "react";
import ErrorModal from "../../components/layout/ErrorModal";

// import axios api file
import { getMeals } from "../../api/MealApi";
// importing icon
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";

export default function PopularDishes() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const data = await getMeals();
        setMeal(data);
        console.log(data);
      } catch (error) {
        // setError("Failed To fetch Meal");
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

  const HandleCloseModal = () => {
    setError("");
  };
  return (
    <section className="">
      <div className="flex items-center justify-between px-8 mb-5">
        <h2 className="font-bold text-2xl ">Popular Dishes</h2>

        <div className="flex">
          <span>see more</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {meal.map((productMeal) => (
          <div
            className="max-w-sm overflow-hidden bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 group"
            key={productMeal.idMeal}
          >
            {/* Food Image */}
            <div className="overflow-hidden">
              <img
                src={productMeal.strMealThumb}
                alt={productMeal.strMeal}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Category */}
              <span className="text-sm font-medium text-red-500">
                {productMeal.strMeal}
              </span>

              {/* Title */}
              <h3 className="mt-1 text-xl font-bold text-gray-800">
                {productMeal.strMeal}
              </h3>

              {/* Rating & Delivery */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-gray-500 text-sm">(120)</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <FaTruck />
                  <span className="text-sm">20-30 min</span>
                </div>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between mt-5">
                <h4 className="text-2xl font-bold text-red-500">
                  ₦{productMeal.price}
                </h4>

                <button className="flex items-center gap-1 px-4 py-2 text-white bg-red-500 rounded-xl hover:bg-red-600 transition">
                  <FiPlus />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {error && <ErrorModal message={error} onClose={HandleCloseModal} />} */}
    </section>
  );
}
