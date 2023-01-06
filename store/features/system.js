import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	showModal: false,
}

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		toggleModal: (state, action) => {
			state.showModal = !state.showModal
		},
	},
})

export const { toggleModal } = systemSlice.actions
export default systemSlice.reducer
