import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
	console.log(data);
	const productName = data.title;
	const price = data.price;
	const productImage = data.images[0];

	return (
		<Link to={`/product/${data.id}`}>
			<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
				<img
					src={productImage}
					alt={productName}
					className="w-full h-64 object-contain bg-blush rounded-t-2xl"
				/>
				<div className="p-4 flex flex-col justify-between flex-1">
					<h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{productName}</h3>
					<p className="text-gray-600 mt-1">${price}</p>
					<button className="mt-4 bg-night text-white px-4 py-2 rounded-xl w-full hover:bg-black transition-colors">
						Add to Cart
					</button>
				</div>
			</div>
		</Link >
	);
}
