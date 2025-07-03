import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = ({ setCategoryURL }) => {
	return (
		<nav className="bg-white py-5 flex p-3 gap-2 justify-around items-center border-gray-200 border-b-3">
			<p className="text-3xl font-extrabold font-[integralCF]">SHOP.EZ</p>
			<div>
				<NavLink name="Home" />
				<NavLink name="Shop" />
				<NavLink name="New Arrivals" />
				<NavLink name="Brands" />
			</div>
			<SearchBar setCategoryURL={setCategoryURL} />
			<Link to="/cart" aria-label="Go to cart">
				<ShoppingCart className="cursor-pointer" />
			</Link>
		</nav>
	)
}

export default NavBar;