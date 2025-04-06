import { useAppSelector } from "../Helper/types";

type CurrentObject = {
  price: number;
  quantity: number;
};

function OrderSummary() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const subTotal: number = cartItems.reduce(function (
    result: number,
    curr: CurrentObject
  ) {
    return curr.price * curr.quantity + result;
  },
  0);
  const randomTax: number = Math.floor(Math.random() * 10);
  const total: number = subTotal + randomTax;

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>SubTotal</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${randomTax}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-2">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default OrderSummary;
