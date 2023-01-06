import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleVideo } from '../../../../store/features/system'

import styles from './style.module.scss'

const IntroModal = () => {
	const dispatch = useDispatch()
	const videoRef = useRef()
	const [play, setPlay] = useState(true)

	const closeHandler = () => {
		dispatch(toggleVideo())
	}

	const playHandler = () => {
		setPlay(!play)
		videoRef.current.play()
	}

	const pauseHandler = () => {
		setPlay(!play)
		videoRef.current.pause()
	}

	useEffect(() => {
		document.body.classList.add('modal-open')

		return () => {
			document.body.classList.remove('modal-open')
		}
	}, [])

	return (
		<div className={styles.video}>
			<button
				type='button'
				onClick={closeHandler}
			>
				<Image
					src={'/icons/close.svg'}
					width={20}
					height={20}
					alt='close'
				/>
			</button>

			<div className={styles['video-player']}>
				<video
					ref={videoRef}
					src='/intro/1.mp4'
					onEnded={() => setPlay(!play)}
					controls={play ? false : true}
					onClick={pauseHandler}
				></video>

				{play ? (
					<div
						className={styles['video-icon']}
						onClick={playHandler}
					>
						<Image
							src={'/icons/play-white.svg'}
							width={20}
							height={20}
							alt='play'
						/>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default IntroModal
