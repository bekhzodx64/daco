import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './style.module.scss'

const AboutUs = () => {
	const [getId, setGetId] = useState(null)

	useEffect(() => {
		if (getId) {
			document.getElementById(getId).scrollIntoView()

			const timer = setTimeout(() => {
				setGetId(null)
				clearTimeout(timer)
			}, 100)
		}
	}, [getId])

	return (
		<div
			className={`${styles.about} pt-12`}
			id='about'
		>
			<div className='container'>
				<div className={styles['about-decor']}>
					<button
						type='button'
						className={styles['about-decor__icon']}
						onClick={() => setGetId('places')}
					>
						<Image
							src={'/icons/chevron-down.svg'}
							width={9}
							height={5}
							alt='chevron down'
						/>
					</button>
				</div>

				<h2 className='font-semibold mt-3 lg:mt-5 relative opacity-20 text-accent text-6xl lg:text-[182px] text-center lg:-mb-32 whitespace-nowrap overflow-hidden'>
					Who we are?
					<span className='absolute bottom-0 left-0 right-0 z-10 h-2/3 bg-gradient-to-t from-black/95 via-black/80 to-transparent'></span>
				</h2>

				<div className='py-10 lg:flex lg:py-24'>
					<div className='w-full'>
						<div className='pt-[70%] w-full relative'>
							<Image
								src={'/about/sketch.png'}
								fill
								draggable={false}
								alt='about us'
								className='object-cover'
							/>
						</div>
					</div>
					<div className='w-full'>
						<h2 className='text-[32px] lg:text-[40px] font-semibold relative z-0'>
							About us
						</h2>
						<div className='space-y-4 mt-7'>
							<p className='text-sm font-light opacity-60'>
								DACO GROUP is one of the fastest growing development companies
								with 15 years of experience in the market. The company&apos;s
								activity is aimed at creating unique residential complexes,
								distinguished by their innovation, smart approach and high
								quality.
							</p>
							<p className='text-sm font-light opacity-60'>
								DACO GROUP pays special attention to both construction issues
								and work with clients, providing an individual approach and
								thorough advice when choosing an apartment or business property.
								Our main task is not only in high-quality construction and
								development of social infrastructure, but also in timely
								settlement and after-sales service.
							</p>
						</div>

						<button
							type='button'
							className='z-10 bg-black/50 text-sm lg:text-base relative pr-[6px] pt-[6px] pb-[6px] mt-10 flex items-center gap-6 pl-5 rounded-full border border-white/30'
						>
							<span>Leave an application</span>
							<div className='flex items-center justify-center w-12 h-12 rounded-full accent-gradient'>
								<Image
									src={'/icons/chevron-right.svg'}
									width={9}
									height={5}
									alt='chevron right'
								/>
							</div>
						</button>
					</div>
				</div>

				<div className='absolute hidden lg:block right-0 -bottom-[15%]'>
					<div className={styles['about-construction']}>
						<Image
							src={'/about/construction.png'}
							fill
							alt='construction'
							className='object-cover'
							draggable={false}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
