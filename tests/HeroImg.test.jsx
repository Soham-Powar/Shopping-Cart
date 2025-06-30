import HeroImg from "../src/components/HeroImg";

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Hero Image component", () => {
	it("renders hero image div", () => {
		render(<HeroImg />);
		const heroDiv = screen.getByTestId("hero-img");
		expect(heroDiv).toBeInTheDocument();
	})
})