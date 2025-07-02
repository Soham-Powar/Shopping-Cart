import Filters from "./Filters";
import Products from "./Products";

const ShopContainer = ({ categoryURL, setCategoryURL }) => {

	return (
		<main className="flex px-60 py-30 gap-5">
			<Filters setCategoryURL={setCategoryURL} />
			<Products url={categoryURL} />
		</main>
	)

}

export default ShopContainer;