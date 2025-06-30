import HeroSection from "../src/components/HeroSection";

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Hero Image component", () => {
	it("renders hero image div", () => {
		render(<HeroSection />);
		const heroDiv = screen.getByTestId("hero-img");
		expect(heroDiv).toBeInTheDocument();
	})
})