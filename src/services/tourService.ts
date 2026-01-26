// lib/tourApi.ts

import { api } from "@/api/server-api";
import { Tour } from "@/constants/types";


interface ToursResponse {
    data: Tour[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
}

export const fetchTours = async () => {
    try {
        const data = await api.get<ToursResponse>("/api/tours", {
            params: {
                isPopular: true,
                page: 1,
                limit: 10,
            },
        });
        console.log("Tours by location fetched successfully:", data);
        return data;
    } catch (error) {
        console.error("Error fetching tours by location:", error);
        throw error;
    }
};

// Fetch tours by category
// export const fetchToursByCategory = async (category?: string) => {
//     try {
//         const data = await api.get<ToursResponse>("/api/v1/tours", {
//             params: {
//                 category,
//                 isPopular: true,
//                 page: 1,
//                 limit: 10,
//             },
//         });
//         console.log("Tours by category fetched successfully:", data);
//         return data;
//     } catch (error) {
//         console.error("Error fetching tours by category:", error);
//         throw error;
//     }
// };

// // Fetch popular tours
// export const fetchPopularTours = async () => {
//     try {
//         const data = await api.get<ToursResponse>("/api/v1/tours", {
//             params: {
//                 page: 1,
//                 limit: 6,
//                 isPopular: true,


//                 // If your API supports filtering popular tours, add it here
//                 // isPopular: true
//             },
//         });
//         console.log("Popular tours fetched successfully:", data);
//         return data;
//     } catch (error) {
//         console.error("Error fetching popular tours:", error);
//         throw error;
//     }
// };