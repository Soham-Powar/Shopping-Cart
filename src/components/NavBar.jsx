import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
	return (
		<nav className="bg-white py-5 flex p-3 gap-2 justify-around items-center">
			<p className="text-3xl font-extrabold">SHOP.EZ</p>
			<div>
				<NavLink name="Home" />
				<NavLink name="Shop" />
				<NavLink name="New Arrivals" />
				<NavLink name="Brands" />
			</div>
			<SearchBar />
			<ShoppingCart />
		</nav>
	)
}

export default NavBar;