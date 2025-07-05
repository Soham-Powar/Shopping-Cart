import HeroSection from "./HeroSection"
import MainFragrances from "./MainFragrances"

export default function MainContainer({ addToCart }) {
	return (
		<main>
			<section>
				<HeroSection />
			</section>
			<section>
				<MainFragrances addToCart={addToCart} />
			</section>
		</main>
	)
}