"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/util/SectionHeader"
import { cn } from "@/lib/utils"
import { SectionCarouselProps } from "@/constants/types"


export function SectionCarousel({
    title,
    description,
    children,
    className,
    headerClassName,
    carouselClassName,
    opts
}: SectionCarouselProps) {
    const [api, setApi] = React.useState<any>(null)
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(true)

    React.useEffect(() => {
        if (!api) return

        const updateButtonStates = () => {
            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }

        updateButtonStates()

        api.on("scroll", updateButtonStates)
        api.on("select", updateButtonStates)
        api.on("reInit", updateButtonStates)

        return () => {
            api.off("scroll", updateButtonStates)
            api.off("select", updateButtonStates)
            api.off("reInit", updateButtonStates)
        }
    }, [api])

    const scrollPrev = () => api?.scrollPrev()
    const scrollNext = () => api?.scrollNext()

    return (
        <div className={cn("w-full py-8", className)}>
            <div className={cn("flex flex-col md:flex-row justify-between md:items-end mb-6 gap-4", headerClassName)}>
                <div>
                    {title && description && (
                        <SectionHeader title={title} description={description} />
                    )}
                </div>

                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "w-[40px] h-[40px] rounded text-white transition-colors border-none",
                            canScrollPrev
                                ? "bg-primary hover:bg-primary/90"
                                : "bg-gray-300 cursor-not-allowed"
                        )}
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                    >
                        <ChevronLeft size={20} />
                        <span className="sr-only">Previous slide</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "w-[40px] h-[40px] rounded text-white transition-colors border-none",
                            canScrollNext
                                ? "bg-[#D0A87D] hover:bg-[#D0A87D]/90"
                                : "bg-gray-300 cursor-not-allowed"
                        )}
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                    >
                        <ChevronRight size={20} />
                        <span className="sr-only">Next slide</span>
                    </Button>
                </div>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    ...opts,
                }}
                setApi={setApi}
                className={cn("w-full", carouselClassName)}
            >
                <CarouselContent className="-ml-6">
                    {children}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
