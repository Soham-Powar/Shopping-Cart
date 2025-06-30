import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "../src/components/NavBar"

describe("NavBar component", () => {
	it("should render navigation links", () => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);

		expect(screen.getByText("Home")).toBeInTheDocument();
		expect(screen.getByText("Shop")).toBeInTheDocument();
		expect(screen.getByText(/new arrivals/i)).toBeInTheDocument();
		expect(screen.getByText("Brands")).toBeInTheDocument();
		expect(screen.getByText("SHOP.EZ")).toBeInTheDocument();
	});


})