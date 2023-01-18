import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const ProjectModal = ({ modalData, setModalData }) => {
	function clickHandler() {
		console.log('it works')
	}

	return (
		<Transition
			appear
			show={modalData.isOpen}
			as={Fragment}
		>
			<Dialog
				as='div'
				className={`${montserrat.variable} font-sans relative z-20`}
				onClose={() => setModalData({ isOpen: false })}
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
							<Dialog.Panel className='relative w-full max-w-4xl'>
								<div className='relative w-full max-w-4xl'>
									<button
										type='button'
										onClick={() => setModalData({ isOpen: false })}
										className='absolute flex items-center justify-center w-12 h-12 mx-auto -translate-x-1/2 -translate-y-1/2 border rounded-full left-1/2 bottom-full'
									>
										<Image
											src={'/icons/close.svg'}
											width={14}
											priority
											height={14}
											alt='close'
										/>
									</button>

									<div className='absolute -translate-x-full -translate-y-1/2 -left-4 top-1/2'>
										<button
											type='button'
											className='flex items-center justify-center w-12 h-12 border rounded-full projects-modal-prev'
										>
											<Image
												src={'/icons/chevron-left.svg'}
												width={9}
												priority
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
										{modalData?.items?.map((project, index) => (
											<SwiperSlide key={index}>
												<div className='relative pt-[60%]'>
													<Image
														src={project.image}
														fill
														quality={100}
														alt='image'
														className='object-cover'
													/>
												</div>
											</SwiperSlide>
										))}
									</Swiper>

									<div className='absolute translate-x-full -translate-y-1/2 -right-4 top-1/2'>
										<button
											type='button'
											className='flex items-center justify-center w-12 h-12 border rounded-full projects-modal-next'
										>
											<Image
												src={'/icons/chevron-right.svg'}
												width={9}
												priority
												height={5}
												alt='projects next'
											/>
										</button>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default ProjectModal
