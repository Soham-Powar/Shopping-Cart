import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import PromoBanner from "../components/PromoBanner";
import ShopContainer from "../components/ShopContainer";

import { useState } from "react";

const Shop = ({ cart, addToCart }) => {
	const [categoryURL, setCategoryURL] = useState("all");
	return (
		<>
			<PromoBanner />
			<NavBar setCategoryURL={setCategoryURL} cart={cart} />
			<ShopContainer categoryURL={categoryURL} setCategoryURL={setCategoryURL} addToCart={addToCart} />
			<Footer />
		</>
	)
}

export default Shop;