import { QRCodeCanvas } from "qrcode.react";
import { FaTimes, FaTimesCircle } from 'react-icons/fa'

export default function QrCodeGenerator() {
  return (
    <div
      className="fixed top-0 flex justify-center
                    inset-0 items-center bg-black/50 
                    z-50"
    >
      <div className="w-80 bg-white p-5 rounded-2xl transition ">
        <div className="flex ml-5 pb-5 justify-self-end text-black">
          {/* <FaTimes size={20} /> */}
        </div>
        <div className="flex justify-center">
          <QRCodeCanvas
            value="https://quickEat.com"
            size={200}
            bgColor="#ffffff"
            fgColor="#ff0000"
          />
          
        </div>
        <h2 className="text-center text-black mt-3 font-bold text-1.5xl">
            Scan the QR code
          </h2>
      </div>
    </div>
  );
}
