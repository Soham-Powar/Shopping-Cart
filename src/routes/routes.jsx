import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";
import Cart from "../components/Cart";
import ProductDetails from "../components/ProductDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "shop",
		element: <Shop />,
	},
	{
		path: "product/:productId",
		element: <ProductDetails />,
	},
	{
		path: "cart",
		element: <Cart />
	},
]);

export default router;

