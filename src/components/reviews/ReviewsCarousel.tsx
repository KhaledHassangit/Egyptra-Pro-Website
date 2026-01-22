import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ReviewCard } from "./ReviewCard"
import { AutoSkeletonLoader } from "react-loadly"
import { createSampleReview } from "@/helpers/helpers";
import { ReviewsCarouselProps } from "@/constants/types";



export function ReviewsCarousel({ testimonials, isLoading, api, setApi }: ReviewsCarouselProps) {
    
    return (
        
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            setApi={setApi}
            className="w-full p-2 sm:p-4"
        >
            <CarouselContent>
                {testimonials.length > 0 ? (
                    testimonials.map((testimonial) => (
                        <CarouselItem
                            key={testimonial.id}
                            className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                        >
                            <AutoSkeletonLoader
                                loading={isLoading}
                                inheritStyles
                                shimmer={true}
                                shimmerColor="#e0e0e0"
                                highlightColor="#f5f5f5"
                                component={<ReviewCard testimonial={testimonial} />}
                            />
                        </CarouselItem>
                    ))
                ) : (
                    // Show skeleton placeholders when no data is available yet
                    [...Array(3)].map((_, i) => (
                        <CarouselItem
                            key={`skeleton-${i}`}
                            className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                        >
                            <AutoSkeletonLoader
                                loading={true}
                                inheritStyles
                                shimmer={true}
                                shimmerColor="#e0e0e0"
                                highlightColor="#f5f5f5"
                                component={<ReviewCard testimonial={createSampleReview()} />}
                            />
                        </CarouselItem>
                    ))
                )}
            </CarouselContent>
        </Carousel>
    );
}