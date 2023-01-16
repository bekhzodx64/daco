import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import useTranslation from 'next-translate/useTranslation'
import { useDispatch } from 'react-redux'

import { toggleVideo } from '../../store/features/system'

import SocialLinks from './components/SocialLinks'

import desktop from '../../public/intro/desktop-intro-bg.jpg'
import building from '../../public/intro/building.jpg'
import layer from '../../public/intro/layer.png'

import styles from './style.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const Intro = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const playHandler = () => {
		dispatch(toggleVideo())
	}

	return (
		<div className={`${styles.intro} ${montserrat.variable} font-sans`}>
			<Image
				src={desktop}
				quality={100}
				priority
				alt='daco'
				fill
				className='object-cover min-h-[570px] hidden sm:block'
			/>

			<Image
				src={building}
				quality={100}
				priority
				alt='daco'
				fill
				className='sm:hidden object-cover object-top pt-[76px]'
			/>

			<div className={`${styles['intro-content']} `}>
				<div className='sm:hidden min-h-[90vh]'></div>

				<div className='container relative flex flex-col justify-center h-full gap-10 pt-16 -mt-20 sm:mt-0 sm:gap-0'>
					<div className='mt-auto space-y-7'>
						<h1 className={styles['intro-title']}>
							{/* {t('home:intro_title')} */}
							We always offer perfect
							<p>Construction Services</p>
						</h1>

						<p className={styles['intro-description']}>
							{t('home:intro_description')}
						</p>

						<div className={styles['intro-buttons']}>
							<a
								href='#project'
								type='button'
								className={`${styles['intro-button__project']} accent-gradient`}
							>
								<p> {t('home:intro_main_button')}</p>
								<Image
									src={'/icons/chevron-right.svg'}
									width={9}
									height={5}
									priority
									alt='chevron right'
								/>
							</a>
							<button
								type='button'
								onClick={playHandler}
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

					<div className={`${styles['intro-socials']}`}>
						<SocialLinks />

						<div className={styles['intro-socials__divide']}></div>
						<div className='text-sm opacity-50'>Follow us</div>
					</div>

					<Image
						src={layer}
						quality={100}
						priority
						alt='daco'
						fill
						className='object-cover object-top sm:hidden -z-10'
					/>
				</div>
			</div>
		</div>
	)
}

export default Intro
