import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Image from 'next/image'
import { navLinks } from '../../helpers/data'
import { motion } from 'framer-motion'
import LangSwitcher from './components/LangSwitcher'

import { toggleMenu } from '../../store/features/system'

import styles from './style.module.scss'

const Header = () => {
	const dispatch = useDispatch()
	const [toggleIcon, setToggleIcon] = useState(false)
	const [getId, setGetId] = useState(null)

	const menuHandler = () => {
		dispatch(toggleMenu())
		setToggleIcon(!toggleIcon)
	}

	useEffect(() => {
		if (getId) {
			document.getElementById(getId).scrollIntoView()
		}

		return setGetId(null)
	}, [getId])

	return (
		<header className={`${styles.header}`}>
			<div className={`${styles['header-inner']} container`}>
				<button
					type='button'
					onClick={() => setGetId('main')}
				>
					<Image
						src='/logo.png'
						priority
						width={154}
						height={44}
						alt='logo'
					/>
				</button>

				<div className='items-center hidden gap-10 xl:gap-20 lg:flex'>
					<div>
						<nav>
							<ul className='flex items-center gap-3 xl:gap-7'>
								{navLinks.map((link) => (
									<li
										key={link.id}
										className='relative'
									>
										<button
											type='button'
											onClick={() => setGetId(link.url)}
											className={`transition-all group hover:text-accent`}
										>
											{link.name}
											<span
												className={`absolute bottom-0 left-0 min-w-0 h-[1px] bg-accent group-hover:min-w-full transition-all`}
											></span>
										</button>
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
		</header>
	)
}

export default Header
