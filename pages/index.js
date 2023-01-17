import { AnimatePresence } from 'framer-motion'

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
import Places from '../components/Places'

import MobileMenu from '../components/Mobile/Menu'
import IntroModal from '../components/Intro/components/IntroModal'
import ServicesModal from '../components/Services/components/ServicesModal'

import { useSelector } from 'react-redux'
import ProjectModal from '../components/Projects/components/ProjectModal'

const Home = () => {
	const { menuModal, videoModal, servicesModal, projectModal } = useSelector(
		(state) => state.systemSlice
	)

	return (
		<main className='flex flex-col min-h-screen'>
			<AnimatePresence>{menuModal ? null : <Header />}</AnimatePresence>
			<Intro />
			<AboutUs />
			<Carousel />
			<Services />
			<Projects />
			<Infrastructures />
			<Live />
			<Places />
			<Advantages />
			{/* <Map /> */}
			<ContactUs />
			<Footer />

			<AnimatePresence>{videoModal ? <IntroModal /> : null}</AnimatePresence>
			<AnimatePresence>{menuModal ? <MobileMenu /> : null}</AnimatePresence>
			<AnimatePresence>
				{servicesModal ? <ServicesModal /> : null}
			</AnimatePresence>
			<AnimatePresence>
				{projectModal ? <ProjectModal /> : null}
			</AnimatePresence>
		</main>
	)
}

export default Home
