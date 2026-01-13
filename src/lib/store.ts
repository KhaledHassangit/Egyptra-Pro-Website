import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import { authApi } from '@/features/auth/authApi';
import { contactApi } from '@/features/contact/contactApi';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;