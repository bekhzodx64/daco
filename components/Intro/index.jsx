import Image from 'next/image'
import { Montserrat } from '@next/font/google'

import overlay from '../../public/intro/overlay.png'
import sky from '../../public/intro/sky.png'
import building from '../../public/intro/building.png'

import styles from './style.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const Intro = () => {
	return (
		<div className={`${styles.intro} ${montserrat.variable} font-sans`}>
			<Image
				src={overlay}
				draggable={false}
				alt=''
				quality={100}
				priority
				className='absolute top-0 bottom-0 left-0 -z-10 block object-cover w-auto h-full scale-[1.01] pointer-events-none'
			/>

			<Image
				src={sky}
				draggable={false}
				alt=''
				quality={100}
				priority
				className='absolute top-0 bottom-0 right-0 object-cover w-auto h-full pointer-events-none -z-20'
			/>

			<Image
				src={building}
				draggable={false}
				alt=''
				quality={100}
				priority
				className='absolute top-0 bottom-0 right-0 object-cover w-auto h-full pointer-events-none -z-0'
			/>

			<div className={`${styles['intro-content']} container`}>
				<div className='flex flex-col justify-center h-full space-y-10'>
					<h1 className={styles['intro-title']}>
						We always offer perfect
						<p>Construction Services</p>
					</h1>

					<p className={styles['intro-description']}>
						DACO GROUP is one of the fastest growing development companies with
						15 years of experience in the market.
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
						<div className='h-[2px] w-[33px] bg-white/50'></div>
						<div className='text-sm opacity-50'>Follow us</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
