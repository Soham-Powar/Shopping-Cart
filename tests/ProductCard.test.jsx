import ProductCard from "../src/components/ProductCard";

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";


describe("ProductCard", () => {

	it("renders product card", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		render(<ProductCard data={data} />);
		const productCard = screen.getByRole("img", { hidden: true });
		expect(productCard).toBeInTheDocument();
	});

	it("displays product name and price", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		render(<ProductCard data={data} />);
		const productName = screen.getByText("Test Product");
		const productPrice = screen.getByText("$29.99");
		expect(productName).toBeInTheDocument();
		expect(productPrice).toBeInTheDocument();
	});

	it("renders product image", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		render(<ProductCard data={data} />);
		const productImage = screen.getByAltText("Test Product");
		expect(productImage).toHaveAttribute("src", "https://via.placeholder.com/150");
	});

	it("renders 'Add to Cart' button", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		render(<ProductCard data={data} />);
		const addToCartButton = screen.getByRole("button", { name: /Add to Cart/i });
		expect(addToCartButton).toBeInTheDocument();
	});
});