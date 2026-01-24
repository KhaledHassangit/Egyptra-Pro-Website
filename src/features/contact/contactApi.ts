// features/contact/api/contactApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api/api';
import { ContactFormData, ContactResponse } from '@/constants/types';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    submitContactForm: builder.mutation<ContactResponse, ContactFormData>({
      query: (formData) => ({
        url: '/api/contact',
        method: 'POST',
        data: formData,
      }),
    }),
  }),
});

export const { useSubmitContactFormMutation } = contactApi;