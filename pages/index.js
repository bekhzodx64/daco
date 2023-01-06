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
import IntroModal from '../components/Intro/components/IntroModal'
import ServicesModal from '../components/Services/components/ServicesModal'

import { useSelector } from 'react-redux'

const Home = () => {
	const { showModal, videoModal, servicesModal } = useSelector(
		(state) => state.systemSlice
	)

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

			{videoModal ? <IntroModal /> : null}
			{showModal ? <MobileMenu /> : null}
			{servicesModal ? <ServicesModal /> : null}
		</main>
	)
}

export default Home
