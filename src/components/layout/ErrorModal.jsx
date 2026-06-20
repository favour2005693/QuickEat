import { AlertTriangle, X } from "lucide-react";

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-red/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl animate-in fade-in zoom-in">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-black-500">
            <AlertTriangle size={28} />
            <h2 className="text-xl font-bold">Oops!</h2>
          </div>

          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-black" />
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          {message || "Something went wrong. Please try again later."}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;