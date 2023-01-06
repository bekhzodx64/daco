import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	showModal: false,

	videoModal: false,
}

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		toggleModal: (state, action) => {
			state.showModal = !state.showModal
		},
		toggleVideo: (state) => {
			state.videoModal = !state.videoModal
		},
	},
})

export const { toggleModal, toggleVideo } = systemSlice.actions
export default systemSlice.reducer
