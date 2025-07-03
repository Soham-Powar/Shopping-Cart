const Cart = ({ cart, removeFromCart }) => {
	console.log(cart);
	return (
		<div className="p-10">
			<h2 className="text-3xl font-bold mb-6">Your Cart</h2>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul className="space-y-4">
					{cart.map(item => (
						<li key={item.id} className="flex justify-between items-center border-b pb-4">
							<div>
								<h3>{item.title}</h3>
								<p>${item.price}</p>
							</div>
							<button
								onClick={() => removeFromCart(item.id)}
								className="bg-red-500 text-white px-4 py-1 rounded"
							>
								Remove
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

// increase quantity if added more times
//change ui

export default Cart;