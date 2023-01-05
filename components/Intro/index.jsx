import Image from 'next/image'
import { Montserrat } from '@next/font/google'

import desktop from '../../public/intro/desktop-intro-bg.jpg'

import styles from './style.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const Intro = () => {
	return (
		<div className={`${styles.intro} ${montserrat.variable} font-sans`}>
			<Image
				src={desktop}
				quality={100}
				priority
				alt='daco'
				fill
				className='object-cover min-h-[570px]'
			/>

			<div className={`${styles['intro-content']} container`}>
				<div className='flex flex-col justify-center h-full'>
					<div className='space-y-7 mt-auto'>
						<h1 className={styles['intro-title']}>
							We always offer perfect
							<p>Construction Services</p>
						</h1>

						<p className={styles['intro-description']}>
							DACO GROUP is one of the fastest growing development companies
							with 15 years of experience in the market.
						</p>

						<div className={styles['intro-buttons']}>
							<button
								type='button'
								className={`${styles['intro-button__project']} accent-gradient`}
							>
								<p>See projects</p>
								<Image
									src={'/icons/chevron-right.svg'}
									width={9}
									height={5}
									priority
									alt='chevron right'
								/>
							</button>
							<button
								type='button'
								className={styles['intro-button__play']}
							>
								<div className={styles['intro-button__play-icon']}>
									<Image
										src={'/icons/play.svg'}
										width={20}
										height={20}
										priority
										alt='play'
									/>
								</div>
								<p>Introduction</p>
							</button>
						</div>
					</div>

					<div className={styles['intro-socials']}>
						<div>
							<ul className='flex items-center gap-5'>
								<li>
									<a href='#'>
										<Image
											src={'/icons/twitter.svg'}
											width={24}
											height={24}
											priority
											alt='twitter'
										/>
									</a>
								</li>
								<li>
									<a href='#'>
										<Image
											src={'/icons/facebook.svg'}
											width={24}
											height={24}
											priority
											alt='facebook'
										/>
									</a>
								</li>
								<li>
									<a href='#'>
										<Image
											src={'/icons/instagram.svg'}
											width={24}
											height={24}
											priority
											alt='instagram'
										/>
									</a>
								</li>
							</ul>
						</div>
						<div className={styles['intro-socials__divide']}></div>
						<div className='text-sm opacity-50'>Follow us</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
