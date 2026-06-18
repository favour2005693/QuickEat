import HeroSlider from "./HeroSlider";

import { Truck, ShieldCheck, Clock3 } from "lucide-react";

function HeroSection() {
  return (
    <section className="flex flex-wrap justify-around mt-10 mb-10">
      <div className="px-4">
        <h1 className="font-bold text-4xl">
          Delicious Foods,   
          Deliverd Fast
        </h1>
        <p className="text-[20px] px-1">
          Order your favourite meals top resturant near you.
        </p>

        <div className="flex mt-4 flex-col flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-red-500 rounded-lg  px-4 py-3 focus:outline-none transition"
          />
          <button
            className="bg-red-500   hover:bg-red-600 border border-gray-300 text-white cursor-pointer px-5 py-3 rounded-tr-lg 
            rounded-lg 
             font-medium transition duration-300  sm:w-full"
          >
            Search
          </button>
        </div>

        <div className="flex gap-2.5 mt-9 items-center hidden sm:mb-4 md:flex">
          <div className="flex  items-center gap-1">
            <Truck size={35} />
            <div className="m-0 p-0">
              <h3 className="font-bold">Fast Delivery</h3>
              <p className="m-0 p-0">20min delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock3 size={35} />
            <div>
              <h3 className="font-bold ">Best Quality</h3>
              <p className="">Fresh & tasty</p>
            </div>
          </div>
          <div className="flex  items-center gap-1">
            <ShieldCheck size={35} />
            <div>
              <h3 className="font-bold">Easy Payment</h3>
              <p className="m-0 p-0">Secure & safe</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <HeroSlider />
      </div>
    </section>
  );
}

export default HeroSection;
