

import { api } from "@/api/server-api";
import { ReviewsResponse } from "@/constants/types";
import { mockReviews } from "@/constants/data";

export const fetchReviews = async () => {
  try {
    const data = await api.get<ReviewsResponse>("/api/v1/reviews", {
    });
    return data;
  } catch (error) {
    console.error(`Error fetching reviews `, error);
    return {
      success: true,
      message: "Mock reviews loaded",
      data: {
        data: mockReviews,
        meta: {
          total: mockReviews.length,
          page: 1,
          limit: 10,
          totalPages: 1,
          hasNext: false,
          hasPrev: false
        }
      }
    };
  }
};
