import ProductCard from "../src/components/ProductCard";

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";



describe("ProductCard", () => {

	function renderWithRouter(ui) {
		return render(<BrowserRouter>{ui}</BrowserRouter>);
	}


	it("renders product card", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		renderWithRouter(<ProductCard data={data} />);
		const productCard = screen.getByRole("img", { hidden: true });
		expect(productCard).toBeInTheDocument();
	});

	it("displays product name and price", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		renderWithRouter(<ProductCard data={data} />);
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
		renderWithRouter(<ProductCard data={data} />);
		const productImage = screen.getByAltText("Test Product");
		expect(productImage).toHaveAttribute("src", "https://via.placeholder.com/150");
	});

	it("renders 'Add to Cart' button", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		renderWithRouter(<ProductCard data={data} />);
		const addToCartButton = screen.getByRole("button", { name: /Add to Cart/i });
		expect(addToCartButton).toBeInTheDocument();
	});

	it("calls addToCart when button is clicked", () => {
		const data = {
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		const addToCartMock = vi.fn();
		renderWithRouter(<ProductCard data={data} addToCart={addToCartMock} />);
		const addToCartButton = screen.getByRole("button", { name: /Add to Cart/i });
		addToCartButton.click();
		expect(addToCartMock).toHaveBeenCalledWith(data);
	});

	it("navigates to product detail page on image click", () => {
		const data = {
			id: 1,
			title: "Test Product",
			price: 29.99,
			images: ["https://via.placeholder.com/150"],
		}
		renderWithRouter(<ProductCard data={data} />);
		const productImage = screen.getByAltText("Test Product");
		expect(productImage.closest('a')).toHaveAttribute('href', `/product/${data.id}`);
	});
});