export default function ProductCard({ data }) {
	const productName = data.title;
	const price = data.price;
	const productImage = data.images[0];

	return (
		<div className=" bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
			<img
				src={productImage}
				alt={productName}
				className="w-full h-64 object-contain bg-blush rounded-2xl"
			/>
			<div className="p-4 gap-1 flex flex-col">
				<h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
				<p className="text-gray-600 mt-1">${price}</p>
				<button className="mt-4 bg-night text-white px-4 py-2 rounded-xl w-full hover:bg-black transition-colors">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
