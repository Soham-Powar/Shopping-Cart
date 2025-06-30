import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";

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
]);

export default router;

