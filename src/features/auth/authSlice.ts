// features/auth/authSlice.ts

import { AuthState, User } from '@/constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

// Initialize with null - hydration happens on client mount
const initialState: AuthState = {
    user: null,
    token: null,
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
            const cookies = new Cookies();
            cookies.set('accessToken', token, { path: '/' });
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            
            // Remove the access token from cookies
            const cookies = new Cookies();
            cookies.remove('accessToken', { path: '/' });
        },
        hydrateAuth: (
            state,
            action: PayloadAction<{ token: string | null; user: User | null }>
        ) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
    },
});

export const { setCredentials, logout, hydrateAuth } = authSlice.actions;

export default authSlice.reducer;