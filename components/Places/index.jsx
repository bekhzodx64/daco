import { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Montserrat } from '@next/font/google'
import Image from 'next/image'
import { plans } from '../../helpers/data'
import { projects } from '../../helpers/data'

import styles from './style.module.scss'

import plan1 from '../../public/places/1.png'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

const Places = () => {
	const [indexPlan, setIndexPlan] = useState([])
	const [idx, setIdx] = useState()
	const ref = useRef([])

	const handleChangeSwiper = items => {
		ref.current = items.plans
	}

	useEffect(() => {
		ref.current = ref.current
	}, [indexPlan])

	return (
		<div
			className={`${styles.places} ${montserrat.variable} font-sans container`}
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
						}
					}}
					navigation={{
						prevEl: '.places-prev',
						nextEl: '.places-next'
					}}
					loop={true}
					slidesPerView={3}
					centeredSlides={true}
					spaceBetween={50}
					className='relative mt-10'
					onSlideChange={e => {
						setIndexPlan(p => (p += 1))
					}}
					onActiveIndexChange={e => {
						setIdx(e.realIndex)
					}}
				>
					{projects.map((project, idx, array) => {
						return (
							<>
								<SwiperSlide key={project.id}>
									{({ isActive }) => {
										return (
											<div
												className={`${
													isActive ? 'opacity-100' : 'opacity-50'
												} w-full h-full space-y-4`}
											>
												{idx && isActive
													? handleChangeSwiper(array[idx])
													: null}
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
							</>
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
					{ref.current.map(plan => (
						<div key={plan.id} className={styles['places-plans__item']}>
							<div className={styles['places-plans__image']}>
								<Image
									src={plan.planImage}
									fill
									alt=''
									draggable={false}
									quality={100}
									className='object-scale-down w-full h-full'
								/>
							</div>

							<ul className={styles['places-plans__list']}>
								<li>
									<span>Этаж:</span>
									<span>{plan.floor}</span>
								</li>
								<li>
									<span>
										С балконом м<sup>2</sup>:
									</span>
									<span>{plan.hasBalcony}</span>
								</li>
								<li>
									<span>
										Без балкона м<sup>2</sup>:
									</span>
									<span>{plan.noBalcony}</span>
								</li>
								<li>
									<span>Комнат:</span>
									<span>{plan.rooms}</span>
								</li>
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className={styles['places-footer']}>
				<div className={styles['places-section']}>
					<h2 className='mb-10'>3. You choosed</h2>

					<div className={`${styles['places-footer__layout']} p-10 space-y-8`}>
						<div className='flex flex-col gap-2'>
							<h3 className={styles['places-footer__layout-title']}>
								Project name:
							</h3>
							<p className={styles['places-footer__layout-description']}>
								Project of a multi-store residental building “Anxor Tower”
							</p>
						</div>

						<div className='space-y-3'>
							<h3 className={styles['places-footer__layout-title']}>
								Plan information:
							</h3>

							<div className='flex justify-between'>
								<div className='w-1/3'>
									<div className={styles['places-footer__layout-image']}>
										<Image
											src={plan1}
											fill
											alt=''
											quality={100}
											className='object-scale-down'
										/>
									</div>
								</div>
								<ul className={`${styles['places-plans__list']} w-1/2`}>
									<li>
										<span>Этаж:</span>
										<span>2-6</span>
									</li>
									<li>
										<span>
											С балконом м<sup>2</sup>:
										</span>
										<span>84.71</span>
									</li>
									<li>
										<span>
											Без балкона м<sup>2</sup>:
										</span>
										<span>74.46</span>
									</li>
									<li>
										<span>Комнат:</span>
										<span>3</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className={styles['places-section']}>
					<h2 className='mb-10'>4. Fill an application below </h2>

					<div
						className={`${styles['places-footer__layout']} px-20 pt-6 pb-12`}
					>
						<h2 className='text-lg font-medium text-center'>Application</h2>

						<form className={styles['places-form']}>
							<input type='text' placeholder='Your name' />

							<input type='tel' placeholder='Phone number' />

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
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Places
