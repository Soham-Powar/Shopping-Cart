import NavBar from "./NavBar";
import Footer from "./Footer"

import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart, addToCart, decreaseQuantity }) => {
	console.log(cart);
	return (
		<>
			<NavBar cart={cart} />
			<main className="flex px-50 py-15 gap-20">
				<div className="flex-4/5">
					<h1 className="font-[integralCF] text-4xl">Your Cart</h1>
					<div className="pt-5">
						<div className="bg-white p-6 rounded-xl border-blush border-2 flex flex-col">
							{cart.length === 0 ? (
								<p className="text-gray-500">Your cart is empty.</p>
							) : (
								cart.map(item => (
									<CartItem key={item.id} item={item} removeFromCart={removeFromCart} addToCart={addToCart} decreaseQuantity={decreaseQuantity} />
								))
							)}
						</div>
					</div>
				</div>
				<div className="bg-violet-200 flex-1/5">
					price details
				</div>
			</main>
			<Footer />
		</>
	);
}

// increase quantity if added more times
//change ui

export default Cart;