import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api/api';
import { AuthResponse } from '@/constants/types';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, any>({
            query: (credentials) => ({
                url: '/api/auth/login',
                method: 'POST',
                data: credentials,
            }),
        }),
        register: builder.mutation<AuthResponse, any>({
            query: (credentials) => ({
                url: '/api/auth/register',
                method: 'POST',
                data: credentials,
            }),
        }),
        forgotPassword: builder.mutation<void, { email: string }>({
            query: (data) => ({
                url: '/api/auth/forgot-password',
                method: 'POST',
                data,
            }),
        }),
        resetPassword: builder.mutation<void, { token: string; password: string; confirmPassword: string }>({
            query: (data) => ({
                url: '/api/auth/reset-password',
                method: 'POST',
                data,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation } = authApi;
