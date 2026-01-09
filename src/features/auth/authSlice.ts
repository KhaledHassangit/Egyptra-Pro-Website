import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import { User } from './authApi';

const cookies = new Cookies();

interface AuthState {
    user: User | null;
    token: string | null;
}

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
