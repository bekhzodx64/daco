import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	menuModal: false,
	servicesModal: false,
	videoModal: false,
	projectModal: false
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
		},
		toggleProjects: state => {
			state.projectModal = !state.projectModal
		}
	}
})

export const { toggleMenu, toggleVideo, toggleServices, toggleProjects } =
	systemSlice.actions
export default systemSlice.reducer
