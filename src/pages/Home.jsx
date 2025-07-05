import NavBar from "../components/NavBar";
import PromoBanner from "../components/PromoBanner";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

const Home = ({ cart, addToCart }) => {
	return (
		<>
			<PromoBanner />
			<NavBar cart={cart} />
			<MainContainer addToCart={addToCart} />
			<Footer />
		</>
	)
}

export default Home;