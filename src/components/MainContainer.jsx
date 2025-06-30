import landingBg from '../assets/landingBg.jpg'

export default function MainContainer() {
	return (
		<main>
			<div
				className="h-[80vh] bg-contain bg-no-repeat bg-right"
				style={{ backgroundImage: `url(${landingBg})` }}
			>
			</div>
		</main>
	)
}