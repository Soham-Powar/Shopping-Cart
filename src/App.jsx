// App.jsx

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { useState } from "react";

const App = () => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart((prevCart) => {
			const existing = prevCart.find(item => item.id === product.id);
			if (existing) {
				return prevCart.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prevCart, { ...product, quantity: 1 }];
		});
	};


	const removeFromCart = (id) => {
		setCart((prev) => prev.filter(item => item.id !== id));
	};

	const decreaseQuantity = (id) => {
		setCart((prevCart) => {
			return prevCart
				.map(item =>
					item.id === id
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter(item => item.quantity > 0);
		});
	};

	return (
		<RouterProvider router={router(cart, addToCart, removeFromCart, decreaseQuantity)} />
	);
}

export default App;
