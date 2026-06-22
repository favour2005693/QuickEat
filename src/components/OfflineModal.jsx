import React from "react";

import { useOnlineStatus } from "../contexts/OnlineStatusContext";
import { WifiOff } from "lucide-react";

const OfflineModal = () => {
const { isOnline } = useOnlineStatus();

  if (isOnline) return null;
  
  return(
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-md rounded-3xl p-8 text-center shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Icon */}
        <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-5">
          <WifiOff size={40} className="text-red-600" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          You're Offline
        </h2>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          QuickEat needs an internet connection to load meals, offers,
          and restaurant updates.
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium mb-6">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          No Internet Connection
        </div>

        {/* Button */}
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default OfflineModal;