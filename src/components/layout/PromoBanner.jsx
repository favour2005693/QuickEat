import React from "react";
import { BadgePercent } from "lucide-react"

const PromoBanner = () => {
  return (
    <div className="bg-white border border-gray-200  m-5 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg">
          <BadgePercent className="w-20 h-20"/>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Get 20% OFF on your first order!
          </h2>

          <p className="text-gray-600 mt-1">
            Use code:
            <span className="font-semibold text-black ml-1">
              QUICK20
            </span>
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition">
        Order Now →
      </button>
    </div>
  );
};

export default PromoBanner;