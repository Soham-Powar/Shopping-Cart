import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PromoBanner from "./PromoBanner";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Stars from "./Stars";

const ProductDetails = () => {
	const { productId } = useParams();
	console.log(productId);

	const [dataObject, setDataObject] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getProduct() {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(`https://dummyjson.com/products/${productId}`);
				if (!response.ok) throw new Error("Failed to fetch product details");
				const data = await response.json();
				setDataObject(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		getProduct();
	}, [productId]);

	if (loading) {
		return (
			<div className="">
				loading
			</div>
		);
	}

	if (error) {
		return <p className="text-center text-red-500 pt-10">Error: {error}</p>;
	}

	return (
		<>
			<PromoBanner />
			<NavBar />
			<main className="flex justify-center">
				<div className="flex px-32 py-20 w-[90%] m-auto gap-10">
					<div className="flex-1/3 bg-blush rounded-2xl">
						<img src={dataObject.images?.[0]} alt={dataObject.title} className="w-full max-w-md mb-4 rounded-xl bg-contain" />
					</div>
					<div className="flex-2/3">
						<h1 className="text-4xl font-bold font-[integralCF] pb-5">{dataObject.title}</h1>
						<Stars rating={dataObject.rating} />
						<p className="text-2xl font-semibold text-night pt-5">${dataObject.price}</p>
						<p className="text-lg text-gray-700 mb-2 pt-2">{dataObject.description}</p>
						<button className="mt-4 bg-night text-white px-4 py-2 rounded-xl hover:bg-gray-900 cursor-pointer transition-colors">
							Add to Cart
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default ProductDetails;