import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	showModal: false,
	servicesModal: false,
	videoModal: false,
}

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.showModal = !state.showModal
		},
		toggleVideo: (state) => {
			state.videoModal = !state.videoModal
		},
		toggleServices: (state) => {
			state.servicesModal = !state.servicesModal
		},
	},
})

export const { toggleModal, toggleVideo, toggleServices } = systemSlice.actions
export default systemSlice.reducer
