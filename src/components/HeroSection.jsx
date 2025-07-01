import landingBg from '../assets/landingBg.jpg'
import HeroContent from './HeroContent'

export default function HeroSection() {
	return (
		<section
			data-testid="hero-img"
			className="h-[80vh] bg-contain bg-no-repeat bg-right bg-blush"
			style={{ backgroundImage: `url(${landingBg})` }}
		>
			<HeroContent />
		</section>
	)
}