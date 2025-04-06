import { useAppSelector } from "../Helper/types";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Navbar from "../Components/Navbar";

function QRPage() {
  const cartItems = useAppSelector((store) => store.cart.items);
  
  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.mrp || 0) * (item.quantity || 1);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img
              src="https://img.freepik.com/premium-vector/vector-qr-code-sample-smartphone-scanning-isolated-white-background_255502-702.jpg?semt=ais_hybrid&w=740"
              alt="QR Code scanner"
              className="w-64 h-64 object-contain"
            />
          </div>
          
          <div className="text-center mb-4">
            <p className="text-lg font-medium">Payment to Mr. Ravi Shankar Tripathi</p>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-semibold text-gray-700">Total Amount:</span>
            <span className="text-xl font-bold text-indigo-600 flex items-center">
              <LiaRupeeSignSolid />
              {totalAmount.toFixed(2)}
            </span>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Scan this QR code to complete your payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRPage;
