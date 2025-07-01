import { useEffect, useState } from "react";

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
		<div>
			<h2 className="text-2xl font-bold mb-4">Fragrances</h2>
			<ul>
				{dataObject?.products?.map((product) => (
					<li key={product.id} className="mb-2">
						<strong>{product.title}</strong> — ${product.price}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MainFragrances;
