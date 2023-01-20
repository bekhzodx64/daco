import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useState } from 'react'
import InputMask from 'react-input-mask'

import building from '../../public/contact/contact-bg.png'
import fog from '../../public/contact/fog.png'

import { botToken, chatId } from '../../helpers/data'

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

const ContactUs = () => {
	const { locale } = useRouter()
	const [value, setValue] = useState('')
	const { register, handleSubmit, reset } = useForm({
		name: '',
		phone: '',
	})

	const currentMessage = messages.find((item) => item.code === locale)

	const sendForm = (data) => {
		const phone = data.phone
		const name = data.name

		fetch(
			`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=<b>Ismi</b>: ${name}<b> Telefon</b>: ${phone}&parse_mode=html`,
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
	}

	return (
		<div
			className={`relative`}
			id='contacts'
		>
			<div className='container'>
				<div className='flex overflow-hidden'>
					<Image
						src={building}
						alt='contact us'
						quality={100}
						draggable={false}
						className='ml-auto mr-[5%] relative -z-30'
					/>
				</div>

				<div className='flex flex-col items-center justify-between gap-6 py-6 lg:flex-row px-14 contact-bg'>
					<div className='max-w-sm'>
						<h2 className='font-semibold text-[40px]'>Contact us</h2>
						<p className='text-[15px] opacity-70'>
							Get to know the best aspects of our company
						</p>
					</div>
					<form
						onSubmit={handleSubmit((data) => {
							try {
								sendForm(data)
							} catch (e) {
								console.log(e)
							}
						})}
						className='flex flex-col items-center w-full max-w-sm gap-5 lg:w-auto lg:max-w-none lg:flex-row'
					>
						<div className='relative'>
							<input
								{...register('name', { required: true })}
								// aria-invalid={errors.name ? 'true' : 'false'}
								type='text'
								className='w-full px-5 py-4 text-sm font-medium outline-none lg:w-auto rounded-xl bg-accent/50 placeholder:text-white placeholder:opacity-40'
								placeholder='Name'
							/>

							{/* {errors.name?.type === 'required' && (
								<p
									role='alert'
									className='absolute top-0 text-sm font-medium text-red-600 -translate-y-full'
								>
									First name is required*
								</p>
							)} */}
						</div>

						<InputMask
							{...register('phone', { required: true })}
							mask='+\9\98 (99) 999 99 99'
							placeholder='Phone number'
							type='tel'
							value={value}
							onChange={(e) => {
								setValue(e.target.value)
							}}
							className='w-full lg:w-auto px-5 py-4 outline-none rounded-xl bg-accent/50 placeholder:text-white placeholder:opacity-40 font-medium text-[15px]'
						/>

						<button className='flex items-center py-1 pr-1 pl-6 border gap-[14px] rounded-full'>
							<span>Send info</span>
							<div className='rounded-full button-icon-bg w-[42px] h-[42px] overflow-hidden flex items-center justify-center'>
								<Image
									src={'/icons/chevron-right.svg'}
									width={10}
									height={10}
									alt='chevron'
								/>
							</div>
						</button>
					</form>
				</div>
			</div>

			<div className='absolute bottom-0 left-0 right-0 translate-y-1/3 -z-10'>
				<Image
					src={fog}
					alt='fog'
					quality={100}
					className='object-cover w-full h-full'
					draggable={false}
				/>
			</div>
		</div>
	)
}

export default ContactUs
