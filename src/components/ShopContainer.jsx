import Filters from "./Filters";
import Products from "./Products";

import { useState } from "react";
const ShopContainer = () => {
	const [categoryURL, setCategoryURL] = useState("all");

	return (
		<main className="flex px-60 py-30 gap-5">
			<Filters setCategoryURL={setCategoryURL} />
			<Products url={categoryURL} />
		</main>
	)

}

export default ShopContainer;