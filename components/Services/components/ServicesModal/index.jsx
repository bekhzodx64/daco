import { Dialog, Transition } from '@headlessui/react'
import { Montserrat } from '@next/font/google'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { services } from '../../../../helpers/data'
import styles from './style.module.scss'

import { botToken, chatId } from '../../../../helpers/data'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const messages = [
	{
		code: 'ru',
		message: 'Заявка успешно отправлено!',
	},
	{
		code: 'uz',
		message: 'Xabar muvaffaqiyatli yuborildi!',
	},
	{
		code: 'en',
		message: 'Application successfully sent!',
	},
]

const ServicesModal = ({ modalHandler, isOpen }) => {
	const { locale } = useRouter()
	const [value, setValue] = useState('')

	const { register, handleSubmit, reset } = useForm({
		name: '',
		phone: '',
		message: '',
		services: [],
	})

	const currentMessage = messages.find((item) => item.code === locale)

	const onSubmit = (data) => {
		const phone = data.phone
		const name = data.name
		const message = data.message
		const services = data.services ? data.services.join() : '-'

		fetch(
			`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=<b>Ismi</b>: ${name}<b> Telefon</b>: ${phone}<b> Xabar</b>: ${message}<b> Servis</b>: ${services}&parse_mode=html`,
			{
				method: 'post',
			}
		)

		toast.success(currentMessage.message, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: 'light',
		})

		setValue('')
		reset()
		modalHandler()
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

									<InputMask
										{...register('phone', { required: true })}
										mask='+\9\98 (99) 999 99 99'
										placeholder='Phone number'
										type='tel'
										value={value}
										onChange={(e) => {
											setValue(e.target.value)
										}}
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
											{services.map((service, index) => (
												<label key={index}>
													<input
														type='checkbox'
														value={service.title}
														className={styles.checkbox}
														{...register('services')}
														onChange={(e) => console.log(e.target.value)}
													/>
													<p>{service.title}</p>
												</label>
											))}
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
