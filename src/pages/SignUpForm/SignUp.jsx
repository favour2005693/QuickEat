import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuth";
import { useState } from "react";

// Signup.jsx
export default function Signup() {
  // UseNavigate
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const navigteToLogin = () => {
    navigate("/Login");
  };

  // useState Hook
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (password !== comfirmPassword ) {
        return alert("password do not match")
      }
    try {
      await signUp(fullName, email, password);
      // alert("Account create successfully")

      toast.success("Account created successfully!")
      navigate("/profile");
    } catch (error) {
      // alert(error.message);
      // switch (error.code) {
      //   case "auth/network-request-failed":
      //     toasst.error("No internet connection please check your network.")
      //     break;

      //     case "auth/email-already-in-use":
      //       toast.error("An account with this email already exists.")
      //     break;
      //     case "auth/invalid-email":
      //       toast.error("Please enter a valid email address.")
      //     break;
      //     case "auth/weak-password":
      //       toast.error("Password should be at least 6 characters.")
      //       break;
      //       default:
      //       toast.error("Somethinh went wrong plaease try again.")
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Sign up to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={fullName}
              onChange={(e)=> setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={comfirmPassword}
              onChange={(e)=> setComfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />

            <p className="text-sm text-gray-600">
              I agree to the Terms & Conditions
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span
              className="text-black font-semibold cursor-pointer hover:underline"
              onClick={navigteToLogin}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
