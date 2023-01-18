import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Navigation } from 'swiper'
import { Montserrat } from '@next/font/google'
import Image from 'next/image'
import ProjectModal from './components/ProjectModal'

import { projects } from '../../helpers/data'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const Projects = () => {
	const [modalData, setModalData] = useState({
		isOpen: false,
		items: [],
	})

	return (
		<div
			className={`${montserrat.variable} font-sans pt-40 overflow-x-hidden`}
			id='project'
		>
			<p className='font-semibold relative opacity-20 text-accent text-[200px] -mb-28 -z-10 whitespace-nowrap'>
				Our latest projects
				<span className='absolute bottom-0 left-0 right-0 z-10 h-2/3 bg-gradient-to-t from-black/95 via-black/80 to-transparent'></span>
			</p>

			<div className='container max-w-[960px]'>
				<h2 className='section-title'>Our latest projects</h2>
				<p className='section-description'>Get to know our latest projects</p>
			</div>
			<Swiper
				modules={[EffectCoverflow, Pagination, Navigation]}
				effect={'coverflow'}
				pagination={{
					el: '.custom-projects-pagination',
					type: 'custom',
					renderCustom: function (swiper, current, total) {
						return `<div><span style="font-size:40px" className='text-[40px]'>${current}</span> / <span>${total}</span></div>`
					},
				}}
				navigation={{
					prevEl: '.projects-prev',
					nextEl: '.projects-next',
				}}
				loop={true}
				speed={800}
				slidesPerView={1.3}
				centeredSlides={true}
				coverflowEffect={{
					rotate: -5,
					depth: 150,
					modifier: 2,
					stretch: -70,
				}}
				className='relative mt-24'
			>
				{projects.map((project, index) => (
					<SwiperSlide
						key={index}
						className='group'
					>
						<div className='pt-[100%] sm:pt-[60%] lg:pt-[40%]'>
							<Image
								src={project.image}
								fill
								alt={project.title}
								className='object-cover'
								draggable={false}
							/>
						</div>

						<div className='absolute inset-0 flex flex-col justify-end px-5 py-3 transition-all duration-500 md:py-11 md:px-20 group-hover:bg-black/40'>
							<p className='text-sm font-medium transition-all duration-500 translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
								{project.location}
							</p>
							<p className='text-shadow font-semibold text-[22px] lg:text-[28px]'>
								{project.title}
							</p>
							<div className='flex items-center justify-between mt-3 overflow-hidden transition-all duration-1000 opacity-0 lg:mt-10 max-h-0 group-hover:max-h-full group-hover:opacity-100'>
								<button
									type='button'
									className='md:hidden'
								>
									See available places
								</button>

								<button
									type='button'
									className='z-10 bg-black/50 relative pr-[6px] pt-[6px] pb-[6px] items-center gap-6 pl-5 rounded-full border border-white/30 hidden md:flex'
								>
									<span>See available places</span>
									<div className='flex items-center justify-center w-12 h-12 rounded-full accent-gradient'>
										<Image
											src={'/icons/chevron-right.svg'}
											width={9}
											height={5}
											alt={project.title}
										/>
									</div>
								</button>

								<button
									type='button'
									onClick={() =>
										setModalData({ isOpen: true, items: project.gallery })
									}
									className='relative z-10 flex items-center justify-center border rounded-full border-white/30 w-14 h-14'
								>
									<Image
										src={'/icons/full-screen.svg'}
										width={18}
										height={18}
										alt={project.title}
									/>
								</button>
							</div>
						</div>
					</SwiperSlide>
				))}

				<div className='container flex items-center justify-between gap-8 py-4'>
					<div className='w-20 custom-projects-pagination'></div>
					<div className='h-[1px] w-full bg-gradient-to-tl from-transparent via-white/40 to-transparent rounded-full flex-1'></div>
					<div className='flex gap-3 custom-projects-navigation'>
						<button
							type='button'
							className='flex items-center justify-center w-12 h-12 border rounded-full projects-prev'
						>
							<Image
								src={'/icons/chevron-left.svg'}
								width={9}
								height={5}
								alt='projects prev'
							/>
						</button>
						<button
							type='button'
							className='flex items-center justify-center w-12 h-12 border rounded-full projects-next'
						>
							<Image
								src={'/icons/chevron-right.svg'}
								width={9}
								height={5}
								alt='projects next'
							/>
						</button>
					</div>
				</div>
			</Swiper>

			<ProjectModal
				setModalData={setModalData}
				modalData={modalData}
			/>
		</div>
	)
}

export default Projects
