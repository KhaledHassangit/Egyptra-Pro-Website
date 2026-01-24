// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import { authApi } from '@/features/auth/authApi';
import { contactApi } from '@/features/contact/contactApi';
import { reviewsApi } from '@/features/reviews/reviewsApi';
import { toursApi } from '@/features/tours/toursApi';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
        [reviewsApi.reducerPath]: reviewsApi.reducer,
        [toursApi.reducerPath]: toursApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            contactApi.middleware,
            reviewsApi.middleware,
            toursApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;