import AboutUs from '../components/AboutUs'
import Advantages from '../components/Advantages'
import Carousel from '../components/Carousel'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Infrastructures from '../components/Infrastructures'
import Intro from '../components/Intro'
// import Map from '../components/Map'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Live from '../components/Live'
import MobileMenu from '../components/Mobile/Menu'

import { useSelector } from 'react-redux'

const Home = () => {
	const { showModal } = useSelector((state) => state.systemSlice)

	return (
		<main className='flex flex-col min-h-screen'>
			{showModal ? null : <Header />}
			<Intro />
			<AboutUs />
			<Carousel />
			<Services />
			<Projects />
			<Infrastructures />
			<Live />
			<Advantages />
			{/* <Map /> */}
			<ContactUs />
			<Footer />

			{showModal ? <MobileMenu /> : null}
		</main>
	)
}

export default Home
