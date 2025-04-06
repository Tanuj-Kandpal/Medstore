import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShoppingCartPage from "../Pages/ShoppingCartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import QRPage from "../Pages/QRPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/Cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "/Checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/QRCode",
    element: <QRPage />,
  },
]);

export default appRouter;
