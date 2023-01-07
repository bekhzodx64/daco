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
import ProjectModal from '../components/Projects/components/ProjectModal'

const Home = () => {
	const { menuModal, videoModal, servicesModal, projectModal } = useSelector(
		state => state.systemSlice
	)

	return (
		<main className='flex flex-col min-h-screen'>
			{menuModal ? null : <Header />}
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
			{menuModal ? <MobileMenu /> : null}
			{servicesModal ? <ServicesModal /> : null}
			{projectModal ? <ProjectModal /> : null}
		</main>
	)
}

export default Home
