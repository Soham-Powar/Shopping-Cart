// App.jsx

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { useState } from "react";

const App = () => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart((prev) => [...prev, product]);
	};

	const removeFromCart = (id) => {
		setCart((prev) => prev.filter(item => item.id !== id));
	};

	return (
		<RouterProvider router={router(cart, addToCart, removeFromCart)} />
	);
}

export default App;
