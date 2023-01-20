import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useForm } from 'react-hook-form'
import { Pagination, Navigation } from 'swiper'
import { useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import Image from 'next/image'
import { toast } from 'react-toastify'

import { projects } from '../../helpers/data'
import Plans from './components/Plans'

import styles from './style.module.scss'

import { botToken, chatId } from '../../helpers/data'

const Places = () => {
	const [indexPlan, setIndexPlan] = useState([])
	const [value, setValue] = useState('')

	const { register, handleSubmit, reset } = useForm({
		name: '',
		phone: '',
		project: '',
	})

	const { currentPlan } = useSelector((state) => state.systemSlice)

	const sendForm = (data) => {
		const phone = data.phone
		const name = data.name
		const project = data.project

		fetch(
			`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=<b>Ismi</b>: ${name}<b> Telefon</b>: ${phone}<b> Proyekt</b>: ${project}&parse_mode=html`,
			{
				method: 'post',
			}
		)

		toast.success('test', {
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

	const togglePlans = (items) => {
		setIndexPlan(items)
	}

	return (
		<div
			className={`${styles.places} container`}
			id='places'
		>
			<p className='font-semibold relative opacity-20 text-accent text-[80px] lg:text-[200px] lg:-mb-40 -z-10 whitespace-nowrap overflow-hidden'>
				Our available places
				<span className='absolute bottom-0 left-0 right-0 z-10 h-2/3 bg-gradient-to-t from-black/95 via-black/80 to-transparent'></span>
			</p>

			<h2 className='text-center section-title'>Our available places</h2>

			<div>
				<h2 className='text-center'>1. Choose project</h2>

				<Swiper
					modules={[Pagination, Navigation]}
					pagination={{
						el: '.custom-places-pagination',
						type: 'custom',
						renderCustom: function (swiper, current, total) {
							return `<div><span style="font-size:40px" className='text-[40px]'>${current}</span> / <span>${total}</span></div>`
						},
					}}
					navigation={{
						prevEl: '.places-prev',
						nextEl: '.places-next',
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1360: {
							slidesPerView: 3,
						},
					}}
					loop={true}
					slidesPerView={1}
					centeredSlides={true}
					spaceBetween={50}
					className='relative mt-10'
				>
					{projects?.map((project, index) => {
						return (
							<SwiperSlide key={index}>
								{({ isActive }) => {
									isActive ? togglePlans(project.plans) : null

									return (
										<div
											className={`${
												isActive ? 'opacity-100' : 'opacity-50'
											} w-full h-full space-y-4`}
										>
											<div
												className={` ${
													isActive ? 'bg-accent/20' : ''
												}  rounded-md  backdrop-blur-xl p-6`}
											>
												<div className='relative pt-[80%]'>
													<Image
														src={project.image}
														fill
														alt=''
														quality={100}
														draggable={false}
														className='object-cover'
													/>
												</div>
											</div>
											{isActive ? (
												<h2 className='text-lg line-clamp-2'>
													{project.title}
												</h2>
											) : null}
										</div>
									)
								}}
							</SwiperSlide>
						)
					})}
				</Swiper>

				<div className='container flex items-center justify-between gap-8 py-4'>
					<div className='w-20 custom-places-pagination'></div>
					<div className='h-[1px] w-full bg-gradient-to-tl from-transparent via-white/40 to-transparent rounded-full flex-1'></div>
					<div className='flex gap-3 custom-places-navigation'>
						<button
							type='button'
							className='flex items-center justify-center w-12 h-12 border rounded-full places-prev'
						>
							<Image
								src={'/icons/chevron-left.svg'}
								width={9}
								height={5}
								alt='places prev'
							/>
						</button>
						<button
							type='button'
							className='flex items-center justify-center w-12 h-12 border rounded-full places-next'
						>
							<Image
								src={'/icons/chevron-right.svg'}
								width={9}
								height={5}
								alt='places next'
							/>
						</button>
					</div>
				</div>
			</div>

			<div className={styles['places-section']}>
				<h2 className='text-center'>2. Choose available places</h2>

				<div className={styles['places-plans']}>
					{indexPlan?.map((item, index) => {
						return (
							<Plans
								key={index}
								plan={item}
							/>
						)
					})}
				</div>
			</div>

			<div>
				<form
					onSubmit={handleSubmit((data) => {
						try {
							sendForm(data)
						} catch (e) {
							console.log(e)
						}
					})}
					className={styles['places-footer']}
				>
					<div className={styles['places-section']}>
						<h2 className='mb-10'>3. You choosed</h2>

						<div
							className={`${styles['places-footer__layout']} p-10 space-y-8`}
						>
							{currentPlan === null ? (
								'No data'
							) : (
								<>
									<div className='flex flex-col gap-2'>
										<h3 className={styles['places-footer__layout-title']}>
											Project name:
										</h3>
										<p className={styles['places-footer__layout-description']}>
											{currentPlan.title}
										</p>

										<input
											{...register('project', { required: true })}
											value={currentPlan.title}
											type='text'
											className='hidden'
										/>
									</div>

									<div className='space-y-3'>
										<h3 className={styles['places-footer__layout-title']}>
											Plan information:
										</h3>

										<div className='flex flex-col justify-between space-y-3 sm:flex-row sm:space-y-0'>
											<div className='sm:w-1/3'>
												<div className={styles['places-footer__layout-image']}>
													<Image
														src={currentPlan.planImage}
														fill
														alt=''
														quality={100}
														className='object-scale-down'
													/>
												</div>
											</div>
											<ul
												className={`${styles['places-plans__list']} sm:w-1/2`}
											>
												<li>
													<span>Этаж:</span>
													<span>{currentPlan.floor}</span>
												</li>
												<li>
													<span>
														С балконом м<sup>2</sup>:
													</span>
													<span>{currentPlan.hasBalcony}</span>
												</li>
												<li>
													<span>
														Без балкона м<sup>2</sup>:
													</span>
													<span>{currentPlan.noBalcony}</span>
												</li>
												<li>
													<span>Комнат:</span>
													<span>{currentPlan.rooms}</span>
												</li>
											</ul>
										</div>
									</div>
								</>
							)}
						</div>
					</div>

					<div className={styles['places-section']}>
						<h2 className='mb-10'>4. Fill an application below </h2>

						<div
							className={`${styles['places-footer__layout']} px-4 pt-9 pb-11 sm:px-20 sm:pt-6 sm:pb-12`}
						>
							<h2 className='text-lg font-medium text-center'>Application</h2>

							<div className={styles['places-form']}>
								<input
									{...register('name', { required: true })}
									type='text'
									placeholder='Your name'
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
								/>

								<div className='flex justify-center mt-[15px]'>
									<button className={styles['places-form__button']}>
										<span>Send all information</span>
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
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Places
