import { Montserrat } from '@next/font/google'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import InputMaskNumber from './components/InputMaskNumber'

import fog from '../../public/contact/fog.png'
import building from '../../public/contact/contact-bg.png'

import { botToken, chatId } from '../../helpers/data'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const ContactUs = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		const phone = data.phone
		const name = data.name

		fetch(
			`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=<b>Ismi</b>: ${name}<b> Telefon</b>: ${phone}&parse_mode=html`,
			{
				method: 'post',
			}
		)
	}

	return (
		<div
			className={`${montserrat.variable} font-sans relative`}
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
							Get to know the best aspects of our company dsadsa
						</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col items-center w-full max-w-sm gap-5 lg:w-auto lg:max-w-none lg:flex-row'
					>
						<div className='relative'>
							<input
								{...register('name', { required: true })}
								aria-invalid={errors.name ? 'true' : 'false'}
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

						<InputMaskNumber
							control={control}
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
