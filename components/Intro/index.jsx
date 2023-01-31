import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Fragment, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { Dialog, Transition } from '@headlessui/react'

import SocialLinks from './components/SocialLinks'

import { stagger, fadeInDown, defaultAnimation } from '../../helpers/animations'

import building from '../../public/intro/building.jpg'
import desktop from '../../public/intro/desktop-intro-bg.jpg'
import layer from '../../public/intro/layer.png'

import styles from './style.module.scss'

const Intro = () => {
	const { t } = useTranslation()
	const videoRef = useRef()

	const [isOpen, setIsOpen] = useState(false)
	const [play, setPlay] = useState(true)

	function modalHandler() {
		setIsOpen(!isOpen)
	}

	function playHandler() {
		setPlay(!play)
		videoRef.current.play()
	}

	function pauseHandler() {
		setPlay(!play)
		videoRef.current.pause()
	}

	return (
		<div className={`${styles.intro} font-sans`}>
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

				<motion.div
					variants={stagger}
					initial='initial'
					animate='animate'
					className='container relative flex flex-col justify-center h-full gap-10 pt-16 -mt-20 sm:mt-0 sm:gap-0'
				>
					<div className='mt-auto space-y-7'>
						<motion.h1
							variants={fadeInDown}
							className={styles['intro-title']}
						>
							{t('We always offer perfect')}
							<p>{t('Construction Services')}</p>
						</motion.h1>

						<motion.p
							variants={fadeInDown}
							className={styles['intro-description']}
						>
							{t('see projects')}
						</motion.p>

						<div className={styles['intro-buttons']}>
							<motion.button
								type='button'
								variants={fadeInDown}
								className={`${styles['intro-button__project']} accent-gradient`}
							>
								<p> {t('see projects')}</p>
								<Image
									src={'/icons/chevron-right.svg'}
									width={9}
									height={5}
									priority
									alt='chevron right'
								/>
							</motion.button>
							<motion.button
								variants={fadeInDown}
								type='button'
								onClick={modalHandler}
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
								<p>{t('Introduction')}</p>
							</motion.button>
						</div>
					</div>

					<div className={`${styles['intro-socials']}`}>
						<SocialLinks />

						<motion.div
							variants={defaultAnimation}
							className={styles['intro-socials__divide']}
						></motion.div>
						<motion.div
							variants={defaultAnimation}
							className='text-sm opacity-50'
						>
							{t('follow us')}
						</motion.div>
					</div>

					<Image
						src={layer}
						quality={100}
						priority
						alt='daco'
						fill
						className='object-cover object-top sm:hidden -z-10'
					/>
				</motion.div>
			</div>

			<Transition
				appear
				show={isOpen}
				as={Fragment}
			>
				<Dialog
					as='div'
					className='relative z-20'
					onClose={modalHandler}
				>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/80 backdrop-blur-xl' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex items-center justify-center min-h-full p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='relative w-full max-w-4xl overflow-hidden transition-all transform aspect-video'>
									<video
										ref={videoRef}
										src='/intro/1.mp4'
										onLoadStart={() => setPlay(true)}
										onEnded={() => setPlay(true)}
										controls={play ? false : true}
										onClick={pauseHandler}
										className='object-cover w-full h-full'
									></video>

									{play ? (
										<div
											className='absolute flex items-center justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer bg-black/50 backdrop-blur-xl top-1/2 left-1/2'
											onClick={playHandler}
										>
											<Image
												src={'/icons/play-white.svg'}
												width={20}
												height={20}
												priority
												alt='play'
											/>
										</div>
									) : null}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	)
}

export default Intro
