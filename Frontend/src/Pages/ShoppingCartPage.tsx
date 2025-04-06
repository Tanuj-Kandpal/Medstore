import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { FaCircleMinus, FaTrashCan } from "react-icons/fa6";
import {
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../cartSlice.js";
import { HiPlusCircle } from "react-icons/hi";
import { ProductDetails, useAppSelector } from "../Helper/types.js";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useNavigate } from "react-router";

function ShoppingCartPage() {
  const cartItems = useAppSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleRemove(item: number) {
    dispatch(removeItem(item));
  }

  function handleIncrement(item: number) {
    dispatch(increaseItemQuantity(item));
  }

  function handleDecrement(item: number) {
    dispatch(decreaseItemQuantity(item));
  }

  // async function handleCheckout() {
  //   const stript = await loadStripe("");
  // }

  function handleCheckout() {
    if (cartItems.length === 0) {
      navigate("/");
    } else {
      navigate("/QRCode");
    }
  }

  // Calculate total cart amount
  const totalCartAmount = cartItems.reduce((total: number, item: ProductDetails) => {
    return total + (item.mrp || 0) * (item.quantity || 1);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />
      <div className="w-full max-w-full px-4 py-4 sm:py-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-gray-800">
          Your Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-600 mb-4">Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6 w-full">
            {cartItems.map((item: ProductDetails) => {
              // Calculate item total price
              const itemTotalPrice = (item.mrp || 0) * (item.quantity || 1);
              
              return (
                <div
                  key={item.image}
                  className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition-all hover:shadow-lg w-full"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-md"
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-grow text-center sm:text-left w-full">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 break-words">
                      {item.name}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <p className="text-lg sm:text-xl font-bold text-indigo-600">
                        <span className="flex items-center justify-center sm:justify-start">
                          <LiaRupeeSignSolid />
                          {item.mrp} × {item.quantity}
                        </span>
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-green-600">
                        <span className="flex items-center justify-center sm:justify-start">
                          <LiaRupeeSignSolid />
                          {itemTotalPrice.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start mt-2 sm:mt-0">
                    <button
                      onClick={() => handleIncrement(item.id || 0)}
                      className="text-red-500 hover:text-red-700 transition-colors p-1"
                    >
                      <HiPlusCircle className="w-5 h-5" />
                    </button>
                    <span className="text-base font-medium mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleDecrement(item.id || 0)}
                      className="text-red-500 hover:text-red-700 transition-colors p-1"
                    >
                      <FaCircleMinus className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id || 0)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1 mt-2 sm:mt-0"
                    aria-label="Remove item"
                  >
                    <FaTrashCan className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
            
            {/* Cart Summary */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Cart Amount:</span>
                <span className="text-xl font-bold text-green-600 flex items-center">
                  <LiaRupeeSignSolid />
                  {totalCartAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center sm:justify-end mt-4 sm:mt-6 w-full">
          <button
            className="w-full sm:w-auto font-semibold border-cyan-300 p-2 sm:p-3 bg-[#E28F33] rounded-xl text-sm sm:text-base"
            onClick={handleCheckout}
          >
            {cartItems.length === 0 ? "Continue Shopping" : "Proceed to Checkout Page"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
