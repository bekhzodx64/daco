import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Montserrat } from '@next/font/google'
import Image from 'next/image'
import { navLinks } from '../../helpers/data'
import { motion } from 'framer-motion'
import LangSwitcher from './components/LangSwitcher'

import { toggleMenu } from '../../store/features/system'

import styles from './style.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
}

const Header = () => {
	const dispatch = useDispatch()
	const [toggleIcon, setToggleIcon] = useState(false)
	const [activeLink, setActiveLink] = useState({
		id: 0,
	})

	const menuHandler = () => {
		dispatch(toggleMenu())
		setToggleIcon(!toggleIcon)
	}

	return (
		<motion.header
			className={`${montserrat.variable} ${styles.header} font-sans`}
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div className={`${styles['header-inner']} container`}>
				<a
					href='#main'
					onClick={() => setActiveLink({ id: 0 })}
				>
					<Image
						src='/logo.png'
						priority
						width={154}
						height={44}
						alt='logo'
					/>
				</a>

				<div className='items-center hidden gap-10 xl:gap-20 lg:flex'>
					<div>
						<nav>
							<ul className='flex items-center gap-3 xl:gap-7'>
								{navLinks.map((link) => (
									<li
										key={link.id}
										className='relative'
									>
										<a
											href={`#${link.url}`}
											onClick={() => setActiveLink(link)}
											className={`${
												activeLink.id === link?.id ? 'text-accent' : ''
											} transition-all group hover:text-accent`}
										>
											{link.name}
											<span
												className={` ${
													activeLink.id === link?.id ? 'min-w-full' : ''
												} absolute bottom-0 left-0 min-w-0 h-[1px] bg-accent group-hover:min-w-full transition-all`}
											></span>
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<div className='flex items-center gap-6 xl:gap-12'>
						<div>
							<a
								href='tel:+998881605555'
								className='flex items-center gap-1'
							>
								<Image
									src={'/icons/phone.svg'}
									width={17}
									height={17}
									alt='phone'
									priority
								/>
								<span>+998 88 160 55 55</span>
							</a>
						</div>

						<LangSwitcher />

						{/* <div className='flex items-center px-5 py-4 font-medium uppercase border border-white/30 rounded-full gap-[10px] cursor-pointer relative group'>
							<Image
								src={'/flags/1.jpg'}
								width={22}
								height={14}
								alt='flag'
								priority
							/>
							<div className='flex items-center gap-1'>
								<span>eng</span>
								<Image
									src={'/icons/chevron-down.svg'}
									width={8}
									height={4}
									priority
									alt='chevron down'
								/>
							</div>

							<div className='absolute left-0 w-full pt-2 overflow-hidden transition-all duration-300 origin-top scale-y-0 opacity-0 cursor-default top-full group-hover:scale-y-100 group-hover:opacity-100'>
								<ul className='flex flex-col py-2 overflow-hidden border rounded-xl border-white/30 bg-bgBlack'>
									<li className='flex items-center gap-2 px-5 py-2 cursor-pointer hover:bg-darkAccent'>
										<Image
											src={'/flags/1.jpg'}
											width={22}
											height={14}
											alt='flag'
											priority
										/>
										<span>ru</span>
									</li>
									<li className='flex items-center gap-2 px-5 py-2 cursor-pointer hover:bg-darkAccent'>
										<Image
											src={'/flags/1.jpg'}
											width={22}
											height={14}
											alt='flag'
											priority
										/>
										<span>uz</span>
									</li>
									<li className='flex items-center gap-2 px-5 py-2 cursor-pointer hover:bg-darkAccent'>
										<Image
											src={'/flags/1.jpg'}
											width={22}
											height={14}
											alt='flag'
											priority
										/>
										<span>kr</span>
									</li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>

				<button
					type='button'
					onClick={menuHandler}
					className='p-1 rounded-lg bg-darkAccent lg:hidden'
				>
					<Image
						src={'/icons/hamburger-icon.svg'}
						width={30}
						height={30}
						priority
						alt='hamburger icon'
					/>
				</button>
			</div>
		</motion.header>
	)
}

export default Header
