// features/tours/toursApi.ts

import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api/api';
import { ToursResponse, GetToursParams } from '@/constants/types';

export const toursApi = createApi({
  reducerPath: 'toursApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getTours: builder.query<ToursResponse, GetToursParams>({
      query: (params) => ({
        url: '/api/v1/tours',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetToursQuery } = toursApi;