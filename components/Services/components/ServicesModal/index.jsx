import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Montserrat } from '@next/font/google'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import styles from './style.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const ServicesModal = ({ showForm, setShowForm }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => console.log(data)

	useEffect(() => {
		document.body.classList.add('modal-open')

		return () => {
			document.body.classList.remove('modal-open')
		}
	}, [showForm])

	return (
		<>
			{createPortal(
				<div
					className={`${styles.modal} ${montserrat.variable} font-sans`}
					onClick={() => setShowForm((state) => !state)}
				>
					<div
						className={styles['modal-window']}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							type='button'
							onClick={() => setShowForm((state) => !state)}
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
								{...register('name', {
									required: true,
									pattern: /^[A-Za-z]+$/i,
								})}
								className={styles['modal-form__input']}
							/>

							<input
								placeholder='Phone number'
								{...register('phone', { required: true })}
								className={styles['modal-form__input']}
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
											className={styles.checkbox}
										/>
										<span></span>

										<p>Design constructions</p>
									</label>
									<label>
										<input
											type='checkbox'
											className={styles.checkbox}
										/>
										<span></span>
										<p>Interior finishing works</p>
									</label>
									<label>
										<input
											type='checkbox'
											className={styles.checkbox}
										/>
										<span></span>
										<p>Installation of engineering network</p>
									</label>
									<label>
										<input
											type='checkbox'
											className={styles.checkbox}
										/>
										<span></span>
										<p>Commissioning of equipment</p>
									</label>
									<label>
										<input
											type='checkbox'
											className={styles.checkbox}
										/>
										<span></span>
										<p>Construction works</p>
									</label>
									<label>
										<input
											type='checkbox'
											className={styles.checkbox}
										/>
										<span></span>
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
				</div>,
				document.body
			)}
		</>
	)
}

export default ServicesModal
