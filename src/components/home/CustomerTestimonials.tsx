"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  rating: number
  title: string
  content: string
  author: string
  location: string
  date: string
}

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
    <section className="max-w-7xl mx-auto px-4 w-full py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-gray-600">Read authentic reviews from our satisfied customers who experienced.</p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className={`${canScrollPrev ? 'bg-blue-600 border-blue-600 hover:bg-blue-700' : 'bg-gray-300 border-gray-300 cursor-not-allowed'} text-white`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft size={20} />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`${canScrollNext ? 'bg-amber-500 border-amber-500 hover:bg-amber-600' : 'bg-gray-300 border-gray-300 cursor-not-allowed'} text-white`}
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
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {testimonials.map((testimonial) => (
            <CarouselItem 
              key={testimonial.id} 
              className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-full">
                <div className="flex items-center mb-4">
                  <span className="text-amber-500 font-bold text-sm mr-2">5.0</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-3">{testimonial.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{testimonial.content}</p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.date}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}