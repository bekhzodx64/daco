import { Montserrat } from '@next/font/google'
import Image from 'next/image'
import { toggleModal } from '../../../store/features/system'
import { useDispatch } from 'react-redux'

import styles from './style.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const MobileMenu = () => {
	const dispatch = useDispatch()

	const closeHandler = () => {
		dispatch(toggleModal())
	}

	return (
		<div className={`${styles.menu} ${montserrat.variable} font-sans`}>
			<header className='flex items-center justify-between px-1 py-4 sm:container'>
				<div>
					<Image
						src='/logo.png'
						priority
						width={154}
						height={44}
						alt='logo'
					/>
				</div>
				<button
					type='button'
					onClick={closeHandler}
					className='p-1 rounded-lg bg-darkAccent lg:hidden w-[38px] h-[38px]'
				>
					<Image
						src={'/icons/hamburger-close.svg'}
						width={30}
						height={30}
						priority
						alt='hamburger icon'
					/>
				</button>
			</header>

			<ul className={styles['menu-list']}>
				<li className={styles['menu-list__item']}>
					<a
						href={'#about'}
						onClick={closeHandler}
						className={styles['menu-list__link']}
					>
						About us
					</a>
				</li>

				<li className={styles['menu-list__item']}>
					<a
						href={'#services'}
						onClick={closeHandler}
						className={styles['menu-list__link']}
					>
						Our service
					</a>
				</li>
				<li className={styles['menu-list__item']}>
					<a
						href={'#project'}
						onClick={closeHandler}
						className={styles['menu-list__link']}
					>
						Our projects
					</a>
				</li>
				<li className={styles['menu-list__item']}>
					<a
						href={'#advantages'}
						onClick={closeHandler}
						className={styles['menu-list__link']}
					>
						Our advantages
					</a>
				</li>
				<li className={styles['menu-list__item']}>
					<a
						href={'#contacts'}
						onClick={closeHandler}
						className={styles['menu-list__link']}
					>
						Contacts
					</a>
				</li>
			</ul>

			<ul className={styles['menu-langs']}>
				<li className={styles['menu-langs__item']}>
					<Image
						src={'/flags/1.jpg'}
						width={22}
						height={13}
						alt='flags'
					/>
					<p>ENG</p>
				</li>
				<li className={styles['menu-langs__item']}>
					<Image
						src={'/flags/2.jpg'}
						width={22}
						height={13}
						alt='flags'
					/>
					<p>UZB</p>
				</li>
				<li className={styles['menu-langs__item']}>
					<Image
						src={'/flags/3.jpg'}
						width={22}
						height={13}
						alt='flags'
					/>
					<p>RUS</p>
				</li>
			</ul>

			<div className={styles['menu-phone']}>
				<p className={styles['menu-phone__title']}>Phone number:</p>

				<a
					href='tel:+998881605555'
					className={styles['menu-phone__link']}
				>
					<Image
						src={'/icons/phone.svg'}
						width={18}
						height={18}
						alt='phone'
					/>
					<span>+998 88 160 55 55</span>
				</a>
			</div>

			<ul className={styles['menu-socials']}>
				<li>
					<a href='#'>
						<Image
							src={'/icons/twitter.svg'}
							width={32}
							height={32}
							alt='twitter'
						/>
					</a>
				</li>
				<li>
					<a href='#'>
						<Image
							src={'/icons/facebook.svg'}
							width={32}
							height={32}
							alt='facebook'
						/>
					</a>
				</li>
				<li>
					<a href='#'>
						<Image
							src={'/icons/instagram.svg'}
							width={32}
							height={32}
							alt='instagram'
						/>
					</a>
				</li>
			</ul>

			<span className={styles['menu-divide']}></span>
		</div>
	)
}

export default MobileMenu
