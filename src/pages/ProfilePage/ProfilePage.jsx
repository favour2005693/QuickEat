import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuth";
import {
  FaUserEdit,
  FaHeart,
  FaMapMarkerAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaHistory,
} from "react-icons/fa";
import EditProfile from "./EdithProfile";
import profile from "../../assets/images/avatar-man.jpg"

const ProfilePage = () => {
const navigate = useNavigate();
const user = useAuth()
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-red-600 h-52  relative">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <img
            src={profile}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="mt-20 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800">{user?.displayName}</h2>

        <p className="text-gray-500">{user?.email}</p>

        <button
          className="mt-4 bg-red-600 text-white px-6 py-3 cursor-pointer rounded-full font-medium shadow-md"
          onClick={() => navigate("/edit-profile")}
        >
          Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 px-4 mt-8">
        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <h3 className="font-bold text-red-600 text-xl">25</h3>
          <p className="text-sm text-gray-500">Orders</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <h3 className="font-bold text-red-600 text-xl">12</h3>
          <p className="text-sm text-gray-500">Favorites</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <h3 className="font-bold text-red-600 text-xl">4</h3>
          <p className="text-sm text-gray-500">Addresses</p>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 mt-8 space-y-4">
        <MenuItem icon={<FaHistory />} title="Order History" />

        <MenuItem icon={<FaHeart />} title="Favorite Meals" />

        <MenuItem icon={<FaMapMarkerAlt />} title="Saved Addresses" />

        <MenuItem icon={<FaBell />} title="Notifications" />

        <MenuItem icon={<FaCog />} title="Settings" />
      </div>

      {/* Logout */}
      <div className="px-4 mt-8">
        <button className="w-full bg-white border border-red-500 text-red-600 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, title }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex items-center justify-between cursor-pointer hover:scale-[1.02] transition">
      <div className="flex items-center gap-4">
        <div className="text-red-600 text-xl">
          {icon}
        </div>

        <span className="font-medium text-gray-700">
          {title}
        </span>
      </div>

      <span className="text-gray-400">›</span>
    </div>
  );
};

export default ProfilePage;