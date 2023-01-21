export const defaultAnimation = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			// delayChildren: 2,
			duration: 0.4,
		},
	},
	exit: {
		opacity: 0,
	},
}

export const stagger = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
}

export const fadeInDown = {
	initial: {
		opacity: 0,
		y: -60,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
}

export const fadeInDownView = {
	initial: {
		opacity: 0,
		y: -60,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
		},
	},
}
