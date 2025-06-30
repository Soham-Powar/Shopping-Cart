import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import SearchBar from "../src/components/SearchBar";

describe("SearchBar component", () => {
	it("should render the search input and icon", () => {
		render(<SearchBar />);
		expect(screen.getByPlaceholderText("Search for products")).toBeInTheDocument();
		expect(screen.getByTestId("search-icon")).toBeInTheDocument();
	});
})