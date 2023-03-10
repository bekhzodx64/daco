import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeInDown } from '../../../../helpers/animations'

import { socialLinks } from '../../../../helpers/data'

const SocialLinks = () => {
	return (
		<ul className='flex items-center gap-5'>
			{socialLinks.map((link) => (
				<motion.li
					variants={fadeInDown}
					key={link.id}
				>
					<a
						href={link.url}
						className='group'
					>
						<Image
							src={link.icon}
							width={24}
							height={24}
							priority
							alt={link.name}
							className='transition-all group-hover:-translate-y-1 group-hover:scale-125'
						/>
					</a>
				</motion.li>
			))}
		</ul>
	)
}

export default SocialLinks
