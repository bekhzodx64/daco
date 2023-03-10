import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html
			lang='en'
			className='scroll-smooth'
			id='main'
		>
			<Head />
			<body className='text-white bg-[#080808]'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
