import { useEffect, useState } from "react";

const Filters = ({ setCategoryURL }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getCategories() {
			try {
				const response = await fetch('https://dummyjson.com/products/categories');
				if (!response.ok) throw new Error("Failed to fetch categories");
				const data = await response.json();
				setCategories(data);
			} catch (error) {
				console.error(error);
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		getCategories();
	}, []);

	return (
		<div className="px-5 py-7 border-blush border-2 rounded-2xl flex-1/4 h-min max-w-[300px]">
			<h3 className="text-2xl font-bold pb-5">Categories</h3>

			{loading && <p className="text-gray-500">Loading categories...</p>}
			{error && <p className="text-red-500">Error loading categories: {error}</p>}

			{!loading && !error && (
				<ul className="flex flex-col gap-0.5">
					<li
						key={"all"}
						onClick={() => setCategoryURL("all")}
						className="cursor-pointer hover:underline capitalize"
					>
						All
					</li>
					{categories.map((category) => (
						<li
							key={category.slug}
							onClick={() => setCategoryURL(category.url)}
							className="cursor-pointer hover:underline capitalize"
						>
							{category.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Filters;
