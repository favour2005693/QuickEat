import { Search, Clock3, ShieldCheck, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Delicious food,
            <br />
            delivered fast
          </h1>

          <p className="mt-5 text-gray-500 text-lg max-w-md">
            Order your favorite meals from top restaurants near you.
          </p>

          {/* Search */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search for food, restaurants..."
                className="w-full pl-11 pr-4 py-4 border rounded-xl outline-none focus:border-red-500"
              />
            </div>

            <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-medium">
              Search
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-8 mt-10">
            <div className="flex items-center gap-3">
              <Truck className="text-red-600" size={22} />
              <div>
                <h4 className="font-semibold text-sm">
                  Fast Delivery
                </h4>
                <p className="text-xs text-gray-500">
                  30 min delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="text-red-600" size={22} />
              <div>
                <h4 className="font-semibold text-sm">
                  Best Quality
                </h4>
                <p className="text-xs text-gray-500">
                  Fresh & tasty
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-red-600" size={22} />
              <div>
                <h4 className="font-semibold text-sm">
                  Easy Payment
                </h4>
                <p className="text-xs text-gray-500">
                  Secure & safe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="bg-red-50 rounded-3xl p-4">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Food"
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 bg-white shadow-xl rounded-2xl p-4">
            <h4 className="font-semibold">
              🍕 Margherita Pizza
            </h4>
            <p className="text-sm text-gray-500">
              25-30 min delivery
            </p>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-5">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;