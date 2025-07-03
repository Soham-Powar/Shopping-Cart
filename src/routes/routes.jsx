import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";
import Cart from "../components/Cart";
import ProductDetails from "../components/ProductDetails";

const router = (cart, addToCart, removeFromCart) => {
	return createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <NotFound />,
		},
		{
			path: "shop",
			element: <Shop addToCart={addToCart} />,
		},
		{
			path: "product/:productId",
			element: <ProductDetails addToCart={addToCart} />,
		},
		{
			path: "cart",
			element: <Cart cart={cart} removeFromCart={removeFromCart} />
		},
	]);
}

export default router;

