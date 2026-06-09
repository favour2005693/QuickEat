import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profileImage from "../../assets/images/profile.jpg";
import { useTheme } from "../../contexts/ThemeContext";

// import icons from lucide-react
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  User,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Toggle Dark Mode
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const navigteToSignUp = () => {
    navigate("/signUp");
  };
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-white-600 shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="w-40 " alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-black-700  hover:text-red-500 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="text-black-700 hover:text-red-500 transition duration-300"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="text-black-700 hover:text-red-500 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-black-700  hover:text-red-500 transition duration-300"
            >
              Contact
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-black-700 hover:text-red-500 transition"
              >
                Pages
                <ChevronDown size={18} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-12 left-0 w-44 bg-white dark:bg-white-700 shadow-lg rounded-xl p-3 flex flex-col gap-3">
                  <Link
                    to="/offers"
                    className="hover:text-red-500 dark:text-black"
                  >
                    Offers
                  </Link>

                  <Link
                    to="/orders"
                    className="hover:text-red-500 dark:text-black"
                  >
                    Orders
                  </Link>

                  <Link
                    to="/profile"
                    className="hover:text-red-500 dark:text-black"
                  >
                    Profile
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Search size={20} className="text-black-700 " />
            </button>

            {/* Dark Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <ShoppingCart
                size={22}
                className="text-gray-900  dark:text-black"
              />

              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* User */}
            <button className="rounded-full hover:bg-gray-100">
              {/* <User size={22} className="text-gray-700 dark:text-white" /> */}
              <img
                className="w-12 cursor-pointer h-12 rounded-full object-cover "
                src={profileImage}
                alt="user Profile"
              />
            </button>

            {/* CTA Button */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-5 py-2 rounded-full font-medium transition duration-300"
              onClick={navigteToSignUp}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-white-900 shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-5">
            <Link
              to="/"
              className="text-gray-700 dark:text-black hover:text-red-500"
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="text-gray-700 dark:text-black hover:text-red-500"
            >
              Menu
            </Link>

            <Link
              to="/about"
              className="text-gray-700 dark:text-black hover:text-red-500"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 dark:text-black hover:text-red-500"
            >
              Contact
            </Link>

            <Link
              to="/offers"
              className="text-gray-700 dark:text-black hover:text-red-500"
            >
              Offers
            </Link>

            {/* Mobile Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Search size={20} className="text-black-700 dark:text-black" />
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-700 dark:text-black" />
                )}
              </button>

              <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <ShoppingCart
                  size={22}
                  className="text-black-700 dark:text-black"
                />

                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <button className="p-2 rounded-full  ">
                {/* <User size={22} className="text-gray-700 dark:text-black" /> */}
                <img
                  class="w-12 cursor-pointer h-12 rounded-full object-cover "
                  src={profileImage}
                  alt="user Profile"
                />
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="bg-red-500 hover:bg-red-300 text-white py-2 rounded-full font-medium transition duration-300"
              onClick={navigteToSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
