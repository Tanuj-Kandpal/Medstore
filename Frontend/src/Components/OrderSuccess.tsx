import { useNavigate } from "react-router";
import { randomOrderNumber } from "../Helper/helper";

function OrderSuccess() {
  const navigate = useNavigate();
  function onReturnHome() {
    navigate("/");
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Order Placed Successfully!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your purchase. Your order is confirmed.
            </p>
          </div>

          <div className="mt-8">
            <div className="text-sm text-gray-600">
              <p className="font-medium">Order number:</p>
              <p>{randomOrderNumber()}</p>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <p className="font-medium">Estimated delivery:</p>
              <p>{"Will be delivered within 2 days"}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col space-y-4">
            <button
              onClick={onReturnHome}
              className="w-full px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
