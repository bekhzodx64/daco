import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import { services } from '../../helpers/data'

import ServicesModal from './components/ServicesModal'

const Services = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [service, setService] = useState(0)

	function modalHandler() {
		setIsOpen(!isOpen)
	}

	return (
		<div
			className={`font-sans container relative space-y-14 pt-20`}
			id='services'
		>
			<p className='font-semibold relative opacity-20 text-accent text-[80px] lg:text-[200px] -mb-20 lg:-mb-44 -z-10 whitespace-nowrap overflow-hidden'>
				Our Services
				<span className='absolute bottom-0 left-0 right-0 z-10 h-2/3 bg-gradient-to-t from-black/95 via-black/80 to-transparent'></span>
			</p>

			<div className='lg:pl-40'>
				<h2 className='section-title'>Our services</h2>
				<p className='section-description'>
					Our company offers you comfortable and beautiful houses
				</p>
			</div>

			<div className='relative flex flex-col items-center gap-10 lg:flex-row'>
				{services.map((item, index) =>
					service === index ? (
						<div>
							<div className='px-10 rounded-[20px] accent-gradient py-11 max-w-xs mx-auto'>
								<h3 className='text-2xl font-semibold line-clamp-2'>
									{item.title}
								</h3>
								<p className='text-[15px] opacity-60 mt-4 line-clamp-6'>
									{item.description}
								</p>
								<button
									type='button'
									onClick={modalHandler}
									className='text-[15px] flex items-center w-full justify-between border p-5 rounded-full mt-8'
								>
									<span>Leave an application</span>
									<Image
										src={'/icons/chevron-right.svg'}
										width={15}
										height={15}
										alt='chevron'
									/>
								</button>
							</div>
						</div>
					) : null
				)}

				<div className='grid items-start flex-1 w-full grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 place-items-center h-min'>
					{services.map((item, index) => (
						<div
							className='max-w-[215px] cursor-pointer'
							key={item.id}
							onClick={() => setService(index)}
						>
							<div className='flex flex-col gap-5 text-center'>
								<div
									className={`border w-[86px] h-[86px] flex items-center justify-center mx-auto rounded-2xl ${
										service === index ? 'active-service' : null
									}`}
								>
									<Image
										src={`${item.icon}`}
										width={40}
										height={40}
										alt='services'
										className={
											service === index
												? 'grayscale mix-blend-color-dodge'
												: null
										}
									/>
								</div>
								<p
									className={`leading-tight text-[15px] md:text-lg ${
										service === index ? 'font-medium' : null
									}`}
								>
									{item.title}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<ServicesModal
				modalHandler={modalHandler}
				isOpen={isOpen}
			/>
		</div>
	)
}

export default Services
