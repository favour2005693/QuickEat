import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { FaCamera } from "react-icons/fa";
import { IoArrowBack} from "react-icons/io5"
import burger from "../../assets/images/burger1.jpg"
import profile from "../../assets/images/avatar-man.jpg"


const EditProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Favour Emmanuel",
    email: "favour@example.com",
    phone: "+234 812 345 6789",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API Call Here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-red-600 h-44 relative flex items-center justify-center">
        <div
          className="absolute top-5 left-3 focus:bg-black/10 rounded-full p-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <button className="">
            <IoArrowBack color="#ffffff" size={30} />
          </button>
        </div>

        <h1 className="text-white text-2xl font-bold">Edit Profile</h1>
      </div>

      <div className="px-4 -mt-12">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={profile}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border-4 bg-whtie border-white shadow-lg"
            />

            <button className="absolute bottom-1 right-1 bg-red-600 text-white p-3 rounded-full shadow-md">
              <FaCamera />
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white rounded-3xl p-6 shadow-lg space-y-5"
        >
          <div>
            <label className="block text-gray-600 mb-2">Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">New Password</label>

            <input
              type="password"
              placeholder="********"
              className="w-full border p-4 rounded-xl outline-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;