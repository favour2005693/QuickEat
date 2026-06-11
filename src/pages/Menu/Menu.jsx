
import burger from "../../assets/images/3ec9fe32c6217014789b5f42e2343f47.jpg"
import burger2 from "../../assets/images/d5e18022e63641a90ddad2d056cdf252.jpg"
import burger3 from "../../assets/images/e4453bf0971059dc5bbeca37665bd78d.jpg"
import {
  Search,
  Filter,
  Star,
  Plus,
} from "lucide-react";

const categories = [
  "All",
  "Pizza",
  "Burgers",
  "Chicken",
  "Pasta",
  "Salads",
  "Drinks",
  "Desserts",
];

const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    restaurant: "Pizza House",
    price: 12.99,
    rating: 4.5,
    time: "25-30 min",
    image: burger,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    restaurant: "Pizza House",
    price: 13.99,
    rating: 4.4,
    time: "25-30 min",
    image: burger2,

  },
  {
    id: 3,
    name: "Classic Burger",
    restaurant: "Burger King",
    price: 8.99,
    rating: 4.3,
    time: "20-25 min",
    image: burger3,

  },
];


export default function Menu() {
  return (
    <div>
       <div className="max-w-7xl mx-auto px-4 py-8">

    {/* Header */}
    <h1 className="text-3xl font-bold">
      All Dishes
    </h1>

    <p className="text-gray-500 mt-2">
      Home / Menu
    </p>

    {/* Search Section */}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">

      <div className="relative md:col-span-2">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search dishes..."
          className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
        />
      </div>

      <select className="border rounded-lg px-4 py-3">
        <option className='bg-red-600'>All Categories</option>
      </select>

      <div className="flex gap-3">
        <select className="flex-1 border rounded-lg px-4 py-3">
          <option>Popular</option>
        </select>

        <button className="border px-4 rounded-lg">
          <Filter size={18} />
        </button>
      </div>

    </div>

    {/* Content */}
    <div className="mt-8 flex flex-col lg:flex-row gap-6">

      {/* Sidebar */}
      <div className="lg:w-60 border rounded-xl p-4">

        <h3 className="font-semibold mb-4">
          Categories
        </h3>

        <div className="space-y-2">

          {categories.map((cat) => (
            <button
              key={cat}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-300"
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      {/* Products */}
      <div className="flex-1">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {foods.map((food) => (
            <div
              key={food.id}
              className="border rounded-xl overflow-hidden bg-white"
            >

              {/* Image */}
              <div className="h-44 bg-gray-100">
                <img
            src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-4">

                <h3 className="font-semibold text-lg">
                  {food.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {food.restaurant}
                </p>

                <div className="flex items-center gap-4 text-sm mt-2">

                  <span className="flex items-center gap-1">
                    <Star
                      size={14}
                      fill="currentColor"
                    />
                    {food.rating}
                  </span>

                  <span>
                    {food.time}
                  </span>

                </div>

                <div className="flex items-center justify-between mt-4">

                  <p className="font-bold text-lg">
                    ${food.price}
                  </p>

                  <button
                    className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-red-500 hover:text-white"
                  >
                    <Plus size={18} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Pagination */}

        <div className="flex justify-center gap-3 mt-10">

          <button className="w-10 h-10 border rounded-lg">
            ←
          </button>

          <button className="w-10 h-10 bg-red-500 text-white rounded-lg">
            1
          </button>

          <button className="w-10 h-10 border rounded-lg">
            2
          </button>

          <button className="w-10 h-10 border rounded-lg">
            3
          </button>

          <button className="w-10 h-10 border rounded-lg">
            →
          </button>

        </div>

      </div>

    </div>

  </div>
    </div>
  )
}
