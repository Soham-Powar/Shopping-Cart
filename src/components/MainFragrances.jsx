import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

const MainFragrances = () => {
	const [dataObject, setDataObject] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchFragrances() {
			try {
				const response = await fetch('https://dummyjson.com/products/category/fragrances');
				if (!response.ok) {
					throw new Error("Server error");
				}
				const data = await response.json();
				setDataObject(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchFragrances();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="pb-20 pt-16">
			<h2 className="text-5xl font-[integralCF] pb-12 text-center">FRAGRANCES</h2>
			<div className="flex flex-wrap gap-6 justify-center">
				{dataObject?.products?.map((product) => (
					<ProductCard data={product} />
				))}
			</div>
			<div className="pt-10 flex justify-center">
				<button className="bg-night text-white px-10 py-3 rounded-2xl">
					<Link to="/shop">View All</Link>
				</button>
			</div>
		</div>
	);
};

export default MainFragrances;
