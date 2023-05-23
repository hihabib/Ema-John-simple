// import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Order from "./Pages/Order/Order.jsx";
import ManageInventory from "./Pages/ManageInventory/ManageInventory.jsx";
import Login from "./Pages/Login/Login.jsx";
import OrderReview from "./Pages/OrderReview/OrderReview.jsx";
import useOrderLoader from "./loaders/useOrderLoader.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import Register from "./Pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

library.add(fas, far);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
        loader: useOrderLoader,
      },
      {
        path: "/order-review",
        element: <OrderReview />,
      },
      {
        path: "/manage-inventory",
        element: (
          <PrivateRoute>
            <ManageInventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
