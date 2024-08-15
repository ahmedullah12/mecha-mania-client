import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About/About";
import AddNewProduct from "@/pages/AddNewProduct/AddNewProduct";
import Cart from "@/pages/Cart/Cart";
import CheckoutPage from "@/pages/CheckoutPage/CheckoutPage";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Products from "@/pages/Product/Products";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import SignUp from "@/pages/SignUp/SignUp";
import SuccessPage from "@/pages/SuccessPage/SuccessPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/success-page",
        element: <SuccessPage />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-new-product",
        element: <AddNewProduct />,
      },
    ],
  },
]);

export default router;
