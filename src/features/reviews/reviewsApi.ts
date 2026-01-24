import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/api/api';
import { ReviewsResponse , Review} from '@/constants/types';



export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Review'],
  endpoints: (builder) => ({
    // Get all reviews without any parameters
    getReviews: builder.query<ReviewsResponse, void>({
      query: () => ({
        url: '/api/v1/reviews',
        method: 'GET',
      }),
      providesTags: ['Review'],
    }),
    
    // Get a single review by ID
    getReviewById: builder.query<Review, string>({
      query: (id) => ({
        url: `/api/v1/reviews/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Review', id }],
    }),
    
    // Create a new review
    createReview: builder.mutation<Review, {
      rating: number;
      title: string;
      content: string;
      tourId: string;
    }>({
      query: (data) => ({
        url: '/api/v1/reviews',
        method: 'POST',
        data,
        withToken: true, // Assuming authentication is required
      }),
      invalidatesTags: ['Review'],
    }),
    
    // Update an existing review
    updateReview: builder.mutation<Review, { 
      id: string; 
      data: {
        rating?: number;
        title?: string;
        content?: string;
      }
    }>({
      query: ({ id, data }) => ({
        url: `/api/v1/reviews/${id}`,
        method: 'PUT',
        data,
        withToken: true, // Assuming authentication is required
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Review', id }],
    }),
    
    // Delete a review
    deleteReview: builder.mutation<void, string>({
      query: (id) => ({
        url: `/api/v1/reviews/${id}`,
        method: 'DELETE',
        withToken: true, // Assuming authentication is required
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Review', id }],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewByIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;