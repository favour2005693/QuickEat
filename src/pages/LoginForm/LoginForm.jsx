// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
    const navigteToSignUp = () =>{
      navigate("/signUp")
    }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600">QuickEat</h1>
          <p className="text-gray-500 mt-2">Welcome back</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-black font-medium hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 cursor-pointer text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <p className="text-gray-400 text-sm">OR</p>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full border cursor-pointer border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-medium transition"
          >
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <span className="text-black font-semibold cursor-pointer hover:underline"  onClick={navigteToSignUp}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
