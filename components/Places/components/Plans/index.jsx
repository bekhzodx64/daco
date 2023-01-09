import Image from 'next/image'

import styles from './style.module.scss'

const Plans = ({ plan }) => {
	return (
		<div className={styles['places-plans__item']}>
			<div className={styles['places-plans__image']}>
				<Image
					src={plan.planImage}
					fill
					alt=''
					draggable={false}
					quality={100}
					className='object-scale-down w-full h-full'
				/>
			</div>

			<ul className={styles['places-plans__list']}>
				<li>
					<span>Этаж:</span>
					<span>{plan.floor}</span>
				</li>
				<li>
					<span>
						С балконом м<sup>2</sup>:
					</span>
					<span>{plan.hasBalcony}</span>
				</li>
				<li>
					<span>
						Без балкона м<sup>2</sup>:
					</span>
					<span>{plan.noBalcony}</span>
				</li>
				<li>
					<span>Комнат:</span>
					<span>{plan.rooms}</span>
				</li>
			</ul>
		</div>
	)
}

export default Plans
