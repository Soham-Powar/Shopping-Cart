import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "../src/components/NavBar"

describe("NavBar component", () => {
	it("should render navigation links", () => {
		render(
			<BrowserRouter>
				<NavBar cart={[]} />
			</BrowserRouter>
		);

		expect(screen.getByText("Home")).toBeInTheDocument();
		expect(screen.getByText("Shop")).toBeInTheDocument();
		expect(screen.getByText(/new arrivals/i)).toBeInTheDocument();
		expect(screen.getByText("Brands")).toBeInTheDocument();
		expect(screen.getByText("SHOP.EZ")).toBeInTheDocument();
	});

	it("should display number of items in cart", () => {
		render(
			<BrowserRouter>
				<NavBar cart={[3, 4]} />
			</BrowserRouter>
		);

		const cartItems = screen.getByText("2");
		expect(cartItems).toBeInTheDocument();
	});
	it("should have a search input", () => {
		render(
			<BrowserRouter>
				<NavBar cart={[]} />
			</BrowserRouter>
		);

		const searchInput = screen.getByPlaceholderText("Search for products");
		expect(searchInput).toBeInTheDocument();
	});
})