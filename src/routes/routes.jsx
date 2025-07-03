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
			element: <Home cart={cart} />,
			errorElement: <NotFound />,
		},
		{
			path: "shop",
			element: <Shop cart={cart} addToCart={addToCart} />,
		},
		{
			path: "product/:productId",
			element: <ProductDetails cart={cart} addToCart={addToCart} />,
		},
		{
			path: "cart",
			element: <Cart cart={cart} removeFromCart={removeFromCart} />
		},
	]);
}

export default router;

