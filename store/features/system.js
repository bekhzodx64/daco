import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	menuModal: false,
	servicesModal: false,
	videoModal: false,
	projectModal: false,
	currentPlan: null,
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
		selectPlan: (state, action) => {
			state.currentPlan = action.payload
		},
	},
})

export const {
	toggleMenu,
	toggleVideo,
	toggleServices,
	toggleProjects,
	selectPlan,
} = systemSlice.actions
export default systemSlice.reducer
