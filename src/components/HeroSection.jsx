import HeroSlider from "./HeroSlider";

import { Truck, ShieldCheck, Clock3 } from "lucide-react";

function HeroSection() {
  return (
    <section className="flex flex-wrap justify-around mt-10 mb-10">
      <div className="px-4">
        <h1 className="font-bold text-5xl">
          Delicious Foods, <br />
          Deliverd Fast
        </h1>
        <p className="text-2xl">
          Order your favourite meals top resturant near you.
        </p>

        <div className="flex mt-4 flex-wrap">
          <input
            type="text"
            placeholder="Search..."
            className="w-80 border border-red-300  rounded-bl-lg rounded-tl-lg  px-4 py-3 outline-non transition"
          />
          <button
            className="bg-red-500  border-red-300  hover:bg-red-600 border border-gray-300 text-white cursor-pointer px-5 py-3 rounded-tr-lg 
            rounded-br-lg 
             font-medium transition duration-300"
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
