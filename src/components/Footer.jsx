import FooterList from "./FooterList"

import { Instagram, Linkedin, Github, Facebook } from "lucide-react"

export default function Footer() {
	return (
		<footer className="bg-blush relative flex py-13 px-50 justify-between">
			<div>
				<h2 className="text-3xl font-[integralCF]">SHOP.EZ</h2>
				<p className="pt-6 text-gray-600">
					Discover curated fashion at Shop.EZ — designed to match your style and enhance your confidence.
				</p>
				<div className="flex gap-3 pt-6">
					<Instagram data-testid="lucide-icon" className="text-gray-600" />
					<Linkedin data-testid="lucide-icon" className="text-gray-600" />
					<Github data-testid="lucide-icon" className="text-gray-600" />
					<Facebook data-testid="lucide-icon" className="text-gray-600" />
				</div>
			</div>
			<div className="flex gap-10  text-[14px]">
				<FooterList heading="COMPANY" list={["About", "Careers", "Contact", "Features"]} />
				<FooterList heading="HELP" list={["Customer Support", "Delivery Details", "Terms and Conditions", "Privacy Policy"]} />
				<FooterList heading="FAQ" list={["Account", "Manage Deliveries", "Orders", "Payments"]} />
				<FooterList heading="RESOURCES" list={["Free Ebooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]} />
			</div>
			<p className="absolute top-[90%] left-1/2 -translate-x-1/2 text-center text-gray-600 text-[12px]">
				SHOP.EZ © 2025, All Rights Reserved
			</p>
		</footer>
	)
}