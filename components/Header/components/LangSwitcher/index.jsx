import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Montserrat } from '@next/font/google'
import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const LangSwitcher = () => {
	const langRouter = useRouter()

	return (
		<Menu
			as='div'
			className='relative inline-block text-left'
		>
			<div>
				<Menu.Button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
					<button
						className='outline-none flex items-center px-5 py-4 font-medium uppercase border border-white/30 rounded-full gap-[10px]'
						aria-label='Customise options'
					>
						{langRouter.locale === 'en' ? (
							<Image
								src={'/flags/1.jpg'}
								width={22}
								height={14}
								alt='flag'
								priority
							/>
						) : null}

						{langRouter.locale === 'uz' ? (
							<Image
								src={'/flags/2.jpg'}
								width={22}
								height={14}
								alt='flag'
								priority
							/>
						) : null}

						{langRouter.locale === 'ru' ? (
							<Image
								src={'/flags/3.jpg'}
								width={22}
								height={14}
								alt='flag'
								priority
							/>
						) : null}

						<div className='flex items-center gap-1'>
							<span>{langRouter.locale}</span>
							<Image
								src={'/icons/chevron-down.svg'}
								width={8}
								height={4}
								priority
								alt='chevron down'
							/>
						</div>
					</button>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='px-1 py-1 '>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-violet-500 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									{/* {active ? (
										<EditActiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									) : (
										<EditInactiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									)} */}
									Edit
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-violet-500 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									{/* {active ? (
										<DuplicateActiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									) : (
										<DuplicateInactiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									)} */}
									Duplicate
								</button>
							)}
						</Menu.Item>
					</div>
					<div className='px-1 py-1'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-violet-500 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									{/* {active ? (
										<ArchiveActiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									) : (
										<ArchiveInactiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									)} */}
									Archive
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-violet-500 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									{/* {active ? (
										<MoveActiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									) : (
										<MoveInactiveIcon
											className='w-5 h-5 mr-2'
											aria-hidden='true'
										/>
									)} */}
									Move
								</button>
							)}
						</Menu.Item>
					</div>
					<div className='px-1 py-1'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-violet-500 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									{/* {active ? (
										<DeleteActiveIcon
											className='w-5 h-5 mr-2 text-violet-400'
											aria-hidden='true'
										/>
									) : (
										<DeleteInactiveIcon
											className='w-5 h-5 mr-2 text-violet-400'
											aria-hidden='true'
										/>
									)} */}
									Delete
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default LangSwitcher

// className={`${montserrat.variable} font-sans`}

{
	/* <ul className='flex flex-col py-2 border rounded-xl border-white/30 bg-bgBlack'>
						{langRouter.locales.map((locale, index) => (
							<Link
								href={langRouter.asPath}
								locale={locale}
								scroll={false}
								replace
								key={index}
							>
								<li className='flex items-center gap-2 px-5 py-2 uppercase cursor-pointer hover:bg-darkAccent'>
									{locale === 'en' ? (
										<Image
											src={'/flags/1.jpg'}
											width={22}
											height={14}
											alt='flag'
											priority
										/>
									) : null}

									{locale === 'uz' ? (
										<Image
											src={'/flags/2.jpg'}
											width={22}
											height={14}
											alt='flag'
											priority
										/>
									) : null}

									{locale === 'ru' ? (
										<Image
											src={'/flags/3.jpg'}
											width={22}
											height={14}
											alt='flag'
											priority
										/>
									) : null}

									<span>{locale}</span>
								</li>
							</Link>
						))}
					</ul> */
}
