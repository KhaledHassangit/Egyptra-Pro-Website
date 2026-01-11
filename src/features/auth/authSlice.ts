// features/auth/authSlice.ts

import { AuthState, User } from '@/constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Define the initial state, checking for an existing token in cookies
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
            
            // Store the access token in a cookie
            cookies.set('accessToken', token, { path: '/' });
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            
            // Remove the access token from cookies
            cookies.remove('accessToken', { path: '/' });
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;