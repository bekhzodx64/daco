import Link from 'next/link'
import { createPortal } from 'react-dom'
import { Montserrat } from '@next/font/google'
import Image from 'next/image'

import styles from './style.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const MobileMenu = () => {
	return (
		<>
			{createPortal(
				<div className={`${styles.menu} ${montserrat.variable} font-sans`}>
					<ul className={styles['menu-list']}>
						<li className={styles['menu-list__item']}>
							<Link
								href={'/'}
								className={styles['menu-list__link']}
							>
								About us
							</Link>
						</li>
						<li className={styles['menu-list__item']}>
							<Link
								href={'/'}
								className={styles['menu-list__link']}
							>
								Our service
							</Link>
						</li>
						<li className={styles['menu-list__item']}>
							<Link
								href={'/'}
								className={styles['menu-list__link']}
							>
								Our projects
							</Link>
						</li>
						<li className={styles['menu-list__item']}>
							<Link
								href={'/'}
								className={styles['menu-list__link']}
							>
								Our advantages
							</Link>
						</li>
						<li className={styles['menu-list__item']}>
							<Link
								href={'/'}
								className={styles['menu-list__link']}
							>
								Contacts
							</Link>
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
				</div>,
				document.querySelector('main')
			)}
		</>
	)
}

export default MobileMenu
