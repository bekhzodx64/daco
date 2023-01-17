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
				<Menu.Button className='inline-flex justify-center w-full text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
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
				<Menu.Items className='absolute w-full mt-2 origin-top-right divide-y rounded-md shadow-lg backdrop-blur-2xl bg-black/80 ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='p-1'>
						{langRouter.locales.map((locale, index) => (
							<Menu.Item key={index}>
								{({ active }) => (
									<Link
										href={langRouter.asPath}
										locale={locale}
										scroll={false}
										replace
									>
										<li className='flex items-center gap-2 px-2 py-2 uppercase rounded-md cursor-pointer hover:bg-accent'>
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
								)}
							</Menu.Item>
						))}
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
