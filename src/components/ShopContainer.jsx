import Filters from "./Filters";
import Products from "./Products";

const ShopContainer = ({ categoryURL, setCategoryURL, addToCart }) => {

	return (
		<main className="flex px-60 py-30 gap-5">
			<Filters setCategoryURL={setCategoryURL} />
			<Products url={categoryURL} addToCart={addToCart} />
		</main>
	)

}

export default ShopContainer;