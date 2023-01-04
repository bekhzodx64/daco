import Image from 'next/image'
import building from '../../public/live/1.png'
import building2 from '../../public/live/2.png'
import birds1 from '../../public/live/birds1.png'
import birds2 from '../../public/live/birds2.png'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const Live = () => {
	return (
		<div
			className={`${montserrat.variable} font-sans relative z-0 bg-white min-h-[90vh] flex items-center`}
		>
			<Image
				src={building}
				alt=''
				quality={100}
				draggable={false}
				className='absolute bottom-0 left-0 -z-10'
			/>

			<Image
				src={building2}
				alt=''
				quality={100}
				draggable={false}
				className='absolute bottom-0 left-0 right-0 w-full -z-20'
			/>

			<Image
				src={birds1}
				alt=''
				quality={100}
				draggable={false}
				className='absolute z-10 top-[15%] left-1/4'
			/>

			<Image
				src={birds2}
				alt=''
				quality={100}
				draggable={false}
				className='absolute right-0 z-10 top-[10%]'
			/>

			<div className='container flex flex-col items-end justify-center'>
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
		</div>
	)
}

export default Live
