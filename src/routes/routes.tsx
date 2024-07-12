import App from "@/App";
import About from "@/pages/About/About";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Product/Products";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "products",
                element: <Products/>
            },
            {
                path: "product/:id",
                element: <ProductDetails/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "contact-us",
                element: <ContactUs/>
            }
        ]
    }
]);

export default router;