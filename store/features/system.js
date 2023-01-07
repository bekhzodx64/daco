import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	menuModal: false,
	servicesModal: false,
	videoModal: false
}

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		toggleMenu: state => {
			state.menuModal = !state.menuModal
		},
		toggleVideo: state => {
			state.videoModal = !state.videoModal
		},
		toggleServices: state => {
			state.servicesModal = !state.servicesModal
		}
	}
})

export const { toggleMenu, toggleVideo, toggleServices } = systemSlice.actions
export default systemSlice.reducer
