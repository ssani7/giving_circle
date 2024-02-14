import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	email: string;
	name: string;
	role: string;
}
const initialState: UserState = {
	email: '',
	name: '',
	role: '',
};

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			state.email = action.payload?.email;
			state.name = action.payload?.name;
			state.role = action.payload?.role;
		},
	},
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
