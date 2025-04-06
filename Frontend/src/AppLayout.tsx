import { Provider } from "react-redux";
import { store } from "./store.js";
import { RouterProvider } from "react-router-dom";
import AppRouter from "../src/Routes/AppRouter.js";
function AppLayout() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={AppRouter}></RouterProvider>
      </Provider>
    </>
  );
}

export default AppLayout;
