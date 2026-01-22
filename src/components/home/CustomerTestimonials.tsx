"use client"

import { useEffect, useState } from "react"
import Container from "@/util/Container"
import { useGetReviewsQuery } from '@/features/reviews/reviewsApi';
import { Review } from "@/constants/types"
import SectionHeader from "@/util/SectionHeader"
import { AutoSkeletonLoader } from "react-loadly";
import { NoReviews, ReviewCard } from "../reviews/ReviewCard";
import { createSampleReview } from "@/helpers/helpers";
import { ReviewsCarousel } from "../reviews/ReviewsCarousel";
import { NavigationButtons } from "../reviews/NavigationButtons";

export function CustomerTestimonials() {
  const [api, setApi] = useState<any>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const { data: reviewsData, isLoading, error } = useGetReviewsQuery();

  const testimonials: Review[] = reviewsData?.data || [];
  const hasReviews = testimonials.length > 0;

  useEffect(() => {
    if (!api) return

    const updateButtonStates = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    // Initial state update
    updateButtonStates()

    // Listen to scroll events
    api.on("scroll", updateButtonStates)
    api.on("select", updateButtonStates)

    // Cleanup
    return () => {
      api.off("scroll", updateButtonStates)
      api.off("select", updateButtonStates)
    }
  }, [api])

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  if (error) return <div className="text-center text-red-500">Error loading reviews</div>;

  return (
    <Container className="py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-5">
        <div className="mb-4 md:mb-0 ms-0 sm:ms-4 text-center sm:text-left w-full md:w-auto">
          <SectionHeader
            title="What Our Customers Say"
            description="Read authentic reviews from our satisfied customers who experienced."
          />
        </div>

        <NavigationButtons
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onPrevClick={scrollPrev}
          onNextClick={scrollNext}
        />
      </div>

      {/* Show skeleton when loading */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 sm:p-4">
          {[...Array(3)].map((_, i) => (
            <div key={`skeleton-${i}`} className="pl-4 sm:pl-6">
              <AutoSkeletonLoader
                loading={true}
                inheritStyles
                shimmer={true}
                shimmerColor="#e0e0e0"
                highlightColor="#f5f5f5"
                component={<ReviewCard testimonial={createSampleReview()} />}
              />
            </div>
          ))}
        </div>
      )}

      {/* Show actual reviews when not loading and we have reviews */}
      {!isLoading && hasReviews && (
        <ReviewsCarousel
          testimonials={testimonials}
          isLoading={isLoading}
          api={api}
          setApi={setApi}
        />
      )}

      {/* Show no reviews message when not loading and we have no reviews */}
      {!isLoading && !hasReviews && <NoReviews />}
    </Container>
  )
}