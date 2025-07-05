import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Filters = ({ setCategoryURL }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isOpen, setIsOpen] = useState(true);

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
		<div className="px-5 py-7 border-blush border-2 rounded-2xl w-full md:flex-1/4 h-min max-w-[300px]">
			<div className="flex items-center justify-between pb-4">
				<h3 className="text-xl md:text-2xl font-bold">Categories</h3>
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle Category List"
					className="text-night cursor-pointer"
				>
					{isOpen ? <ChevronUp /> : <ChevronDown />}
				</button>
			</div>

			{loading && <p className="text-gray-500">Loading categories...</p>}
			{error && <p className="text-red-500">Error loading categories: {error}</p>}

			{!loading && !error && isOpen && (
				<ul className="flex flex-col gap-1">
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
