import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/lib/api';

export interface User {
    id: string;
    email: string;
    username: string;
    role: string;
}

export interface AuthResponse {
    access_token: string;
    user: User;
}

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
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
