// lib/tourApi.ts

import { api } from "@/api/server-api";
import { ReviewsResponse } from "@/constants/types";

export const fetchReviews = async () => {
  try {
    const data = await api.get<ReviewsResponse>("/api/v1/reviews", {
    });
    return data;
  } catch (error) {
    console.error(`Error fetching reviews `, error);
    throw error;
  }
};

