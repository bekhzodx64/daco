import { Montserrat } from '@next/font/google'
import Image from 'next/image'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const AboutUs = () => {
	return (
		<div
			className={`${montserrat.variable} font-sans container`}
			id='about'
		>
			<div></div>
			<div>
				<h2 className='text-[40px] font-semibold'>About us</h2>
				<div className='space-y-4 mt-7'>
					<p className='text-sm opacity-60'>
						DACO GROUP is one of the fastest growing development companies with
						15 years of experience in the market. The company&apos;s activity is
						aimed at creating unique residential complexes, distinguished by
						their innovation, smart approach and high quality.
					</p>
					<p className='text-sm opacity-60'>
						DACO GROUP pays special attention to both construction issues and
						work with clients, providing an individual approach and thorough
						advice when choosing an apartment or business property. Our main
						task is not only in high-quality construction and development of
						social infrastructure, but also in timely settlement and after-sales
						service.
					</p>
				</div>

				<button
					type='button'
					className='z-10 bg-black/50 relative pr-[6px] pt-[6px] pb-[6px] mt-10 flex items-center gap-6 pl-5 rounded-full border border-white/30'
				>
					<span>Leave an application</span>
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
	)
}

export default AboutUs
