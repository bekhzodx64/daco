import { Montserrat } from '@next/font/google'
import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const LangSwitcher = () => {
	return (
		<Popover.Root className={`${montserrat.variable} font-sans`}>
			<Popover.Trigger asChild>
				<button
					className='outline-none flex items-center px-5 py-4 font-medium uppercase border border-white/30 rounded-full gap-[10px]'
					aria-label='Customise options'
				>
					<Image
						src={'/flags/1.jpg'}
						width={22}
						height={14}
						alt='flag'
						priority
					/>
					<div className='flex items-center gap-1'>
						<span>eng</span>
						<Image
							src={'/icons/chevron-down.svg'}
							width={8}
							height={4}
							priority
							alt='chevron down'
						/>
					</div>
				</button>
			</Popover.Trigger>

			<Popover.Portal>
				<Popover.Content
					className={`${montserrat.variable} font-sans z-[100] outline-none`}
					sideOffset={10}
				>
					<ul
						style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
						className='flex flex-col py-2 border rounded-xl border-white/30 bg-bgBlack'
					>
						<li className='flex items-center gap-2 px-5 py-2 uppercase cursor-pointer hover:bg-darkAccent'>
							<Image
								src={'/flags/1.jpg'}
								width={22}
								height={14}
								alt='flag'
								priority
							/>
							<span>ru</span>
						</li>
						<li className='flex items-center gap-2 px-5 py-2 uppercase cursor-pointer hover:bg-darkAccent'>
							<Image
								src={'/flags/1.jpg'}
								width={22}
								height={14}
								alt='flag'
								priority
							/>
							<span>ru</span>
						</li>
						<li className='flex items-center gap-2 px-5 py-2 uppercase cursor-pointer hover:bg-darkAccent'>
							<Image
								src={'/flags/1.jpg'}
								width={22}
								height={14}
								alt='flag'
								priority
							/>
							<span>ru</span>
						</li>
					</ul>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}

export default LangSwitcher
