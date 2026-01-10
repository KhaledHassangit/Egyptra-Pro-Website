"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Container from "@/util/Container"
import { Testimonial } from "@/constants/types"


const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    title: "Great experience",
    content:
      "It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%! It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%!",
    author: "Mohamed Ahmed",
    location: "Roma",
    date: "September 21, 2022",
  },
  {
    id: 2,
    rating: 5,
    title: "Great experience",
    content:
      "It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%! It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%!",
    author: "Mohamed Ahmed",
    location: "Roma",
    date: "September 21, 2022",
  },
  {
    id: 3,
    rating: 5,
    title: "Great experience",
    content:
      "It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%! It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%!",
    author: "Mohamed Ahmed",
    location: "Roma",
    date: "September 21, 2022",
  },
  {
    id: 4,
    rating: 5,
    title: "Great experience",
    content:
      "It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%! It was one of the best decisions to book Ceren. She once me through Istanbul, we tasted amazing food! 100%!",
    author: "Mohamed Ahmed",
    location: "Roma",
    date: "September 21, 2022",
  },
]

export function CustomerTestimonials() {
  const [api, setApi] = useState<any>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

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

  return (
    <Container className="py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-5">
        <div className="mb-4 md:mb-0 ms-4">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-gray-600">Read authentic reviews from our satisfied customers who experienced.</p>
        </div>

        <div className="flex gap-2 me-4">
          <Button
            variant="outline"
            size="icon"
            className={`w-[40px] h-[40px] rounded text-white transition-colors ${
              canScrollPrev 
                ? 'bg-primary hover:bg-primary/90 border-primary' 
                : 'bg-gray-300 border-gray-300 cursor-not-allowed'
            }`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft size={20} />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`w-[40px] h-[40px] rounded text-white transition-colors ${
              canScrollNext 
                ? 'bg-[#D0A87D] hover:bg-[#D0A87D]/90 border-[#D0A87D]' 
                : 'bg-gray-300 border-gray-300 cursor-not-allowed'
            }`}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight size={20} />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        setApi={setApi}
        className="w-full p-4"
      >
        <CarouselContent className="-ml-6">
          {testimonials.map((testimonial) => (
            <CarouselItem 
              key={testimonial.id} 
              className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white shadow-sm h-full flex flex-col p-6 w-[390px] border border-[#D0A87D] rounded-[18px]">
                <div className="flex items-center mb-4">
                  <span className="font-normal text-sm mr-2 text-primary">
                    5.0
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12}
                        className="text-[#D0A87D] fill-[#D0A87D]" 
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-normal text-lg mb-3 text-[#4A4A4A]">
                  {testimonial.title}
                </h3>
                <p className="text-[#282828] font-light text-base leading-5 mb-6 flex-grow">
                  {testimonial.content}
                </p>

                <div className="pt-4 ">
                  <p className="font-normal text-base text-primary">
                    {testimonial.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-normal text-sm text-primary mr-2">
                      {testimonial.location}
                    </p>
                    <p className="font-normal text-sm text-[#4A4A4A] ml-2">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  )
}