import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const ShopContext = createContext({
	cart: [],
	addToCart: () => { },
	removeFromCart: () => { },
	decreaseQuantity: () => { },
})

const App = () => {
	const [cart, setCart] = useState(() => {
		const storedCart = localStorage.getItem("cart");
		return storedCart ? JSON.parse(storedCart) : [];
	});

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

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
		<ShopContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
			<RouterProvider router={router} />
		</ShopContext.Provider>
	);
}

export default App;
