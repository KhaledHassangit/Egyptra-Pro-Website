import { Star } from "lucide-react"
import { Review } from "@/constants/types"
import { formatDate } from "@/helpers/helpers";

interface ReviewCardProps {
    testimonial: Review;
}

export function ReviewCard({ testimonial }: ReviewCardProps) {
    return (
        <div className="bg-white shadow-sm h-full flex flex-col p-4 sm:p-6 w-full border border-[#D0A87D] rounded-[18px]">
            <div className="flex items-center mb-4">
                <span className="font-normal text-sm mr-2 text-primary">
                    {testimonial.rating}.0
                </span>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={12}
                            className={`${i < testimonial.rating ? 'text-[#D0A87D] fill-[#D0A87D]' : 'text-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            <h3 className="font-normal text-base sm:text-lg mb-3 text-[#4A4A4A]">
                {testimonial.title}
            </h3>
            <p className="text-[#282828] font-light text-sm sm:text-base leading-5 mb-6 flex-grow">
                {testimonial.content}
            </p>

            <div className="pt-4">
                <p className="font-normal text-sm sm:text-base text-primary">
                    {testimonial.authorName}
                </p>
                <div className="flex items-center justify-between mt-1">
                    <p className="font-normal text-xs sm:text-sm text-primary mr-2">
                        {testimonial.authorLocation}
                    </p>
                    <p className="font-normal text-xs sm:text-sm text-[#4A4A4A] ml-2">
                        {formatDate(testimonial.createdAt)}
                    </p>
                </div>
            </div>
        </div>
    );
}


export function NoReviews() {
    return (
        <div className="flex items-center justify-center w-full py-12">
            <p className="text-gray-500 text-center">No available reviews for now</p>
        </div>
    );
}