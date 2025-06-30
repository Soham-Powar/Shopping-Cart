import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "../src/components/NavBar"

describe("NavBar component", () => {
	it("should render 'Home' and 'Shop' navigation links", () => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);

		expect(screen.getByText("Home")).toBeInTheDocument();
		expect(screen.getByText("Shop")).toBeInTheDocument();
	});


})