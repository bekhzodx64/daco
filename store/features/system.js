import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	showMobileMenu: false,
}

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		toggleMobileMenu: (state, action) => {
			state.showMobileMenu = !state.showMobileMenu
		},
	},
})

export const { toggleMobileMenu } = systemSlice.actions
export default systemSlice.reducer
