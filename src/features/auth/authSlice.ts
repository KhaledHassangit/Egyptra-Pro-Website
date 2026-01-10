import { AuthState, User } from '@/constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initialState: AuthState = {
    user: null,
    token: cookies.get('accessToken') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ user: User; token: string }>
        ) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            cookies.set('accessToken', token, { path: '/' });
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            cookies.remove('accessToken', { path: '/' });
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
