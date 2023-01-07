import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	menuModal: false,
	servicesModal: false,
	videoModal: false,
	projectModal: false,
}

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		toggleMenu: (state) => {
			state.menuModal = !state.menuModal
		},
		toggleVideo: (state) => {
			state.videoModal = !state.videoModal
		},
		toggleServices: (state) => {
			state.servicesModal = !state.servicesModal
		},
		toggleProjects: (state, action) => {
			state.projectModal = action.payload
		},
	},
})

export const { toggleMenu, toggleVideo, toggleServices, toggleProjects } =
	systemSlice.actions
export default systemSlice.reducer
