import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html
			lang='en'
			className='scroll-smooth'
			id='main'
		>
			<Head>
				<title>DacoGroup</title>
				<meta
					name='description'
					content='Dacogroup'
				></meta>
			</Head>
			<body className='text-white bg-[#080808]'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
