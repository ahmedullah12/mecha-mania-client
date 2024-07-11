import App from "@/App";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Product/Products";
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
            }
        ]
    }
]);

export default router;