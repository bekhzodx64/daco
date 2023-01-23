import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '../store'
import Head from 'next/head'

import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>DacoGroup - Home Page</title>
				<meta
					name='description'
					content='Dacogroup'
				></meta>
			</Head>
			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}
				>
					<ToastContainer />
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	)
}
