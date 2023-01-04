import Image from 'next/image'
import { createPortal } from 'react-dom'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const ProjectModal = ({ showGallery, projects }) => {
	return (
		<>
			{createPortal(
				<div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl'>
					<div className='mb-4'>
						<button
							type='button'
							onClick={() => showGallery(null)}
							className='flex items-center justify-center w-12 h-12 border rounded-full'
						>
							<Image
								src={'/icons/close.svg'}
								width={14}
								height={14}
								alt='close'
							/>
						</button>
					</div>

					<div className='relative w-full max-w-4xl'>
						<div className='absolute z-50 -translate-x-full -translate-y-1/2 -left-4 top-1/2'>
							<button
								type='button'
								className='flex items-center justify-center w-12 h-12 border rounded-full projects-modal-prev'
							>
								<Image
									src={'/icons/chevron-left.svg'}
									width={9}
									height={5}
									alt='projects prev'
								/>
							</button>
						</div>

						<Swiper
							modules={[Pagination, Navigation]}
							centeredSlides={true}
							pagination={true}
							spaceBetween={5}
							loop={true}
							navigation={{
								prevEl: '.projects-modal-prev',
								nextEl: '.projects-modal-next',
							}}
						>
							{projects.map((project) =>
								project.gallery.map((image) => (
									<SwiperSlide key={image.id}>
										<div className='relative pt-[60%]'>
											<Image
												src={image.image}
												fill
												quality={100}
												alt='image'
												className='object-cover'
											/>
										</div>
									</SwiperSlide>
								))
							)}
						</Swiper>

						<div className='absolute z-50 translate-x-full -translate-y-1/2 -right-4 top-1/2'>
							<button
								type='button'
								className='flex items-center justify-center w-12 h-12 border rounded-full projects-modal-next'
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
				</div>,
				document.body
			)}
		</>
	)
}

export default ProjectModal
