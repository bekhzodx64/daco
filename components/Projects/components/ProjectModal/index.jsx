import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'

import { toggleProjects } from '../../../../store/features/system'

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
}

const ProjectModal = () => {
	const dispatch = useDispatch()

	const { projectModal } = useSelector((state) => state.systemSlice)

	useEffect(() => {
		document.body.classList.add('modal-open')

		return () => {
			document.body.classList.remove('modal-open')
		}
	}, [])

	return (
		<motion.div
			className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl'
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div className='mb-4'>
				<button
					type='button'
					onClick={() => dispatch(toggleProjects(null))}
					className='flex items-center justify-center w-12 h-12 border rounded-full'
				>
					<Image
						src={'/icons/close.svg'}
						width={14}
						priority
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
					{projectModal?.map((project) => (
						<SwiperSlide key={project.id}>
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

				<div className='absolute z-50 translate-x-full -translate-y-1/2 -right-4 top-1/2'>
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
		</motion.div>
	)
}

export default ProjectModal
