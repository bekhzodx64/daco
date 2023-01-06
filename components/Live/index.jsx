import Image from 'next/image'
import desktop from '../../public/live/1.png'
import mobile from '../../public/live/mobile-building.png'
import desktop2 from '../../public/live/2.png'
import birds2 from '../../public/live/birds2.png'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const Live = () => {
	return (
		<div
			className={`${montserrat.variable} font-sans relative z-0 bg-white lg:min-h-[90vh] flex flex-col lg:flex-row lg:items-center pt-[100px] lg:pt-0`}
		>
			<Image
				src={desktop}
				alt=''
				quality={100}
				className='absolute bottom-0 left-0 right-0 hidden object-cover -z-10 lg:block'
			/>

			<Image
				src={desktop2}
				alt=''
				quality={100}
				className='absolute bottom-0 right-0 hidden object-cover -z-20 lg:block'
			/>

			<Image
				src={birds2}
				alt=''
				quality={100}
				draggable={false}
				className='absolute right-0 z-10 top-[10%] hidden sm:block pointer-events-none'
			/>

			<div className='container flex justify-center lg:justify-end'>
				<div className='max-w-[400px] space-y-7'>
					<h2 className='text-[40px] font-semibold leading-tight text-black'>
						Live at the center of the city
					</h2>
					<p className='text-sm text-black opacity-90'>
						Prestigious houses allow you to live with maximum comfort and a high
						pace of life. Here, not only from afar, but also at a glance from
						the wide windows of your apartment, it creates a wonderful
						atmosphere.
					</p>

					<button
						type='button'
						className='relative pr-[6px] pt-[6px] pb-[6px] flex items-center gap-6 pl-5 rounded-full border border-accent'
					>
						<span className='text-accent'>See available places</span>
						<div className='flex items-center justify-center w-12 h-12 rounded-full accent-gradient'>
							<Image
								src={'/icons/chevron-right.svg'}
								width={9}
								height={5}
								alt='chevron right'
							/>
						</div>
					</button>
				</div>
			</div>

			<div className='relative overflow-hidden'>
				<Image
					src={mobile}
					alt=''
					quality={100}
					draggable={false}
					className='lg:hidden'
				/>

				<Image
					src={desktop2}
					alt=''
					quality={100}
					className='absolute bottom-0 right-0 object-cover -z-20 lg:hidden'
				/>
			</div>
		</div>
	)
}

export default Live
