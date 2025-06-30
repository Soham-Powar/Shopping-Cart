import { Search } from "lucide-react"

export default function SearchBar() {
	return (
		<div className="flex items-center gap-1">
			<Search data-testid="search-icon" />
			<input className="bg-blush p-2 rounded-xl w-[300px]" placeholder="Search for products"></input>
		</div>
	)
}