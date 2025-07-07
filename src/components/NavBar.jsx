import { useContext } from "react";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBar = ({ setCategoryURL }) => {
	const { cart } = useContext(ShopContext);
	const noOfProducts = cart.length;
	return (
		<nav className="bg-white py-5 flex flex-col md:flex-row p-3 gap-2 justify-around items-center border-gray-200 border-b-3">
			<p className="text-3xl font-extrabold font-[integralCF]">SHOP.EZ</p>
			<div>
				<NavLink name="Home" />
				<NavLink name="Shop" />
				<NavLink name="New Arrivals" />
				<NavLink name="Brands" />
			</div>
			<SearchBar setCategoryURL={setCategoryURL} />
			<Link to="/cart" aria-label="Go to cart" className="relative">
				<ShoppingCart className="cursor-pointer w-6 h-6 hover:scale-120 transition-transform duration-500 ease-out delay-25" />
				{noOfProducts > 0 && (
					<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
						{noOfProducts}
					</span>
				)}
			</Link>
		</nav>
	)
}

export default NavBar;