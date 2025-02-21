import { Children } from "react";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart"



const router = [
    {
        path: "/",
        element: <Home/>,
        children: [
            {index: true, element: <Products/> },
            {path: "cart", element: <Cart/>},
        ]
    }
]

export default router