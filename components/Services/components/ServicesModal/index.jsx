import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Montserrat } from '@next/font/google'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import styles from './style.module.scss'
import InputMaskNumber from '../../../ContactUs/components/InputMaskNumber'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const ServicesModal = ({ modalHandler, isOpen }) => {
	const { register, handleSubmit, control } = useForm()

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<Transition
			appear
			show={isOpen}
			as={Fragment}
		>
			<Dialog
				as='div'
				className={`${styles.modal} ${montserrat.variable} font-sans relative z-20`}
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
					<div className='flex items-center justify-center min-h-full p-4'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className={styles['modal-window']}>
								<button
									type='button'
									onClick={modalHandler}
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
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default ServicesModal
