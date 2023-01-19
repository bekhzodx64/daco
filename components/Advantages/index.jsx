import Image from 'next/image'
import { advantages } from '../../helpers/data'

const Advantages = () => {
	return (
		<div
			className={`pt-20`}
			id='advantages'
		>
			<p className='font-semibold relative opacity-20 text-accent text-[80px] lg:text-[200px] lg:-mb-28 -z-10 whitespace-nowrap overflow-hidden'>
				Our advantages
				<span className='absolute bottom-0 left-0 right-0 z-10 h-2/3 bg-gradient-to-t from-black/95 via-black/80 to-transparent'></span>
			</p>

			<div className='container'>
				<div className='lg:pl-52'>
					<h2 className='section-title'>Our advantages</h2>
					<p className='section-description'>
						Get to know the best aspects of our company
					</p>
				</div>

				<div className='grid lg:grid-cols-4 mt-[60px] lg:mt-[70px] gap-10 mx-auto xl:px-[50px] lg:px-[20px] md:px-0'>
					{advantages.map((advantage, index) => (
						<div key={advantage.id}>
							<div className='flex flex-col gap-7'>
								<Image
									src={`${advantage.icon}`}
									width={40}
									height={40}
									alt={advantage.title}
								/>

								<div className='flex flex-col gap-3'>
									<h2 className='text-2xl font-medium'>{advantage.title}</h2>
									<p className='text-sm leading-normal opacity-80'>
										{advantage.description}
									</p>
									<span className='text-[148px] text-accent/20 text-right lg:text-left advantage-number leading-none'>
										0{index + 1}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Advantages
