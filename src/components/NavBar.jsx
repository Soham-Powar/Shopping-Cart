import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="bg-white py-5">
			<Link to="/" className="p-3 font-medium text-xl">Home</Link>
			<Link to="/shop" className="p-3 font-medium text-xl">Shop</Link>
		</nav>
	)
}

export default NavBar;