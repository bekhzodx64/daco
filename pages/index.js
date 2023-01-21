import { AnimatePresence } from 'framer-motion'
import { Montserrat } from '@next/font/google'
import { motion } from 'framer-motion'

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

import { defaultAnimation } from '../helpers/animations'

import MobileMenu from '../components/Mobile/Menu'

import { useSelector } from 'react-redux'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const Home = () => {
	const { menuModal } = useSelector((state) => state.systemSlice)

	return (
		<motion.main
			variants={defaultAnimation}
			initial='initial'
			animate='animate'
			className={`${montserrat.variable} font-sans flex flex-col min-h-screen`}
		>
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

			<AnimatePresence>{menuModal ? <MobileMenu /> : null}</AnimatePresence>
		</motion.main>
	)
}

export default Home
