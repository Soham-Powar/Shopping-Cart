import NavLink from "./NavLink";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
	return (
		<nav className="bg-white py-5 flex text-2xl font-extrabold p-3 gap-2 justify-around">
			<p>SHOP.EZ</p>
			<div>
				<NavLink name="Home" />
				<NavLink name="Shop" />
				<NavLink name="New Arrivals" />
				<NavLink name="Brands" />
			</div>
			<ShoppingCart />
		</nav>
	)
}

export default NavBar;