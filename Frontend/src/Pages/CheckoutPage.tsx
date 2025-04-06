import type React from "react";
import CheckoutForm from "../Components/CheckoutForm";
import OrderSummary from "../Components/OrderSummary";

const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <CheckoutForm />
        </div>
        <div className="md:w-1/3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
