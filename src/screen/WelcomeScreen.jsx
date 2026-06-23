import { FaArrowRight } from "react-icons/fa";
import { FaPizzaSlice, FaHamburger, FaDrumstickBite } from "react-icons/fa";

import WelcomeScreenLogo from "../assets/images/welcomeScreenLogo.png"

const WelcomeScreen = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 py-10">
      {/* Logo */}
      <div className="flex justify-center">
        <div className="bg-white-800 text-whitefont-bold w-50 rounded-3xl flex items-center justify-center shadow-lg">
          <img src={WelcomeScreenLogo} alt="logo" className="w-40" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to
          <span className="text-red-600"> QuickEat</span>
        </h1>

        <p className="text-gray-500 text-lg max-w-md mx-auto">
          Discover delicious meals from around the world and get them delivered
          fast to your doorstep.
        </p>

        {/* Food Preview */}
        <div className="flex justify-center gap-4 mt-8">
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center text-4xl">
            <FaHamburger color="#ff0000"/>
          </div>

          <div className="w-24 h-24 bg-red-600 rounded-3xl flex items-center justify-center text-5xl shadow-lg">
            <FaPizzaSlice color="#ffffff"/>
          </div>

          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center text-4xl">
            <FaDrumstickBite color="#ff0000"/>
          </div>
        </div>
      </div>

      {/* Button */}
       <div>
        {/*<button
          onClick={onGetStarted}
          className="w-full bg-red-600 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-red-700 transition"
        >
          Get Started
          <FaArrowRight />
        </button> */}

        <p className="text-center text-gray-400 text-sm mt-4">
          Fast • Fresh • Delicious
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;