function getDeliveryCharge(total) {
	if (total > 100 || total <= 0) {
		return 0;
	}
	return 10;
}

export default function PriceDetails({ cart }) {

	const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const deliveryFee = getDeliveryCharge(subtotal);

	const discount = cart.reduce((acc, item) => {
		const itemDiscount = (item.price * item.discountPercentage / 100) * item.quantity;
		return acc + itemDiscount;
	}, 0);

	const total = +(subtotal - discount + deliveryFee).toFixed(2);

	return (
		<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
			<h2 className="text-xl font-bold mb-4">Order Summary</h2>

			<div className="flex justify-between pt-5">
				<span className="text-gray-800">Subtotal</span>
				<span className="font-bold">${subtotal.toFixed(2)}</span>
			</div>

			<div className="flex justify-between mb-2 pt-2">
				<span className="text-gray-800">Discount</span>
				<span className="text-red-500 font-bold">-${discount.toFixed(2)}</span>
			</div>

			<div className="flex justify-between mb-4 pt-2 pb-3">
				<span className="text-gray-800">Delivery Fee</span>
				<span className="font-bold">${deliveryFee.toFixed(2)}</span>
			</div>

			<hr className="my-2" />

			<div className="flex justify-between font-semibold text-lg pt-3">
				<span>Total</span>
				<span className="font-bold">${total.toFixed(2)}</span>
			</div>
		</div>
	);
}
