import AboutUs from '../components/AboutUs'
import Advantages from '../components/Advantages'
import Carousel from '../components/Carousel'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Infrastructures from '../components/Infrastructures'
import Intro from '../components/Intro'
import Map from '../components/Map'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Live from '../components/Live'
import MobileMenu from '../components/Mobile/Menu'

import dynamic from 'next/dynamic'

const MobileMenuNoSSR = dynamic(() => import('../components/Mobile/Menu'), {
	ssr: false,
})

const Home = () => {
	return (
		<main className='flex flex-col min-h-screen'>
			<Header />
			<MobileMenuNoSSR />
			{/* <Intro /> */}
			{/* <AboutUs /> */}
			{/* <Carousel /> */}
			{/* <Services /> */}
			{/* <Projects /> */}
			{/* <Infrastructures /> */}
			{/* <Live /> */}
			{/* <Advantages /> */}
			{/* <Map /> */}
			{/* <ContactUs /> */}
			{/* <Footer /> */}
		</main>
	)
}

export default Home
