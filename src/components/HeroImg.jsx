import landingBg from '../assets/landingBg.jpg'

export default function HeroImg() {
	return (
		<div
			data-testid="hero-img"
			className="h-[80vh] bg-contain bg-no-repeat bg-right"
			style={{ backgroundImage: `url(${landingBg})` }}
		>
		</div>
	)
}