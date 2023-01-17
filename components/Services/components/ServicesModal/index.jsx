import { useEffect } from 'react'
import { Montserrat } from '@next/font/google'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleServices } from '../../../../store/features/system'
import { motion } from 'framer-motion'

import styles from './style.module.scss'
import InputMaskNumber from '../../../ContactUs/components/InputMaskNumber'

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

const ServicesModal = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, control } = useForm()

	const onSubmit = (data) => {
		console.log(data)
	}

	const handleModal = () => {
		dispatch(toggleServices())
	}

	useEffect(() => {
		document.body.classList.add('modal-open')

		return () => {
			document.body.classList.remove('modal-open')
		}
	}, [])

	return (
		<motion.div
			className={`${styles.modal} ${montserrat.variable} font-sans`}
			onClick={handleModal}
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div
				className={styles['modal-window']}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					type='button'
					onClick={handleModal}
					className={styles['modal-close']}
				>
					<Image
						src={'/icons/close.svg'}
						width={20}
						height={20}
						alt='close'
					/>
				</button>

				<h2>Leave an application</h2>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles['modal-form']}
				>
					<input
						placeholder='Your name'
						{...register('name', { required: true })}
						className={styles['modal-form__input']}
					/>

					<InputMaskNumber
						control={control}
						className={styles['modal-form__input']}
						// inputChange={(e) => {
						// 	if (e.target.value[e.target.value.length - 1] !== '_') {
						// 		setSendForm(true)
						// 		console.log(true)
						// 	}
						// }}
					/>

					<textarea
						placeholder='Write a message'
						{...register('message', { required: true })}
						className={styles['modal-form__input']}
						rows={1}
					></textarea>

					<div>
						<p className='mb-4 text-accent'>Choose services</p>

						<div className={styles['modal-form__checkboxes']}>
							<label>
								<input
									type='checkbox'
									value='Design constructions'
									className={styles.checkbox}
									{...register('services')}
								/>
								<p>Design constructions</p>
							</label>
							<label>
								<input
									value='Interior finishing works'
									type='checkbox'
									className={styles.checkbox}
									{...register('services')}
								/>
								<p>Interior finishing works</p>
							</label>
							<label>
								<input
									value='Installation of engineering network'
									type='checkbox'
									name='services option'
									className={styles.checkbox}
									{...register('services')}
								/>
								<p>Installation of engineering network</p>
							</label>
							<label>
								<input
									value='Commissioning of equipment'
									type='checkbox'
									name='services option'
									className={styles.checkbox}
									{...register('services')}
								/>
								<p>Commissioning of equipment</p>
							</label>
							<label>
								<input
									value='Construction works'
									type='checkbox'
									name='services option'
									className={styles.checkbox}
									{...register('services')}
								/>
								<p>Construction works</p>
							</label>
							<label>
								<input
									value='Video surveilliance of during construction'
									type='checkbox'
									name='services option'
									className={styles.checkbox}
									{...register('services')}
								/>
								<p>Video surveilliance of during construction</p>
							</label>
						</div>
					</div>

					<div className='flex justify-center'>
						<button className={styles['modal-form__button']}>
							<span>Send an application</span>
							<div className={styles.icon}>
								<Image
									src={'/icons/chevron-right.svg'}
									width={10}
									height={10}
									alt='chevron'
								/>
							</div>
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	)
}

export default ServicesModal
